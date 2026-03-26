import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import drinkLemon from "@/assets/drink-es-lemon-teh.jpg";
import drinkJerukBesar from "@/assets/drink-es-jeruk-besar.jpg";
import drinkJerukKecil from "@/assets/drink-es-jeruk-kecil.jpg";
import drinkTeh from "@/assets/drink-es-teh-manis.jpg";
import drinkLidah from "@/assets/drink-es-lidah-buaya.jpg";
import drinkCapucino from "@/assets/drink-es-capucino.jpg";
import drinkKelapa from "@/assets/drink-es-kelapa-hijau.jpg";
import drinkAir from "@/assets/drink-air-mineral.jpg";

const drinks = [
  { img: drinkLemon, name: "Es Lemon Teh", desc: "Refreshing iced lemon tea with fresh lemon slices and a hint of sweetness", price: "Rp 15.000" },
  { img: drinkJerukBesar, name: "Es Jeruk Besar", desc: "Large fresh-squeezed orange juice with ice, bursting with tropical citrus flavor", price: "Rp 18.000" },
  { img: drinkJerukKecil, name: "Es Jeruk Kecil", desc: "Petite fresh orange juice, perfectly chilled for a light refreshment", price: "Rp 12.000" },
  { img: drinkTeh, name: "Es Teh Manis", desc: "Classic Indonesian sweet iced tea, rich amber color with a comforting sweetness", price: "Rp 8.000" },
  { img: drinkLidah, name: "Es Lidah Buaya", desc: "Aloe vera iced drink with fresh green accents, naturally cooling and healthy", price: "Rp 15.000" },
  { img: drinkCapucino, name: "Es Capucino", desc: "Iced cappuccino with rich coffee layers and silky foam art", price: "Rp 20.000" },
  { img: drinkKelapa, name: "Es Kelapa Hijau", desc: "Young green coconut drink with jelly, a tropical island refresher", price: "Rp 18.000" },
  { img: drinkAir, name: "Air Mineral", desc: "Premium crystal-clear mineral water, pure and refreshing", price: "Rp 5.000" },
];

const Drinks = () => {
  return (
    <div className="bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-ocean text-center">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">Crafted Beverages</p>
        <h1 className="font-display text-5xl md:text-7xl text-sand">Signature Drinks</h1>
        <p className="font-body text-sand/60 mt-4 max-w-xl mx-auto px-6">
          Eight handcrafted beverages to complement your ocean-side dining experience.
        </p>
      </section>

      {/* Drinks */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="container mx-auto px-6 space-y-16">
          {drinks.map((drink, i) => (
            <FadeInSection key={drink.name} delay={100}>
              <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}>
                <div className="lg:w-1/2 overflow-hidden rounded-lg shadow-2xl group">
                  <img
                    src={drink.img}
                    alt={drink.name}
                    loading="lazy"
                    width={768}
                    height={1024}
                    className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                  <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">#{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="font-display text-4xl md:text-5xl text-primary mt-2 mb-4">{drink.name}</h2>
                  <p className="font-body text-muted-foreground leading-relaxed text-lg mb-6">{drink.desc}</p>
                  <p className="font-display text-3xl text-gold">{drink.price}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Drinks;
