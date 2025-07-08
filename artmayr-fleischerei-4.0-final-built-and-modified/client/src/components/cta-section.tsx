import { Button } from "@/components/ui/button";
import { Play, Calendar, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-stone-950 to-red-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 meat-gradient">
            Bereit für die Smart-Revolution?
          </h2>
          <p className="text-xl text-stone-300 mb-12 max-w-3xl mx-auto">
            Starten Sie heute noch mit der intelligenten Automation Ihrer Fleischerei. 
            Erste Entlastungen spüren Sie bereits ab Tag 1.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/animation">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-white px-8 py-4 hover-lift glow-effect">
                <Play className="w-5 h-5 mr-2" />
                Animation starten
              </Button>
            </Link>
            <Link href="/concept-pdf">
              <Button size="lg" variant="outline" className="border-amber-600/50 hover:border-amber-500 hover:bg-amber-600/10 px-8 py-4 text-amber-100 hover-lift">
                <Calendar className="w-5 h-5 mr-2" />
                Konzept herunterladen
              </Button>
            </Link>
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-amber-400">
                Was Sie wirklich erreichen können:
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-stone-900/30 p-4 rounded-lg border border-amber-900/30">
                  <Clock className="w-8 h-8 text-green-500 mb-3" />
                  <h4 className="font-semibold mb-2">Mehr freie Zeit</h4>
                  <p className="text-stone-400 text-sm">Weniger administrative Arbeit, mehr Zeit für strategische Entscheidungen und Familie</p>
                </div>
                <div className="bg-stone-900/30 p-4 rounded-lg border border-amber-900/30">
                  <Award className="w-8 h-8 text-amber-500 mb-3" />
                  <h4 className="font-semibold mb-2">Messbare Effizienz</h4>
                  <p className="text-stone-400 text-sm">Konkrete Zeitersparnis und reduzierte Fehlerquoten durch intelligente Automation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}