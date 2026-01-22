import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send, MapPin, FileText, ClipboardCheck } from "lucide-react";

const steps = [
  {
    icon: Send,
    number: "01",
    title: "Bank Request",
    description: "Banks send valuation requests through our integrated portal system.",
  },
  {
    icon: MapPin,
    number: "02",
    title: "Site Visit",
    description: "Our field staff conduct comprehensive on-site property inspections.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Documentation",
    description: "Collection of property images, documents, and precise measurements.",
  },
  {
    icon: ClipboardCheck,
    number: "04",
    title: "Valuation Report",
    description: "Expert analysis and detailed report delivery to bank portal.",
  },
];

const ProcessCard = ({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Connector Line */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-x-4 z-0" />
      )}

      <div className="card-3d bg-card border border-border text-center relative z-10">
        {/* Number Badge */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
          <span className="text-sm font-heading font-bold text-accent-foreground">
            {step.number}
          </span>
        </div>

        <div className="pt-4">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <step.icon className="w-8 h-8 text-primary" />
          </div>

          <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
            {step.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 bg-secondary/30">
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
            Our streamlined process ensures accurate valuations delivered on time,
            every time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <ProcessCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
