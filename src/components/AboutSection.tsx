import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Users, FileCheck, Zap, Building } from "lucide-react";

const trustPoints = [
  { icon: ShieldCheck, text: "Certified professionals with industry expertise" },
  { icon: Users, text: "Comprehensive on-site inspections" },
  { icon: FileCheck, text: "Detailed documentation and reporting" },
  { icon: Building, text: "Seamless bank portal integration" },
  { icon: Zap, text: "Fast turnaround time" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              About{" "}
              <span className="gold-underline">Vadrida</span>
            </h2>
            <div className="h-1 w-24 bg-accent rounded-full mb-8" />

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Founded by Sanjay Babu</strong>,
                Vadrida Property Valuations has established itself as a trusted name
                in the Property valuation industry across Kerala.
              </p>
              <p>
                We specialize in accurate, comprehensive Property valuations for
                leading banking institutions. Our team of certified professionals
                combines deep market knowledge with meticulous attention to detail
                to deliver valuations you can rely on.
              </p>
              <p>
                With a commitment to excellence and transparency, we have partnered
                with major banks including HDFC Bank, South Indian Bank, and DCB Bank
                to provide seamless valuation services through integrated portal systems.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Trust Points */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
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
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
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
  );
};

export default AboutSection;
