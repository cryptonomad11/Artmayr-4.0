import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen haben"),
  phase: z.enum(["phase1", "phase2", "phase3", "all"]).optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);
      
      // Here you would typically send an email or save to database
      console.log("Contact form submission:", data);
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      res.json({ 
        success: true, 
        message: "Vielen Dank für Ihre Anfrage! Wir melden uns binnen 24 Stunden bei Ihnen." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut." 
      });
    }
  });

  // ROI calculation endpoint
  app.post("/api/calculate-roi", async (req, res) => {
    try {
      const { compliance, ecommerce, ai, operatingCosts } = req.body;
      
      const totalValue = compliance + ecommerce + ai;
      const netProfit = totalValue - operatingCosts;
      const roi = Math.round((netProfit / operatingCosts) * 100);
      
      res.json({
        totalValue,
        netProfit,
        roi,
        breakdown: {
          compliance,
          ecommerce,
          ai,
          operatingCosts
        }
      });
    } catch (error) {
      console.error("ROI calculation error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Fehler bei der ROI-Berechnung" 
      });
    }
  });

  // Newsletter signup
  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email || !z.string().email().safeParse(email).success) {
        return res.status(400).json({ 
          success: false, 
          message: "Ungültige E-Mail-Adresse" 
        });
      }
      
      // Here you would add to newsletter service
      console.log("Newsletter signup:", email);
      
      res.json({ 
        success: true, 
        message: "Erfolgreich für Newsletter angemeldet!" 
      });
    } catch (error) {
      console.error("Newsletter signup error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Fehler bei der Anmeldung" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
