import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import nitcLogo from "@/assets/nitc-full-logo-white-01.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (submenuId: string) => {
    setActiveSubmenu(activeSubmenu === submenuId ? null : submenuId);
  };

  return (
    <header className="sticky top-0 z-50 bg-card shadow-md pb-6 flex flex-col">
      {/* Top Row: Logos and Title Centered */}
      <div className="w-full bg-card py-4 flex justify-center items-center space-x-2 md:space-x-8">
        <img 
          src={nitcLogo}
          alt="NITC Full Logo" 
          className="h-10 w-auto md:h-14"
          onError={(e) => {
            console.error('Logo failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="flex flex-col items-center mx-2 md:mx-6">
          <h1 className="text-lg md:text-3xl font-extrabold text-primary">AIHC 2025</h1>
          <p className="text-xs md:text-lg text-muted-foreground text-center">International Conference on Artificial Intelligence for Healthcare</p>
        </div>
        {/* Removed green logo here */}
      </div>
      {/* Navbar Row */}
      <div className="container mx-auto px-4 flex justify-center items-center pt-6 w-full relative">
        <nav className="hidden md:block w-full">
          <ul className="flex space-x-6 items-center justify-center w-full">
            <li><a href="/" className="text-primary hover:text-accent font-medium transition-colors">Home</a></li>
            <li><a href="/dummy-cfp.pdf" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap text-primary hover:text-accent font-medium transition-colors">Call for Papers</a></li>
            <li><a href="/sponsorship" className="text-primary hover:text-accent font-medium transition-colors">Sponsorship</a></li>
            <li><a href="/submission" className="text-primary hover:text-accent font-medium transition-colors">Submission</a></li>
            <li><a href="/workshops" className="text-primary hover:text-accent font-medium transition-colors">Workshops</a></li>
            <li><a href="/speakers" className="text-primary hover:text-accent font-medium transition-colors">Speakers</a></li>
            {/* <li><a href="#" className="text-primary hover:text-accent font-medium transition-colors">Program</a></li> */}
            <li><a href="/committee" className="text-primary hover:text-accent font-medium transition-colors">Committee</a></li>
            <li><a href="/venue" className="text-primary hover:text-accent font-medium transition-colors">Venue</a></li>
            <li><a href="/visa" className="text-primary hover:text-accent font-medium transition-colors">Visa</a></li>
          </ul>
        </nav>
        {/* Mobile Menu Button - always right aligned */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-primary absolute right-0 top-0"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile Navigation */}
      <div className={`mobile-menu md:hidden bg-card ${isMobileMenuOpen ? 'open' : ''}`}> 
        <ul className="px-4 py-2 space-y-2">
          <li><a href="/" className="block py-2 text-primary hover:bg-secondary rounded">Home</a></li>
          <li><a href="/dummy-cfp.pdf" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap block py-2 text-primary hover:bg-secondary rounded">Call for Papers</a></li>
          <li><a href="/sponsorship" className="block py-2 text-primary hover:bg-secondary rounded">Sponsorship</a></li>
          <li><a href="/submission" className="block py-2 text-primary hover:bg-secondary rounded">Submission</a></li>
          <li><a href="/workshops" className="block py-2 text-primary hover:bg-secondary rounded">Workshops</a></li>
          <li><a href="/speakers" className="block py-2 text-primary hover:bg-secondary rounded">Speakers</a></li>
          <li><a href="#" className="block py-2 text-primary hover:bg-secondary rounded">Program</a></li>
          <li><a href="/committee" className="block py-2 text-primary hover:bg-secondary rounded">Committee</a></li>
          <li><a href="/venue" className="block py-2 text-primary hover:bg-secondary rounded">Venue</a></li>
          <li><a href="/visa" className="block py-2 text-primary hover:bg-secondary rounded">Visa</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;