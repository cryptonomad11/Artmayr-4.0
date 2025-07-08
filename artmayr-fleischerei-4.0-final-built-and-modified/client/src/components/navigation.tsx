import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChefHat } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: "Überblick", id: "overview" },
    { label: "3-Phasen Plan", id: "phases" },
    { label: "Effizienz-Prognose", id: "roi" },
    { label: "Technologie", id: "technology" },
    { label: "Investition", id: "pricing" },
    { label: "Team", id: "team" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-stone-950/95 backdrop-blur-md border-b border-amber-900/30' 
          : 'bg-stone-950/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-red-500 rounded-lg flex items-center justify-center">
              <ChefHat className="text-white text-lg" />
            </div>
            <span className="text-xl font-bold text-white meat-gradient">Artmayr 4.0</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-blue-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Link to="/concept-pdf">
              <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors font-medium">
                Konzept anzeigen
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-900 border-slate-700">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left hover:text-blue-400 transition-colors py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <Link to="/concept-pdf">
                  <Button className="bg-blue-600 hover:bg-blue-700 mt-4">
                    Konzept anzeigen
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
