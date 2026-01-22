import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Get Partnered with Us.
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Contact us today for accurate, professional Property valuations trusted by
            leading banks across Kerala.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:shadow-gold transition-all hover:scale-105 inline-flex items-center justify-center gap-2 group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+91 7907018428"
              className="glass-button inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent" />
              <span>+91 7907018428</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-accent" />
              <span>md@vadrida.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
