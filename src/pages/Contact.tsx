import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Vadrida, Kundannoor, Kochi, Kerala, India",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7907018428",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@vadrida.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday - Saturday: 9:00 AM - 6:00 PM",
  },
];

const Contact = () => {
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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Have questions about our valuation services? We're here to help.
              Reach out to us for accurate property valuations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* LEFT SIDE: Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {info.label}
                      </div>
                      <div className="text-foreground font-medium text-lg">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE: Real Google Map */}
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="h-full min-h-[400px]"
            >
               <div className="bg-secondary/50 rounded-2xl h-[500px] w-full overflow-hidden border border-border shadow-lg relative">
                <iframe 
                  title="Vadrida Location"
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no"
                  // UPDATED SRC: Uses the standard embed query format for Kundannoor, Kochi
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d604.4626570043147!2d76.31835295623553!3d9.936725796608538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08730019faa005%3A0x945df72516949bac!2sVadrida%20(OPC)%20Private%20Limited!5e1!3m2!1sen!2sin!4v1768821714543!5m2!1sen!2sin"
                  className="w-full h-full filter grayscale-[0.1] hover:grayscale-0 transition-all duration-500"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Banking Partners CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              For Banking Institutions
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Interested in partnering with us for your property valuation needs?
              Contact us for institutional partnerships and bulk valuation services.
            </p>
            <a
              href="mailto:info@vadrida.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary-hover transition-all"
            >
              <Mail className="w-5 h-5" />
              Email Us Directly
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;