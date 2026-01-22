import { motion } from "framer-motion";
import { Send, MapPin, FileText, ClipboardCheck, CheckCircle, Clock, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Send,
    number: "01",
    title: "Bank Request",
    description:
      "Banks initiate the valuation process by sending requests through our integrated portal system. Each request contains property details, required documents, and specific valuation requirements.",
    details: [
      "Secure portal access for banks",
      "Digital request submission",
      "Real-time tracking",
      "Priority scheduling available",
    ],
  },
  {
    icon: MapPin,
    number: "02",
    title: "Site Visit",
    description:
      "Our certified field staff conduct comprehensive on-site property inspections, documenting every aspect of the property for accurate valuation.",
    details: [
      "Certified valuers only",
      "Complete property inspection",
      "Neighborhood assessment",
      "Infrastructure evaluation",
    ],
  },
  {
    icon: FileText,
    number: "03",
    title: "Documentation",
    description:
      "Thorough collection and verification of all property-related documents, photographs, and measurements to ensure comprehensive reporting.",
    details: [
      "HD property photography",
      "Precise measurements",
      "Document verification",
      "Legal compliance check",
    ],
  },
  {
    icon: ClipboardCheck,
    number: "04",
    title: "Valuation Report",
    description:
      "Expert analysis combining market data, property condition, and location factors to deliver an accurate valuation report directly to the bank portal.",
    details: [
      "Market comparison analysis",
      "Detailed value assessment",
      "Risk evaluation",
      "Direct portal delivery",
    ],
  },
];

const benefits = [
  { icon: Clock, title: "Fast Turnaround", description: "Reports delivered within 24-48 hours" },
  { icon: Shield, title: "Accurate Valuations", description: "Certified professionals ensure precision" },
  { icon: Zap, title: "Portal Integration", description: "Seamless bank portal connectivity" },
  { icon: CheckCircle, title: "Compliance Ready", description: "All reports meet regulatory standards" },
];

const HowItWorks = () => {
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
              How We <span className="gradient-text">Work</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Our streamlined 4-step process ensures accurate valuations delivered
              efficiently and on time, every time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-lg font-heading font-bold text-accent-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                    {step.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12 border border-border">
                    <div className="aspect-square max-w-xs mx-auto flex items-center justify-center">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                          <step.icon className="w-16 h-16 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-gold">
                          <span className="text-sm font-bold text-accent-foreground">
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Why Choose Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach ensures quality, accuracy, and efficiency at every step.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Contact us today to learn how our valuation process can benefit your institution.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:shadow-gold transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
