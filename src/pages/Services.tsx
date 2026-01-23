import { motion } from "framer-motion";
import { Home, Building2, BarChart3, Check, FileSearch, Landmark, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Residential Valuation",
    description:
      "Comprehensive market value assessments for residential properties including apartments, villas, independent houses, and plots.",
    checklist: [
      "Complete site inspection",
      "Property photography",
      "Document verification",
      "Market comparison analysis",
      "Legal compliance check",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Valuation",
    description:
      "Professional assessment of commercial properties including offices, retail spaces, warehouses, and industrial facilities.",
    checklist: [
      "Income approach valuation",
      "Rental valuation analysis",
      "Location assessment",
      "Infrastructure evaluation",
      "Zoning compliance review",
    ],
  },
  {
    icon: BarChart3,
    title: "Loan Portfolio Analysis",
    description:
      "Bulk property valuations for banking institutions with standardized reporting and comprehensive risk assessment.",
    checklist: [
      "Bulk processing capability",
      "Standardized reporting",
      "Risk assessment metrics",
      "Portal integration",
      "Quick turnaround time",
    ],
  },
  {
    icon: FileSearch,
    title: "On-Site Inspection",
    description:
      "Detailed physical inspection of properties by our certified professionals with comprehensive documentation.",
    checklist: [
      "Physical condition assessment",
      "Measurement verification",
      "Photo documentation",
      "Neighborhood analysis",
      "Access evaluation",
    ],
  },
  {
    icon: Landmark,
    title: "Bank Portal Integration",
    description:
      "Seamless integration with major bank portals for efficient report submission and tracking.",
    checklist: [
      "Direct portal uploads",
      "Real-time status updates",
      "Secure data transfer",
      "Automated notifications",
      "Compliance tracking",
    ],
  },
  {
    icon: Shield,
    title: "Property Valuation for VISA",
    description:
      "To ensure that the valuation is done accurately and meets the necessary requirements. Contact us for Valuation in Kerala",
    checklist: [
      "VISA and Immigration from Kerala",
      "Education VISA",
      "University Usage",
      "Tourist and Visitor VISA",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Comprehensive property valuation solutions tailored for banking institutions
              and financial partners across Kerala.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-3d bg-card border border-border shadow-md group"
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Need a Custom Valuation Solution?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contact us to discuss your specific requirements and how we can tailor our
              services to meet your needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary-hover transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
