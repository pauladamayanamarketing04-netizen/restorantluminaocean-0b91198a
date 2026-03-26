import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ocean text-sand/80">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-semibold text-sand mb-4">
              Warung Laut <span className="text-gold">Connective</span>
            </h3>
            <p className="font-body text-sm leading-relaxed text-sand/60 mb-6">
              Where sea meets nature. A modern seafood destination by Condong Square.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold/70 hover:bg-gold/10 hover:text-gold transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold/70 hover:bg-gold/10 hover:text-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold/70 hover:bg-gold/10 hover:text-gold transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-sand mb-4">Explore</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/menu", label: "Our Menu" },
                { to: "/drinks", label: "Signature Drinks" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Reservations" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-body text-sm text-sand/60 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-sand mb-4">Contact</h4>
            <div className="flex flex-col gap-3 font-body text-sm">
              <div className="flex items-start gap-3 text-sand/60">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold/70" />
                <span>Condong Square, Jl. Pantai Indah, Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-sand/60">
                <Phone size={16} className="flex-shrink-0 text-gold/70" />
                <span>+62 812 3456 7890</span>
              </div>
              <div className="flex items-center gap-3 text-sand/60">
                <Mail size={16} className="flex-shrink-0 text-gold/70" />
                <span>hello@warunglaut.com</span>
              </div>
              <div className="flex items-start gap-3 text-sand/60">
                <Clock size={16} className="mt-0.5 flex-shrink-0 text-gold/70" />
                <div>
                  <p>Mon–Thu: 11:00 – 22:00</p>
                  <p>Fri–Sun: 10:00 – 23:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-display text-xl text-sand mb-4">Find Us</h4>
            <div className="rounded-lg overflow-hidden border border-gold/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0!2d110.4!3d-6.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMDAuMCJTIDExMMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sid!4v1"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Condong Square Location"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/10 mt-12 pt-8 text-center">
          <p className="font-body text-xs text-sand/40">
            © {new Date().getFullYear()} Warung Laut Connective by Condong Square. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
