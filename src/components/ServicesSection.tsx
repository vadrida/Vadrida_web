import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Building2, BarChart3, Check } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Valuation",
    description:
      "Comprehensive market value assessments for residential properties including apartments, villas, and independent houses.",
    checklist: [
      "Complete site inspection",
      "Property photography",
      "Document verification",
      "Market comparison",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Valuation",
    description:
      "Professional assessment of commercial properties including offices, retail spaces, and industrial facilities.",
    checklist: [
      "Income approach",
      "Rental valuation",
      "Location assessment",
      "Infrastructure evaluation",
    ],
  },
  {
    icon: BarChart3,
    title: "Loan Portfolio Analysis",
    description:
      "Bulk property valuations for banking institutions with standardized reporting and risk assessment.",
    checklist: [
      "Bulk processing",
      "Standardized reporting",
      "Risk assessment",
      "Portal integration",
    ],
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="card-3d bg-card border border-border shadow-md group"
    >
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
          <service.icon className="w-8 h-8 text-primary" />
        </div>

        <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
          {service.title}
        </h3>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {service.description}
        </p>

        <ul className="space-y-3">
          {service.checklist.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-accent" />
              </div>
              <span className="text-sm text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Valuation <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive property valuation solutions tailored for banking
            institutions and financial partners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
