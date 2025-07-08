# Fleischerei 4.0 - Artmayr GmbH

Dies ist das Frontend-Projekt für die Fleischerei 4.0 Digital Enterprise Solution.

## Deployment auf Vercel

Dieses Projekt ist für das Deployment auf Vercel vorkonfiguriert. Stellen Sie sicher, dass Sie die `vercel.json` und `package.json` im Root-Verzeichnis Ihres Projekts haben.

1.  **GitHub Repository**: Stellen Sie sicher, dass Ihr Projekt in einem GitHub-Repository liegt.
2.  **Vercel Import**: Gehen Sie zu [Vercel](https://vercel.com/) und importieren Sie Ihr GitHub-Repository.
3.  **Build & Deployment Settings**: Vercel sollte die `package.json` und `vercel.json` automatisch erkennen und die korrekten Build-Einstellungen verwenden. Falls nicht, stellen Sie sicher, dass:
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `dist/public`
4.  **Deploy**: Klicken Sie auf 

