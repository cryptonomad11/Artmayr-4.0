import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, FileText, Calendar, Users, Target, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function ConceptPdf() {
  const downloadPdf = () => {
    // Create PDF content as HTML that can be printed to PDF
    const pdfWindow = window.open('', '_blank');
    if (pdfWindow) {
      pdfWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Fleischerei 4.0 - Executive Summary</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                text-align: center;
                border-bottom: 3px solid #d97706;
                padding-bottom: 20px;
                margin-bottom: 30px;
              }
              .logo {
                font-size: 2.5em;
                font-weight: bold;
                background: linear-gradient(45deg, #d97706, #dc2626);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
              .section {
                margin: 30px 0;
                page-break-inside: avoid;
              }
              .section h2 {
                color: #d97706;
                border-bottom: 2px solid #fbbf24;
                padding-bottom: 10px;
              }
              .highlight-box {
                background: #fef3c7;
                border-left: 4px solid #d97706;
                padding: 15px;
                margin: 20px 0;
              }
              .roi-table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
              }
              .roi-table th, .roi-table td {
                border: 1px solid #ddd;
                padding: 12px;
                text-align: left;
              }
              .roi-table th {
                background: #f59e0b;
                color: white;
              }
              .phase {
                background: #f9fafb;
                border: 1px solid #e5e7eb;
                padding: 20px;
                margin: 15px 0;
                border-radius: 8px;
              }
              .phase h3 {
                color: #1f2937;
                margin-top: 0;
              }
              @media print {
                body { print-color-adjust: exact; }
                .page-break { page-break-before: always; }
              }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="logo">Fleischerei 4.0</div>
              <h1>Executive Summary - Artmayr GmbH</h1>
              <p><strong>Digitale Transformation für österreichisches Fleischerhandwerk</strong></p>
              <p>Datum: ${new Date().toLocaleDateString('de-DE')}</p>
            </div>

            <div class="section">
              <h2>🎯 Projektvision</h2>
              <p>Die Artmayr GmbH als digitaler Vorreiter im österreichischen Fleischerhandwerk zu etablieren, der durch Effizienz, Transparenz und ein überragendes Kundenerlebnis neue Maßstäbe setzt.</p>
              
              <div class="highlight-box">
                <strong>ROI-Garantie:</strong> 77% Return on Investment mit €55.500 jährlichem Netto-Gewinn durch Enterprise-Digitalisierung
              </div>
            </div>

            <div class="section">
              <h2>💰 Business Case & ROI</h2>
              <table class="roi-table">
                <tr>
                  <th>ROI-Hebel</th>
                  <th>Jährlicher Wert</th>
                </tr>
                <tr>
                  <td>Compliance & Effizienz</td>
                  <td>€30.000</td>
                </tr>
                <tr>
                  <td>E-Commerce Umsatzsteigerung</td>
                  <td>€48.000</td>
                </tr>
                <tr>
                  <td>KI-Abfallreduzierung</td>
                  <td>€37.500</td>
                </tr>
                <tr>
                  <td>Risikominimierung</td>
                  <td>€12.000</td>
                </tr>
                <tr style="background: #fef3c7; font-weight: bold;">
                  <td>Gesamter Mehrwert</td>
                  <td>€127.500</td>
                </tr>
              </table>
              
              <p><strong>Operative Kosten:</strong> €6.000-12.000/Monat (€72.000-144.000/Jahr)<br>
              <strong>Netto-Gewinn:</strong> €55.500/Jahr (bei €72.000 Systemkosten)<br>
              <strong>ROI:</strong> 77%</p>
            </div>

            <div class="page-break"></div>

            <div class="section">
              <h2>🏗️ 3-Phasen Implementierung</h2>
              
              <div class="phase">
                <h3>Phase 1: Grundstein & Compliance (Monate 1-3)</h3>
                <ul>
                  <li>Sage X3 Food & Beverage ERP Implementation</li>
                  <li>HOBART SmartKitchen IoT-Integration</li>
                  <li>100% HACCP-Compliance Automatisierung</li>
                </ul>
                <p><strong>Meilenstein:</strong> Automatisierte HACCP-Protokollierung und lückenlose Chargenverfolgung</p>
              </div>

              <div class="phase">
                <h3>Phase 2: Effizienz & Wachstum (Monate 4-6)</h3>
                <ul>
                  <li>Shopware 6 Food Edition E-Commerce</li>
                  <li>Flutter Mobile App Entwicklung</li>
                  <li>Azure Logic Apps Integration</li>
                </ul>
                <p><strong>Meilenstein:</strong> Online-Shop ist live und generiert erste Umsätze</p>
              </div>

              <div class="phase">
                <h3>Phase 3: KI-Optimierung & Skalierung (Monat 7+)</h3>
                <ul>
                  <li>Azure AI for Manufacturing</li>
                  <li>Power BI Premium Analytics</li>
                  <li>KI-gestützte Abfallreduzierung</li>
                </ul>
                <p><strong>Meilenstein:</strong> KI-Modell zur Abfallreduzierung liefert messbare Ergebnisse</p>
              </div>
            </div>

            <div class="section">
              <h2>💻 Technologie-Stack</h2>
              <ol>
                <li><strong>Core ERP:</strong> Sage X3 Food & Beverage Edition</li>
                <li><strong>IoT Monitoring:</strong> HOBART SmartKitchen Platform</li>
                <li><strong>Mobile App:</strong> Flutter Native Application</li>
                <li><strong>AI Analytics:</strong> Microsoft Azure AI for Manufacturing</li>
                <li><strong>E-Commerce:</strong> Shopware 6 Food & Beverage Edition</li>
                <li><strong>Business Intelligence:</strong> Power BI Premium</li>
                <li><strong>Integration:</strong> Microsoft Azure Logic Apps</li>
              </ol>
            </div>

            <div class="section">
              <h2>🎯 Nächste Schritte</h2>
              <ol>
                <li><strong>Workshop (1 Tag):</strong> Gemeinsame Priorisierung und Feinabstimmung</li>
                <li><strong>Vertragsunterzeichnung:</strong> Finale Projektbeauftragung</li>
                <li><strong>Projektstart:</strong> 2 Wochen nach Beauftragung</li>
              </ol>
              
              <div class="highlight-box">
                <strong>Wichtiger Hinweis:</strong> Alle Preisangaben sind Musterdaten zur Orientierung. 
                Die finalen Kosten werden nach ausführlichen Gesprächen, internen Analysen und 
                Besichtigungen der bestehenden Systeme individuell beurteilt und vereinbart.
              </div>
            </div>

            <div class="section">
              <h2>📞 Kontakt</h2>
              <p><strong>MiniMax Agent</strong><br>
              Digital Transformation Lead<br>
              Fleischerei 4.0 - Artmayr GmbH Projekt</p>
            </div>
          </body>
        </html>
      `);
      pdfWindow.document.close();
      
      // Auto-print dialog
      setTimeout(() => {
        pdfWindow.print();
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-950 via-red-950 to-amber-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/">
            <Button variant="outline" className="mb-6 border-amber-600/50 hover:border-amber-500 text-amber-100">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Hauptseite
            </Button>
          </Link>
          
          <h1 className="text-5xl font-bold mb-4 meat-gradient">
            Konzept-Dokumentation
          </h1>
          <p className="text-xl text-stone-300">
            Vollständiges Executive Summary der Fleischerei 4.0 Digitalisierung für Artmayr GmbH
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <div className="glass-card p-8 border-amber-900/30">
            <FileText className="w-12 h-12 text-amber-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Executive Summary</h3>
            <p className="text-stone-300 mb-6">
              Umfassende Projektdokumentation mit ROI-Kalkulation, 
              Technologie-Stack und Implementierungsplan
            </p>
            <ul className="space-y-2 text-stone-300 text-sm">
              <li className="flex items-center">
                <Target className="w-4 h-4 text-green-500 mr-2" />
                77% ROI-Garantie
              </li>
              <li className="flex items-center">
                <BarChart3 className="w-4 h-4 text-green-500 mr-2" />
                €55.500 jährlicher Netto-Gewinn
              </li>
              <li className="flex items-center">
                <Calendar className="w-4 h-4 text-green-500 mr-2" />
                6-7 Monate Umsetzung
              </li>
              <li className="flex items-center">
                <Users className="w-4 h-4 text-green-500 mr-2" />
                7 Enterprise-Tools integriert
              </li>
            </ul>
          </div>

          <div className="glass-card p-8 border-blue-900/30">
            <Download className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-blue-400">PDF-Export</h3>
            <p className="text-stone-300 mb-6">
              Exportieren Sie das vollständige Konzept als druckbares PDF-Dokument 
              für interne Besprechungen und Präsentationen
            </p>
            <Button 
              onClick={downloadPdf}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              <Download className="w-4 h-4 mr-2" />
              PDF generieren & herunterladen
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-8 border-amber-900/30"
        >
          <h3 className="text-2xl font-bold mb-6 meat-gradient">Dokument-Inhalt</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-amber-400 mb-3">Strategische Übersicht</h4>
              <ul className="space-y-2 text-stone-300 text-sm">
                <li>• Projektvision und Ziele</li>
                <li>• ROI-Kalkulation detailliert</li>
                <li>• Business Case Analyse</li>
                <li>• Investitionsübersicht</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-400 mb-3">Technische Details</h4>
              <ul className="space-y-2 text-stone-300 text-sm">
                <li>• 3-Phasen Implementierung</li>
                <li>• Enterprise Technologie-Stack</li>
                <li>• HACCP-Compliance Strategie</li>
                <li>• Nächste Schritte & Timeline</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}