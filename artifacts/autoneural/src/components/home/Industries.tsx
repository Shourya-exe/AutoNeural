import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  Factory, 
  ShoppingBag, 
  Landmark, 
  HardHat, 
  Truck, 
  Utensils, 
  GraduationCap, 
  Building2, 
  Ship, 
  Home, 
  Car 
} from 'lucide-react';

export function Industries() {
  const industries = [
    { icon: HeartPulse, name: "Healthcare", desc: "Patient data, diagnostics, compliance" },
    { icon: Factory, name: "Manufacturing", desc: "Quality control, supply chain, robotics" },
    { icon: ShoppingBag, name: "Retail", desc: "Inventory optimization, demand prediction" },
    { icon: Landmark, name: "Finance", desc: "Fraud detection, algorithmic trading" },
    { icon: HardHat, name: "Construction", desc: "Site monitoring, safety analytics" },
    { icon: Truck, name: "Logistics", desc: "Route optimization, fleet management" },
    { icon: Utensils, name: "Hospitality", desc: "Dynamic pricing, customer service agents" },
    { icon: GraduationCap, name: "Education", desc: "Personalized learning, admin automation" },
    { icon: Building2, name: "Government", desc: "Public service delivery, document processing" },
    { icon: Ship, name: "Seafood Export", desc: "Trade OS, pricing intel, global customs" },
    { icon: Home, name: "Real Estate", desc: "Market prediction, property valuation" },
    { icon: Car, name: "Automotive", desc: "Connected vehicles, production efficiency" }
  ];

  return (
    <section id="industries" className="py-24 bg-white" data-testid="industries-section">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            Industries We Serve
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 bg-muted rounded-2xl border border-transparent hover:border-primary/30 hover:bg-white hover:shadow-clay hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              data-testid={`industry-card-${index}`}
            >
              <ind.icon size={32} className="text-secondary-foreground group-hover:text-primary transition-colors mb-4" />
              <h4 className="text-lg font-heading font-semibold text-foreground mb-2">{ind.name}</h4>
              <p className="text-sm text-secondary-foreground">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
