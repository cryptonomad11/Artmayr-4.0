import express, { type Request, Response, NextFunction } from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// Security middleware for production
if (app.get("env") === "production") {
  // Remove X-Powered-By header
  app.disable("x-powered-by");
  
  // Apply Helmet for security headers
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"],
      },
    },
    crossOriginEmbedderPolicy: false, // Needed for PDF generation
  }));
  
  // CORS - only allow same origin
  app.use(cors({
    origin: false, // Block all cross-origin requests
    credentials: false
  }));
  
  // Rate limiting for API endpoints
  const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 20, // Limit each IP to 20 requests per windowMs
    message: { error: "Too many requests, please try again later." },
    standardHeaders: true,
    legacyHeaders: false,
  });
  
  // Strict rate limiting for contact form
  const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3, // Limit contact form to 3 submissions per hour per IP
    message: { error: "Too many contact submissions, please try again later." },
    standardHeaders: true,
    legacyHeaders: false,
  });
  
  // Apply rate limiting
  app.use("/api", apiLimiter);
  app.use("/api/contact", contactLimiter);
  
  // Block suspicious user agents and requests
  app.use((req: Request, res: Response, next: NextFunction) => {
    const userAgent = req.get("User-Agent") || "";
    const suspiciousPatterns = [
      /bot/i, /crawler/i, /spider/i, /scraper/i,
      /curl/i, /wget/i, /python/i, /php/i,
      /scanner/i, /vulnerability/i, /exploit/i
    ];
    
    // Block requests with suspicious patterns (except legitimate search bots)
    const legitBots = /googlebot|bingbot|slurp|duckduckbot/i;
    if (suspiciousPatterns.some(pattern => pattern.test(userAgent)) && !legitBots.test(userAgent)) {
      log(`Blocked suspicious request from ${req.ip}: ${userAgent}`);
      return res.status(403).json({ error: "Access denied" });
    }
    
    // Block requests with suspicious headers
    const suspiciousHeaders = ['x-forwarded-for', 'x-real-ip', 'x-originating-ip'];
    for (const header of suspiciousHeaders) {
      if (req.get(header)) {
        log(`Blocked request with suspicious header ${header} from ${req.ip}`);
        return res.status(403).json({ error: "Access denied" });
      }
    }
    
    next();
  });
}

app.use(express.json({ limit: "10mb" })); // Limit JSON payload size
app.use(express.urlencoded({ extended: false, limit: "10mb" })); // Limit URL encoded payload size

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // serve the app on port 3000 for development
  // this serves both the API and the client.
  const port = 3000;
  server.listen(port, "localhost", () => {
    log(`serving on port ${port}`);
  });
})();
