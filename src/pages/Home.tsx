import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import OceanWaves from "@/components/OceanWaves";
import FloatingParticles from "@/components/FloatingParticles";
import FadeInSection from "@/components/FadeInSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-restaurant.jpg";
import foodFish from "@/assets/food-grilled-fish.jpg";
import foodPrawns from "@/assets/food-prawns.jpg";
import foodCrab from "@/assets/food-crab.jpg";
import drinkCapucino from "@/assets/drink-es-capucino.jpg";
import drinkKelapa from "@/assets/drink-es-kelapa-hijau.jpg";
import drinkLemon from "@/assets/drink-es-lemon-teh.jpg";

const Home = () => {
  return (
    <div className="bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Warung Laut Connective - Ocean view dining"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
        </div>

        <OceanWaves />
        <FloatingParticles />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Where Sea Meets Nature
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-sand mb-4 animate-fade-in-up">
            Warung Laut
          </h1>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-gold italic animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Connective
          </h2>
          <p className="font-body text-lg md:text-xl text-sand/70 mt-6 tracking-wide animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Where Sea Meets Nature
          </p>
          <Link
            to="/contact"
            className="mt-10 px-10 py-4 border border-gold/50 text-gold font-body text-sm uppercase tracking-[0.2em] hover:bg-gold/10 transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Reserve Your Table
          </Link>
        </div>

        {/* Scroll prompt */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-scroll-bounce">
          <ChevronDown size={28} className="text-gold/60" />
        </div>
      </section>

      {/* Welcome */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">Welcome</p>
              <h2 className="font-display text-4xl md:text-5xl text-primary mb-8">
                A Culinary Journey by the Sea
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                Warung Laut Connective is a modern seafood destination 
                where fresh ocean flavors meet lush tropical nature. Every dish tells a story of the sea, 
                crafted with passion and served in an atmosphere of serene elegance.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Featured Seafood */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-gold text-center mb-4">From the Ocean</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary text-center mb-16">
              Featured Creations
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: foodFish, name: "Ikan Bakar Special", desc: "Whole grilled fish with aromatic herbs and spices" },
              { img: foodPrawns, name: "Udang Mentega", desc: "Butter garlic prawns with fresh lemon" },
              { img: foodCrab, name: "Kepiting Saus Padang", desc: "Spicy Padang-style crab with rich chili sauce" },
            ].map((item, i) => (
              <FadeInSection key={item.name} delay={i * 150}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-lg mb-5">
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-display text-2xl text-primary mb-2">{item.name}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div className="text-center mt-12">
              <Link
                to="/menu"
                className="inline-block px-10 py-4 border border-gold/50 text-gold font-body text-sm uppercase tracking-[0.2em] hover:bg-gold/10 transition-all duration-500"
              >
                View Full Menu
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Signature Drinks Teaser */}
      <section className="py-24 md:py-32 bg-ocean">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-gold text-center mb-4">Crafted Beverages</p>
            <h2 className="font-display text-4xl md:text-5xl text-sand text-center mb-16">
              Signature Drinks
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: drinkCapucino, name: "Es Capucino" },
              { img: drinkKelapa, name: "Es Kelapa Hijau" },
              { img: drinkLemon, name: "Es Lemon Teh" },
            ].map((drink, i) => (
              <FadeInSection key={drink.name} delay={i * 150}>
                <div className="text-center group">
                  <div className="overflow-hidden rounded-lg mb-5 mx-auto max-w-xs">
                    <img
                      src={drink.img}
                      alt={drink.name}
                      loading="lazy"
                      width={768}
                      height={1024}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-display text-2xl text-sand">{drink.name}</h3>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div className="text-center mt-12">
              <Link
                to="/drinks"
                className="inline-block px-10 py-4 border border-gold/50 text-gold font-body text-sm uppercase tracking-[0.2em] hover:bg-gold/10 transition-all duration-500"
              >
                Explore All Drinks
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="container mx-auto px-6 text-center">
          <FadeInSection>
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
              Reserve Your Experience
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Join us for an unforgettable dining experience where the ocean breeze, tropical greenery, 
              and exquisite seafood create moments worth savoring.
            </p>
            <Link
              to="/contact"
              className="inline-block px-12 py-4 bg-primary text-primary-foreground font-body text-sm uppercase tracking-[0.2em] hover:bg-secondary transition-all duration-500 rounded-sm"
            >
              Reserve Your Table
            </Link>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
