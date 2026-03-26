import { useState } from "react";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", date: "", time: "", guests: "", message: "" });
  };

  return (
    <div className="bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-ocean text-center">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">Get in Touch</p>
        <h1 className="font-display text-5xl md:text-7xl text-sand">Contact & Reservations</h1>
      </section>

      <section className="py-24 md:py-32 bg-sand">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <FadeInSection>
              <div>
                <h2 className="font-display text-3xl text-primary mb-8">Reserve Your Table</h2>
                {submitted && (
                  <div className="mb-6 p-4 bg-emerald-deep/10 border border-emerald-deep/30 rounded-lg">
                    <p className="font-body text-sm text-primary">Thank you! We'll confirm your reservation shortly.</p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-1 block">Full Name</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-1 block">Email</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="font-body text-sm text-muted-foreground mb-1 block">Date</label>
                      <input
                        type="date"
                        required
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm text-muted-foreground mb-1 block">Time</label>
                      <input
                        type="time"
                        required
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm text-muted-foreground mb-1 block">Guests</label>
                      <input
                        type="number"
                        required
                        min={1}
                        max={50}
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-1 block">Message (optional)</label>
                    <textarea
                      rows={4}
                      maxLength={1000}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-md font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-primary-foreground font-body text-sm uppercase tracking-[0.2em] hover:bg-secondary transition-all duration-500 rounded-sm"
                  >
                    Reserve Now
                  </button>
                </form>
              </div>
            </FadeInSection>

            {/* Info */}
            <FadeInSection delay={200}>
              <div className="space-y-10">
                <div>
                  <h3 className="font-display text-2xl text-primary mb-5">Find Us</h3>
                  <div className="rounded-lg overflow-hidden border border-border shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0!2d110.4!3d-6.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMDAuMCJTIDExMMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sid!4v1"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Condong Square Location"
                    />
                  </div>
                </div>

                <div className="space-y-4 font-body text-sm">
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="mt-0.5 text-gold flex-shrink-0" />
                    <span className="text-muted-foreground">Condong Square, Jl. Pantai Indah, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone size={18} className="text-gold flex-shrink-0" />
                    <span className="text-muted-foreground">+62 812 3456 7890</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail size={18} className="text-gold flex-shrink-0" />
                    <span className="text-muted-foreground">hello@warunglaut.com</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={18} className="mt-0.5 text-gold flex-shrink-0" />
                    <div className="text-muted-foreground">
                      <p>Mon–Thu: 11:00 – 22:00</p>
                      <p>Fri–Sun: 10:00 – 23:00</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-2xl text-primary mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold/70 hover:bg-gold/10 hover:text-gold transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold/70 hover:bg-gold/10 hover:text-gold transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold/70 hover:bg-gold/10 hover:text-gold transition-all duration-300"
                      aria-label="YouTube"
                    >
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
