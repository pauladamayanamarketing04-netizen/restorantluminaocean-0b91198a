import { useState } from "react";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInSection from "@/components/FadeInSection";
import heroImg from "@/assets/hero-restaurant.jpg";
import interiorImg from "@/assets/gallery-interior.jpg";
import terraceImg from "@/assets/gallery-terrace.jpg";
import foodFish from "@/assets/food-grilled-fish.jpg";
import foodPrawns from "@/assets/food-prawns.jpg";
import foodCrab from "@/assets/food-crab.jpg";
import foodCalamari from "@/assets/food-calamari.jpg";
import foodOysters from "@/assets/food-oysters.jpg";
import foodSoup from "@/assets/food-soup.jpg";
import drinkCapucino from "@/assets/drink-es-capucino.jpg";
import drinkKelapa from "@/assets/drink-es-kelapa-hijau.jpg";

const images = [
  { src: heroImg, alt: "Ocean view dining" },
  { src: interiorImg, alt: "Restaurant interior" },
  { src: terraceImg, alt: "Terrace at sunset" },
  { src: foodFish, alt: "Grilled fish" },
  { src: foodPrawns, alt: "Butter prawns" },
  { src: foodCrab, alt: "Spicy crab" },
  { src: foodCalamari, alt: "Crispy calamari" },
  { src: foodOysters, alt: "Fresh oysters" },
  { src: foodSoup, alt: "Seafood soup" },
  { src: drinkCapucino, alt: "Es Capucino" },
  { src: drinkKelapa, alt: "Es Kelapa Hijau" },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-ocean text-center">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">Visual Journey</p>
        <h1 className="font-display text-5xl md:text-7xl text-sand">Gallery</h1>
      </section>

      {/* Masonry Grid */}
      <section className="py-24 md:py-32 bg-sand">
        <div className="container mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <FadeInSection key={i} delay={i * 80}>
                <div
                  className="break-inside-avoid cursor-pointer group overflow-hidden rounded-lg"
                  onClick={() => setSelectedImg(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 lightbox-overlay p-6"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-sand/80 hover:text-sand transition-colors"
            onClick={() => setSelectedImg(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImg}
            alt="Gallery full view"
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
