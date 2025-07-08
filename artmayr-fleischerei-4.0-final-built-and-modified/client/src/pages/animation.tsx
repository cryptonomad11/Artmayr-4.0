import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChefHat, Cpu, BarChart3, Shield, Smartphone, Brain, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Animation() {
  const steps = [
    {
      id: 1,
      title: "Artmayr GmbH Heute",
      subtitle: "Traditionelle Fleischerei in Schlierbach",
      icon: ChefHat,
      color: "amber",
      description: "Handwerkliche Fleischverarbeitung mit manuellen Prozessen",
      details: ["Papierbasierte HACCP-Dokumentation", "Manuelle Temperaturkontrollen", "Traditionelle Verkaufsmethoden"]
    },
    {
      id: 2,
      title: "Phase 1: Digitales Fundament",
      subtitle: "Sage X3 ERP & IoT-Monitoring",
      icon: Cpu,
      color: "blue",
      description: "Enterprise-Architektur mit HACCP-Compliance",
      details: ["Sage X3 Food & Beverage Edition", "HOBART SmartKitchen IoT", "Automatisierte Temperaturüberwachung"]
    },
    {
      id: 3,
      title: "Phase 2: Wachstum & E-Commerce",
      subtitle: "Shopware & Mobile App",
      icon: Smartphone,
      color: "green",
      description: "Neue Vertriebskanäle und Kundeninteraktion",
      details: ["Shopware 6 Food Edition", "Flutter Mobile App", "Azure Logic Apps Integration"]
    },
    {
      id: 4,
      title: "Phase 3: KI-Optimierung",
      subtitle: "Azure AI & Power BI Analytics",
      icon: Brain,
      color: "purple",
      description: "Intelligente Datenanalyse und Optimierung",
      details: ["Azure AI for Manufacturing", "Power BI Premium", "KI-gestützte Abfallreduzierung"]
    },
    {
      id: 5,
      title: "Artmayr 4.0 - Die Zukunft",
      subtitle: "Digitaler Vorreiter im Fleischerhandwerk",
      icon: Zap,
      color: "emerald",
      description: "236% ROI mit €127.500 jährlichem Mehrwert",
      details: ["100% HACCP-Compliance automatisiert", "48.000€ E-Commerce Potenzial", "37.500€ KI-Einsparungen"]
    }
  ];

  const colorClasses = {
    amber: { bg: "bg-amber-500/20", text: "text-amber-400", border: "border-amber-500/30" },
    blue: { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" },
    green: { bg: "bg-green-500/20", text: "text-green-400", border: "border-green-500/30" },
    purple: { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/30" },
    emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/30" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-950 via-red-950 to-amber-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            Fleischerei 4.0 Animation
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl">
            Erleben Sie die digitale Transformation der Artmayr GmbH von traditioneller 
            Fleischerei zum Enterprise-4.0-Vorreiter
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-12`}
            >
              <div className="flex-1">
                <Card className={`glass-card ${colorClasses[step.color].border} hover-lift`}>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${colorClasses[step.color].bg} rounded-2xl flex items-center justify-center mr-4`}>
                        <step.icon className={`${colorClasses[step.color].text} w-8 h-8`} />
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold ${colorClasses[step.color].text}`}>
                          {step.title}
                        </h3>
                        <p className="text-stone-400">{step.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-stone-300 text-lg mb-6">{step.description}</p>
                    
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + detailIndex * 0.1 + 0.5 }}
                          className="flex items-center"
                        >
                          <div className={`w-3 h-3 ${colorClasses[step.color].bg} rounded-full mr-3`}></div>
                          <span className="text-stone-300">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex-shrink-0">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className={`w-20 h-20 ${colorClasses[step.color].bg} rounded-full flex items-center justify-center ${colorClasses[step.color].border} border-2`}
                >
                  <span className={`text-2xl font-bold ${colorClasses[step.color].text}`}>
                    {step.id}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <Card className="glass-card border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-green-500/10 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="flex items-center justify-center mb-6">
                <BarChart3 className="w-16 h-16 text-emerald-400 mr-4" />
                <div>
                  <h3 className="text-3xl font-bold text-emerald-400">Erfolgsgarantie</h3>
                  <p className="text-stone-300">236% ROI innerhalb 12 Monate</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">€127.500</div>
                  <div className="text-stone-400">Jährlicher Mehrwert</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-400 mb-2">7</div>
                  <div className="text-stone-400">Enterprise-Tools</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">6-7</div>
                  <div className="text-stone-400">Monate Umsetzung</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}