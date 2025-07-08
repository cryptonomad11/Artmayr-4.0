import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Code, Handshake } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-stone-900 to-red-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 meat-gradient">
            Investition & ROI-Garantie
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Enterprise-Architektur mit 77% ROI-Garantie. Wertbasiertes Preismodell 
            minimiert Ihr Risiko und koppelt unseren Erfolg an Ihren.
          </p>
          <div className="mt-4 p-3 bg-amber-900/20 border border-amber-600/30 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-amber-200">
              <strong>* Schätzwerte:</strong> Alle Preise und ROI-Berechnungen sind Durchschnittswerte zur Orientierung. 
              Finale Kosten und Ergebnisse variieren je nach spezifischen Anforderungen und werden individuell ermittelt.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="glass-card border-amber-900/30 bg-gradient-to-br from-amber-950/20 to-red-950/20 hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center text-amber-400">
                <Code className="w-6 h-6 mr-3" />
                Enterprise-Lösung
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">6.000-12.000€*</div>
                <div className="text-stone-400">Monatliche Betriebskosten</div>
                <div className="text-sm text-stone-500 mt-2">Setup ab 12.000€* (gestaffelt)</div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Sage X3 + 6 weitere Enterprise-Tools
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  100% HACCP & EU-Compliance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Cloud-native Azure-Architektur
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  6-7 Monate Implementierung
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card border-green-900/30 bg-gradient-to-br from-green-950/20 to-amber-950/20 hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center text-green-400">
                <Handshake className="w-6 h-6 mr-3" />
                ROI-Garantie
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">77%*</div>
                <div className="text-stone-400">Return on Investment</div>
                <div className="text-sm text-stone-500 mt-2">55.500€* jährlicher Nettoprofit</div>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  25.000€* Effizienzsteigerung/Jahr
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  36.000€* E-Commerce Potenzial
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  28.500€* KI-Abfallreduzierung
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  10.500€* Risikominimierung
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="glass-card border-blue-900/30 bg-gradient-to-r from-blue-950/20 to-purple-950/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Projektstart
              </h3>
              <div className="text-xl font-bold meat-gradient mb-2">
                2 Wochen nach Beauftragung
              </div>
              <p className="text-stone-400 mb-4">
                Maßgeschneiderte Enterprise-Lösung für österreichisches Fleischerhandwerk
              </p>
              <div className="text-sm text-stone-300">
                Workshop-Phase: Gemeinsame Priorisierung der Anforderungen und 
                Feinabstimmung des 3-Phasen-Implementierungsplans
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}