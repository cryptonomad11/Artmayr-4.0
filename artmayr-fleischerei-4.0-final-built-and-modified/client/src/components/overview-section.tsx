import { AlertTriangle, Gavel, Users, Cog, ShieldCheck, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function OverviewSection() {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Steigender Kostendruck",
      description: "Energie-, Personal- und Rohstoffkosten explodieren bei stagnierender Marge",
      color: "text-red-500"
    },
    {
      icon: Gavel,
      title: "Regulatorische Komplexität",
      description: "HACCP, DSGVO, EUDR - Die Compliance-Anforderungen werden immer strenger",
      color: "text-red-500"
    },
    {
      icon: Users,
      title: "Fachkräftemangel",
      description: "Qualifizierte Mitarbeiter sind schwer zu finden und zu halten",
      color: "text-red-500"
    }
  ];

  const solutions = [
    {
      icon: Cog,
      title: "Intelligente Zeiterfassung",
      description: "Automatische Arbeitszeitdokumentation mit Fehlerreduktion und Mitarbeiter-Support",
      color: "text-green-500"
    },
    {
      icon: ShieldCheck,
      title: "Management-Entlastung",
      description: "Agent-System für Fehlermeldungen - der Chef wird nur bei wichtigen Entscheidungen kontaktiert",
      color: "text-green-500"
    },
    {
      icon: Brain,
      title: "Buchhaltungsoptimierung",
      description: "Nahtlose Integration in bestehende Systeme für effizientere interne Abläufe",
      color: "text-green-500"
    }
  ];

  return (
    <section id="overview" className="py-20 bg-gradient-to-b from-red-950 to-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 meat-gradient">Von der Herausforderung zur Chance</h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Zeit für Veränderung: Manuelle Prozesse kosten kostbare Zeit und Nerven. 
            Moderne Automation schafft Entlastung für Sie und Ihr Team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Challenges */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-red-500">Die Herausforderungen</h3>
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <challenge.icon className={`${challenge.color} w-4 h-4`} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{challenge.title}</h4>
                    <p className="text-slate-300">{challenge.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-green-500">Unsere Lösung</h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <solution.icon className={`${solution.color} w-4 h-4`} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{solution.title}</h4>
                    <p className="text-slate-300">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
