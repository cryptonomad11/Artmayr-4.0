import { FolderRoot, Rocket, Brain, CheckCircle, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function PhasesSection() {
  const phases = [
    {
      number: 1,
      title: "Phase 1: Grundstein & Compliance",
      subtitle: "Monate 1-3*: Schätzungen, können je nach Komplexität variieren. Sage X3 ERP, IoT-Monitoring und HACCP-Automatisierung",
      icon: FolderRoot,
      color: "blue",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1380",
      features: [
        "Sage X3 Food & Beverage ERP",
        "HOBART SmartKitchen IoT",
        "100% HACCP-Compliance"
      ],
      side: "right"
    },
    {
      number: 2,
      title: "Phase 2: Effizienz & Wachstum", 
      subtitle: "Monate 4-6*: Schätzungen, können je nach Komplexität variieren. Shopware E-Commerce und Mobile App-Entwicklung",
      icon: Rocket,
      color: "amber",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1380",
      features: [
        "Shopware 6 Food Edition",
        "Flutter Mobile App",
        "Azure Logic Apps Integration"
      ],
      side: "left"
    },
    {
      number: 3,
      title: "Phase 3: KI-Optimierung & Skalierung",
      subtitle: "Monat 7*: Schätzungen, können je nach Komplexität variieren. Azure AI Analytics und Power BI Intelligence",
      icon: Brain,
      color: "green",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600",
      features: [
        "Azure AI for Manufacturing",
        "Power BI Premium Analytics", 
        "KI-gestützte Abfallreduzierung"
      ],
      side: "right"
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-600/20",
      text: "text-blue-400",
      border: "border-blue-600/50",
      gradient: "from-blue-600/10"
    },
    amber: {
      bg: "bg-amber-500/20",
      text: "text-amber-400",
      border: "border-amber-500/50",
      gradient: "from-amber-500/10"
    },
    green: {
      bg: "bg-green-500/20",
      text: "text-green-400",
      border: "border-green-500/50",
      gradient: "from-green-500/10"
    }
  };

  return (
    <section id="phases" className="py-20 bg-gradient-to-b from-stone-900 to-amber-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 meat-gradient">
            3-Phasen Smart-Transformation
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Schritt für Schritt zur intelligenten Fleischerei: 
            Sofortige Verbesserungen ab Tag 1, langfristiger Erfolg garantiert.
          </p>

        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 via-amber-500 to-green-500 hidden lg:block"></div>

          {phases.map((phase, index) => (
            <motion.div 
              key={phase.number}
              className={`relative flex items-center mb-16 ${
                phase.side === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex-col lg:gap-0 gap-8`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`flex-1 ${phase.side === 'right' ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}`}>
                <div className={`glass-card rounded-2xl p-8 border ${colorClasses[phase.color].border} hover:scale-105 transition-all duration-300`}>
                  <div className={`flex ${phase.side === 'right' ? 'lg:justify-end' : 'lg:justify-start'} justify-center mb-4`}>
                    <div className={`w-16 h-16 ${colorClasses[phase.color].bg} rounded-2xl flex items-center justify-center`}>
                      <phase.icon className={`${colorClasses[phase.color].text} w-8 h-8`} />
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${colorClasses[phase.color].text}`}>{phase.title}</h3>
                  <p className="text-slate-300 mb-6">{phase.subtitle}</p>
                  
                  <div className="mb-6 relative overflow-hidden rounded-xl">
                    <img 
                      src={phase.image} 
                      alt={`${phase.title} visualization`}
                      className="w-full h-40 object-cover"
                      onError={(e) => {
                        console.log('Image failed to load:', phase.image);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses[phase.color].gradient} to-transparent`}></div>
                  </div>

                  <div className="space-y-3">
                    {phase.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className={`flex items-center ${phase.side === 'right' ? 'lg:justify-end' : 'lg:justify-start'} justify-center space-x-2`}
                      >
                        {phase.side === 'right' && <span className="text-sm text-slate-300">{feature}</span>}
                        <CheckCircle className="text-green-500 w-4 h-4" />
                        {phase.side === 'left' && <span className="text-sm text-slate-300">{feature}</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Timeline Node */}
              <div className={`w-8 h-8 ${colorClasses[phase.color].bg} rounded-full border-4 border-slate-900 z-10 flex items-center justify-center hidden lg:flex`}>
                <span className="text-white font-bold text-sm">{phase.number}</span>
              </div>
              
              <div className="flex-1 lg:block hidden"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
