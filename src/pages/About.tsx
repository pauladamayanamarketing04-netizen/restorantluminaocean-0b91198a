import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import heroImg from "@/assets/hero-restaurant.jpg";
import interiorImg from "@/assets/gallery-interior.jpg";
import terraceImg from "@/assets/gallery-terrace.jpg";

const About = () => {
  return (
    <div className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={heroImg} alt="About Warung Laut" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/80" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">Our Story</p>
            <h1 className="font-display text-5xl md:text-7xl text-sand">About Us</h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <div>
                <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">The Beginning</p>
                <h2 className="font-display text-4xl md:text-5xl text-primary mb-8">
                  A Vision Born from the Sea
                </h2>
                <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Warung Laut Connective was born from a simple yet profound idea — to create a space where 
                    people could reconnect with nature through the art of seafood dining. Nestled within the 
                    vibrant Condong Square, our restaurant reimagines the traditional Indonesian warung into 
                    a modern culinary sanctuary.
                  </p>
                  <p>
                    Every morning, our fishermen bring the freshest catch from the surrounding waters. 
                    Our chefs transform these treasures into dishes that honor traditional flavors while 
                    embracing contemporary technique. The result is an experience that is both familiar and extraordinary.
                  </p>
                  <p>
                    Surrounded by lush tropical greenery and the gentle sound of ocean waves, dining at 
                    Warung Laut Connective is more than a meal — it's a journey that connects the sea, 
                    the land, and the soul.
                  </p>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={interiorImg}
                  alt="Restaurant interior"
                  loading="lazy"
                  width={1920}
                  height={1080}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-ocean">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={terraceImg}
                  alt="Restaurant terrace sunset"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div>
                <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">Our Philosophy</p>
                <h2 className="font-display text-4xl md:text-5xl text-sand mb-8">
                  Connective by Nature
                </h2>
                <div className="space-y-5 font-body text-sand/70 leading-relaxed">
                  <p>
                    "Connective" isn't just a name — it's the essence of everything we do. We believe that 
                    great food has the power to connect: connecting people to the sea, to nature, and to each other.
                  </p>
                  <p>
                    Our open-air design blurs the line between indoors and outdoors, inviting the breeze, 
                    the light, and the sounds of the ocean into every dining experience. Sustainable sourcing 
                    and respect for the marine ecosystem guide our kitchen philosophy.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-8 mt-10">
                  {[
                    { num: "100%", label: "Fresh Daily" },
                    { num: "50+", label: "Unique Dishes" },
                    { num: "5★", label: "Experience" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-display text-3xl text-gold">{stat.num}</p>
                      <p className="font-body text-xs uppercase tracking-wider text-sand/50 mt-1">{stat.label}</p>
                    </div>
                  ))}
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

export default About;
