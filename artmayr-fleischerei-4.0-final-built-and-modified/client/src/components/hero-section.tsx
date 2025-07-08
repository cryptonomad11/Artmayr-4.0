import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Download, ChefHat } from "lucide-react";
import { motion } from "framer-motion";
import Counter from "@/components/ui/counter";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-12 relative overflow-hidden min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-red-950 to-amber-950"></div>
      <div className="absolute inset-0 opacity-15">
        <img 
          src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1380" 
          alt="Traditionelle Metzgerarbeit mit handwerklicher Fleischverarbeitung und Schneidkunst" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge className="inline-flex items-center space-x-2 bg-amber-600/20 text-amber-400 border-amber-600/20 px-4 py-2 text-sm font-medium">
                  <ChefHat className="w-4 h-4" />
                  <span>Digitale Transformation 2025</span>
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-amber-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
                  Fleischerei 4.0
                </span>
                <br />
                <span className="text-stone-100">Digital Enterprise Solution</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-stone-300 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Digitale Transformation für Fleischereibetriebe: HACCP-Compliance, 
                IoT-Monitoring und E-Commerce in einer integrierten Plattform.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/animation">
                <Button className="bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 px-8 py-4 text-lg font-semibold hover-lift glow-effect">
                  <Play className="w-5 h-5 mr-2" />
                  Animation starten
                </Button>
              </Link>
              <Link href="/concept-pdf">
                <Button variant="outline" className="border-amber-600/50 hover:border-amber-500 hover:bg-amber-600/10 px-8 py-4 text-lg font-semibold hover-lift text-amber-100">
                  <Download className="w-5 h-5 mr-2" />
                  Konzept ansehen
                </Button>
              </Link>
            </motion.div>

            {/* Key Metrics */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">
                  <Counter end={77} suffix="%" />
                </div>
                <div className="text-sm text-slate-400">ROI garantiert</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">
                  <Counter end={55500} />
                </div>
                <div className="text-sm text-slate-400">€ jährlicher Mehrwert</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500">
                  <Counter end={7} />
                </div>
                <div className="text-sm text-slate-400">Enterprise-Tools integriert</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative glass-card rounded-2xl p-6 shadow-2xl overflow-hidden hover-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-red-500/8 to-orange-500/8"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&h=1380" 
                alt="Traditionelle Fleischerei mit handwerklicher Expertise bereit für digitale Innovation" 
                className="w-full h-80 object-cover rounded-xl relative z-10"
              />
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/20 to-transparent rounded-xl z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
              
              <motion.div 
                className="absolute bottom-8 left-8 right-8 z-30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="bg-black/70 backdrop-blur-md rounded-lg p-4 border border-amber-500/30 shadow-lg">
                  <h3 className="text-lg font-bold text-amber-400 mb-2">🥩 Fleischerei 4.0</h3>
                  <p className="text-stone-200 text-sm">Tradition trifft Enterprise-Technologie</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
