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
      className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-cover bg-center bg-no-repeat flex items-center transition-all duration-1000 -mt-1"
      style={{ backgroundImage: `url(${slides[currentSlide]})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">AIHC 2025</h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-6">International Conference on Artificial Intelligence for Healthcare</p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl lg:max-w-3xl">Join us at NIT Calicut for this prestigious event under SPARC's Indo-US collaboration program</p>
        <div className="flex flex-wrap gap-4">
          <a href="/submission" className="btn-primary">
            Submit Your Paper
          </a>
          <a 
            href="#about" 
            className="btn-white-outline"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('about');
              if (element) {
                // Get the header height (logo bar + navbar)
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                const elementTop = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: elementTop - headerHeight,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;