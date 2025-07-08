import { ChefHat, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const solutions = [
    "ERP-Integration",
    "IoT-Monitoring", 
    "E-Commerce",
    "KI-Analytics"
  ];

  const resources = [
    "Dokumentation",
    "Case Studies",
    "ROI-Rechner",
    "Support"
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-red-500 rounded-lg flex items-center justify-center">
                <ChefHat className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold meat-gradient">Fleischerei 4.0</span>
            </div>
            <p className="text-slate-400 text-sm">
              Digitale Transformation für die Fleischbranche - 
              vom traditionellen Handwerk zum digitalen Vorreiter.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Lösungen</h4>
            <div className="space-y-2">
              {solutions.map((solution, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {solution}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Ressourcen</h4>
            <div className="space-y-2">
              {resources.map((resource, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {resource}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2">
              <div className="text-sm text-slate-400 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                avianweinberger@gmail.com
              </div>
              <div className="text-sm text-slate-400 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +4367762095079
              </div>
              <div className="text-sm text-slate-400 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Schlierbach & Kremsmünster, Österreich
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>© 2024 Fleischerei 4.0. Alle Rechte vorbehalten.</p>
          <p className="mt-2">Projektleitung: Avian Weinberger, Partner & Co | Made with ♥ in Schlierbach & Kremsmünster, Österreich</p>
          <p className="mt-2">DSGVO-konform | Datenschutz nach EU-Standards</p>
        </div>
      </div>
    </footer>
  );
}
