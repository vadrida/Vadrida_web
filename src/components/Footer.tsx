import { Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/vadrida-logo.png'

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const servicesLinks = [
  "Residential Valuation",
  "Commercial Valuation",
  "Portfolio Analysis",
  "On-Site Inspection",
  "Bank Portal Integration",
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="footer-gradient text-black py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-5">
             <img 
              src={logo}
              alt="Vadrida Property Valuations Logo" 
              width="200" 
              height="106" 
              className="w-[200px] h-auto object-contain" 
            />
            </Link>
            <p className="text-black/70 text-sm leading-relaxed mb-6">
              Professional Property valuation services partnering with leading banks
              across Kerala. Founded by Sanjay Babu.
            </p>
            {/* <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-black group-hover:text-accent-foreground transition-colors" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-black/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((service) => (
                <li key={service}>
                  <span className="text-black/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-5">Contact Us</h4>
            <ul className="space-y-3 text-sm text-black/70">
              <li>
                <strong className="text-black/90">Address:</strong>
                <br />
                W8P9+MGR, Maradu, Ernakulam, Kochi, Kerala 682304
              </li>
              <li>
                <strong className="text-black/90">Phone:</strong>
                <br />
                +91 7907018428
              </li>
              <li>
                <strong className="text-black/90">Email:</strong>
                <br />
                info@vadrida.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-black/50">
          <p>
            © 2024 Vadrida Property Valuations. Founded by Sanjay Babu. All rights reserved.
          </p>
          <p>
            Designed and developed : <a href="https://github.com/alnroy/">@Alan Roy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
