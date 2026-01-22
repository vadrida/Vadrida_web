import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send, MapPin, FileText, ClipboardCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { icon: Send, number: "01", title: "Bank Request" },
  { icon: MapPin, number: "02", title: "Site Visit" },
  { icon: FileText, number: "03", title: "Documentation" },
  { icon: ClipboardCheck, number: "04", title: "Valuation Report" },
];

const ProcessPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our streamlined 4-step process ensures accurate valuations delivered on time.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-accent-foreground">{step.number}</span>
                </div>
              </div>
              <span className="font-medium text-foreground">{step.title}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary-hover transition-all group"
          >
            Learn More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessPreview;
