import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import foodFish from "@/assets/food-grilled-fish.jpg";
import foodPrawns from "@/assets/food-prawns.jpg";
import foodCrab from "@/assets/food-crab.jpg";
import foodCalamari from "@/assets/food-calamari.jpg";
import foodOysters from "@/assets/food-oysters.jpg";
import foodSoup from "@/assets/food-soup.jpg";

const menuItems = [
  { img: foodFish, name: "Ikan Bakar Special", desc: "Whole grilled fish marinated in traditional spices, served with sambal and fresh vegetables", price: "Rp 85.000" },
  { img: foodPrawns, name: "Udang Mentega", desc: "Butter garlic prawns with aromatic herbs and fresh lemon wedges", price: "Rp 95.000" },
  { img: foodCrab, name: "Kepiting Saus Padang", desc: "Fresh crab in rich, spicy Padang-style chili sauce", price: "Rp 150.000" },
  { img: foodCalamari, name: "Cumi Goreng Tepung", desc: "Crispy fried calamari with signature dipping sauces", price: "Rp 65.000" },
  { img: foodOysters, name: "Tiram Segar", desc: "Fresh oysters on ice with lemon and cocktail sauce", price: "Rp 120.000" },
  { img: foodSoup, name: "Sup Seafood Tom Yum", desc: "Fragrant spicy seafood soup with prawns, herbs, and aromatics", price: "Rp 75.000" },
];

const MenuPage = () => {
  return (
    <div className="bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-ocean text-center">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">Culinary Excellence</p>
        <h1 className="font-display text-5xl md:text-7xl text-sand">Our Menu</h1>
        <p className="font-body text-sand/60 mt-4 max-w-xl mx-auto px-6">
          Fresh from the ocean, crafted with passion. Every dish celebrates the sea.
        </p>
      </section>

      {/* Menu Grid */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, i) => (
              <FadeInSection key={item.name} delay={i * 100}>
                <div className="group bg-background rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500">
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-2xl text-primary">{item.name}</h3>
                      <span className="font-display text-xl text-gold whitespace-nowrap ml-3">{item.price}</span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
