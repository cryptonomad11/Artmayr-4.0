import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, ChefHat, Handshake, CheckCircle, Rocket, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function TeamSection() {
  const teamStrengths = [
    {
      icon: Code,
      title: "Full-Stack Entwicklung",
      description: "React, Node.js, Python, DevOps - alles aus einer Hand",
      color: "text-blue-500"
    },
    {
      icon: ChefHat,
      title: "Branchenfokus Lebensmittel",
      description: "Tiefes Verständnis für HACCP, Compliance und Handwerksbetriebe",
      color: "text-green-500"
    },
    {
      icon: Handshake,
      title: "Partnerschaftlicher Ansatz",
      description: "Langfristige Zusammenarbeit, nicht nur einmalige Implementierung",
      color: "text-amber-500"
    }
  ];

  const promises = [
    "Transparente Kommunikation",
    "Realistische Zeitpläne", 
    "Kontinuierliche Betreuung",
    "Open-Source Philosophie"
  ];

  const roadmapPhases = [
    {
      months: "1-6",
      title: "Fundament & Compliance",
      description: "ERP, IoT, HACCP-Automatisierung",
      color: "bg-blue-600/20 text-blue-400"
    },
    {
      months: "7-12",
      title: "E-Commerce & Mobile",
      description: "Online-Shop, Apps, erweiterte Workflows",
      color: "bg-amber-500/20 text-amber-400"
    },
    {
      months: "13-18",
      title: "KI & Sicherheit",
      description: "Prognosen, Optimierung, Cybersecurity",
      color: "bg-green-500/20 text-green-400"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-amber-950 to-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 meat-gradient">
            Projektteam & Partnerschaften
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Schlankes Team mit bewährten Partnern für kosteneffiziente Umsetzung.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1380" 
                    alt="Team collaboration in modern office environment focused on digital transformation projects" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle>Avian Weinberger & Partner Co</CardTitle>
                    <p className="text-slate-400">Lead Developer & System Architect</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {teamStrengths.map((strength, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <strength.icon className={`${strength.color} w-6 h-6 mt-1`} />
                    <div>
                      <h4 className="font-semibold mb-1">{strength.title}</h4>
                      <p className="text-sm text-slate-300">{strength.description}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card border-slate-700">
              <CardHeader>
                <CardTitle>Unser Versprechen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {promises.map((promise, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle className="text-green-500 w-4 h-4" />
                    <span className="text-sm">{promise}</span>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-card border-slate-700">
              <CardHeader>
                <CardTitle>18-Monats Roadmap</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {roadmapPhases.map((phase, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className={`w-12 h-12 ${phase.color} rounded-full flex items-center justify-center font-bold text-sm`}>
                      {phase.months}
                    </div>
                    <div>
                      <h4 className="font-semibold">{phase.title}</h4>
                      <p className="text-sm text-slate-400">{phase.description}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card border-amber-500/30 bg-gradient-to-br from-amber-500/20 to-blue-600/20">
              <CardContent className="p-8">
                <div className="text-center">
                  <Rocket className="text-amber-500 w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Bereit für den Start?</h3>
                  <p className="text-slate-300 mb-6">
                    Lassen Sie uns gemeinsam die digitale Zukunft Ihrer Fleischerei gestalten. 
                    Erste Schritte können bereits nächste Woche beginnen.
                  </p>
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold">
                    <Calendar className="w-4 h-4 mr-2" />
                    Umsetzung starten
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
