import { useState, useEffect } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [hero1, hero2, hero3, hero4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3750); // 15 seconds / 4 slides = 3.75 seconds per slide

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section 
      className="relative h-96 bg-cover bg-center flex items-center transition-all duration-1000"
      style={{ backgroundImage: `url(${slides[currentSlide]})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">AIHC 2025</h1>
        <p className="text-xl md:text-2xl mb-6">International Conference on Artificial Intelligence for Healthcare</p>
        <p className="text-lg mb-8 max-w-2xl">Join us at NIT Calicut for this prestigious event under SPARC's Indo-US collaboration program</p>
        <div className="flex flex-wrap gap-4">
          <a href="/submission" className="btn-primary">
            Submit Your Paper
          </a>
          <a href="#about" className="btn-white-outline">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;