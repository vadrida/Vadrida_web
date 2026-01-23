import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ShieldCheck, Users, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { icon: ShieldCheck, text: "Certified Professionals" },
  { icon: Users, text: "On-Site Inspections" },
  { icon: FileCheck, text: "Detailed Reports" },
];

const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              About <span className="gradient-text">Vadrida</span>
            </h2>
            <div className="h-1 w-24 bg-accent rounded-full mb-8" />

            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">Founded by Sanjay Babu</strong>, Vadrida (OPC) Private Limited
              which is approved by IBBI 
              has established itself as a trusted name in the Property
              valuation industry across Kerala.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We specialize in accurate, comprehensive Property valuations for leading
              banking institutions, combining deep market knowledge with meticulous attention
              to detail.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary-hover transition-all group"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-10"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-6 text-center shadow-sm">
                <div className="text-3xl font-heading font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card rounded-2xl p-6 text-center shadow-sm">
                <div className="text-3xl font-heading font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Properties Valued</div>
              </div>
              <div className="bg-card rounded-2xl p-6 text-center shadow-sm">
                <div className="text-3xl font-heading font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Bank Partners</div>
              </div>
              <div className="bg-card rounded-2xl p-6 text-center shadow-sm">
                <div className="text-3xl font-heading font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
