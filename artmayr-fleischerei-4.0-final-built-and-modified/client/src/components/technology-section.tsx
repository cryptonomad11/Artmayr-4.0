import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GitBranch, 
  Database, 
  Monitor, 
  Thermometer, 
  Brain, 
  ShoppingCart,
  Network,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

export default function TechnologySection() {
  const technologies = [
    {
      icon: GitBranch,
      title: "n8n Workflow Engine",
      description: "Open-Source Automatisierungsplattform für alle Geschäftsprozesse. Visuelle Workflow-Erstellung ohne Programmierung.",
      color: "text-blue-600",
      bgColor: "bg-blue-600/20",
      features: ["HACCP Automation", "Bestellprozesse", "Kundenkommunikation"]
    },
    {
      icon: Database,
      title: "Supabase Backend",
      description: "Open-Source Firebase-Alternative mit PostgreSQL-Datenbank. Echtzeitdaten und automatische API-Generierung.",
      color: "text-green-500",
      bgColor: "bg-green-500/20",
      features: ["Echtzeit-Synchronisation", "Automatische Backups", "EU-DSGVO konform"]
    },
    {
      icon: Monitor,
      title: "Next.js Dashboard",
      description: "Moderne React-basierte Benutzeroberfläche mit Server-Side Rendering für optimale Performance und SEO.",
      color: "text-amber-500",
      bgColor: "bg-amber-500/20",
      features: ["Mobile-First Design", "Progressive Web App", "Offline-Funktionalität"]
    },
    {
      icon: Thermometer,
      title: "IoT Monitoring",
      description: "Lückenlose Temperaturüberwachung mit InfluxDB und Grafana. Automatische Alarmierung bei Grenzwertüberschreitungen.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/20",
      features: ["24/7 Überwachung", "Automatische Protokolle", "Smartphone-Benachrichtigungen"]
    },
    {
      icon: Brain,
      title: "Open-Source KI",
      description: "TensorFlow-basierte Modelle für Bedarfsprognosen und Optimierung. Läuft komplett auf Ihrer eigenen Infrastruktur.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/20",
      features: ["Verkaufsprognosen", "Verschnitt-Minimierung", "Preisoptimierung"]
    },
    {
      icon: ShoppingCart,
      title: "Medusa E-Commerce",
      description: "Open-Source Shopify-Alternative mit headless Architektur. Vollständig anpassbar und kostengünstig zu betreiben.",
      color: "text-green-600",
      bgColor: "bg-green-600/20",
      features: ["B2B & B2C Ready", "Multi-Channel", "Integrierte Zahlungssysteme"]
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-amber-950 to-red-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 meat-gradient">
            Bewährte Open-Source Technologien
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Kostengünstige, sichere und zukunftssichere Lösungen mit n8n-Automatisierung 
            für maximale Effizienz und Transparenz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card border-slate-700 hover:border-slate-600 hover-lift h-full">
                <CardHeader>
                  <div className={`w-16 h-16 ${tech.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <tech.icon className={`${tech.color} w-8 h-8`} />
                  </div>
                  <CardTitle className="text-xl">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-300">{tech.description}</p>
                  <div className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500 w-4 h-4" />
                        <span className="text-sm text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glass-card border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Systemarchitektur Übersicht</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&h=1383" 
                  alt="Modern business automation architecture with interconnected systems and data flows" 
                  className="w-full h-64 object-cover rounded-xl opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Network className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">Integrierte Systemlandschaft</h4>
                    <p className="text-slate-300">Alle Komponenten kommunizieren nahtlos über standardisierte APIs</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
