import { motion } from "framer-motion";
import { ArrowRight, Clock, Building2, Users, Award, Shield, CheckCircle2, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { icon: Award, value: "2+", label: "Years Experience" },
  { icon: Building2, value: "10,000+", label: "Properties Valued" },
  { icon: Users, value: "5+", label: "Banking Partners" },
  { icon: Clock, value: "9am-6pm", label: "Report Delivery" },
];

const bankPartners = [
  { name: "HDFC Bank" },
  { name: "South Indian Bank" },
  { name: "CSB Bank" },
];

const features = [
  { icon: Shield, text: "Certified Professionals" },
  { icon: CheckCircle2, text: "Accurate Valuations" },
  { icon: TrendingUp, text: "Market Analysis" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 pt-24 md:pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm text-white/90">Trusted by Leading Banks in India</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Precision Property{" "}
              <span className="gradient-text">Valuations</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto font-light"
          >
            Trusted partner for leading banks in India. Delivering accurate, comprehensive
            Property valuations with certified professionals. Partnering with HDFC, SIB, CSB
            and more.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {features.map((feature) => (
              <div
                key={feature.text}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
              >
                <feature.icon className="w-4 h-4 text-accent" />
                <span className="text-sm text-white/80">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/services"
              className="glass-button inline-flex items-center justify-center gap-2 text-lg group"
            >
              View Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            {/* <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:shadow-gold transition-all hover:scale-105 inline-flex items-center justify-center"
            >
              Get a Quote
            </Link> */}
          </motion.div>
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="stats-card"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
              <div className="text-2xl md:text-3xl font-heading font-bold">{stat.value}</div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Banking Partners */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 mb-6 font-medium uppercase tracking-wider text-sm">
            Trusted by Leading Banks
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {bankPartners.map((bank) => (
              <div
                key={bank.name}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 text-white font-semibold"
              >
                {bank.name}
              </div>
            ))}
          </div>
          <p className="text-white/50 mt-4 text-sm italic">And many more leading banks...</p>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">
              Partner With Us for Accurate Valuations
            </h3>
            <p className="text-white/70 mb-6">
              Join 5+ banking institutions who trust Vadrida for their property valuation needs.
            </p>
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:shadow-gold transition-all hover:scale-105 inline-block"
            >
              Contact Us Today
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
