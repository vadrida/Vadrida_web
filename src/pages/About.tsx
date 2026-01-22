import { motion } from "framer-motion";
import { ShieldCheck, Users, FileCheck, Zap, Building, Target, Award, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const trustPoints = [
  { icon: ShieldCheck, text: "Certified professionals with industry expertise" },
  { icon: Users, text: "Comprehensive on-site inspections" },
  { icon: FileCheck, text: "Detailed documentation and reporting" },
  { icon: Building, text: "Seamless bank portal integration" },
  { icon: Zap, text: "Fast turnaround time" },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We deliver accurate valuations backed by thorough research and analysis.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Honest, transparent valuations you can trust for critical financial decisions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to the highest standards of professional service.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Building long-term relationships with banking institutions.",
  },
];

const About = () => {
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
              About <span className="gradient-text">Vadrida</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              A trusted name in property valuation services, partnering with leading
              banks across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Founded by Sanjay Babu</strong>,
                  Vadrida Property Valuations began with a vision to transform the property
                  valuation industry in India through accuracy, transparency, and professionalism.
                </p>
                <p>
                  Over the years, we have established ourselves as a trusted partner for
                  leading banking institutions including HDFC Bank, South Indian Bank, DCB Bank,
                  and many more. Our commitment to excellence has enabled us to value over
                  10,000 properties across various categories.
                </p>
                <p>
                  Our team of certified professionals combines deep market knowledge with
                  meticulous attention to detail, ensuring that every valuation meets the
                  highest standards of accuracy and compliance.
                </p>
                <p>
                  We understand the critical role property valuations play in financial
                  decisions, which is why we go above and beyond to deliver comprehensive,
                  reliable reports that banks and financial institutions can trust.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary-light/50 rounded-3xl p-8 lg:p-10"
            >
              <h3 className="text-xl font-heading font-semibold text-foreground mb-8">
                Why Banks Trust Us
              </h3>

              <ul className="space-y-5">
                {trustPoints.map((point, index) => (
                  <motion.li
                    key={point.text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground pt-2">{point.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              To provide accurate, transparent, and timely property valuations that empower
              banks and financial institutions to make informed lending decisions with confidence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "2+", label: "Years of Experience" },
              { value: "10,000+", label: "Properties Valued" },
              { value: "5+", label: "Banking Partners" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join leading banks who trust Vadrida for accurate property valuations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary-hover transition-all"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
