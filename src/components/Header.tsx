import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import nitcNewLogo from "@/assets/nitc-new.jpeg";
import utahLogo from "@/assets/university-of-utah.jpeg";
import aihcLogo from "@/assets/aihc-logo.png";
import sparcLogo from "@/assets/sparc-logo.jpeg";
import moeLogo from "@/assets/moe-logo.png";

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
    <header className="sticky top-0 z-50 bg-card shadow-md pb-1 flex flex-col">
      {/* Top Row: Logos and Title Centered */}
      <div className="w-full bg-card flex justify-center items-center space-x-3 md:space-x-6 lg:space-x-8 py-2">
        <img 
          src={nitcNewLogo}
          alt="NITC Logo" 
          className="h-20 w-auto md:h-6 lg:h-20"
          onError={(e) => {
            console.error('NITC Logo failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <img 
          src={utahLogo}
          alt="University of Utah Logo" 
          className="h-6 w-auto md:h-6 lg:h-10"
          onError={(e) => {
            console.error('University of Utah Logo failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <img 
          src={aihcLogo}
          alt="AIHC Logo" 
          className="h-20 w-auto md:h-30 lg:h-30"
          onError={(e) => {
            console.error('AIHC Logo failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <img 
          src={sparcLogo}
          alt="SPARC Logo" 
          className="h-12 w-auto md:h-13 lg:h-14"
          onError={(e) => {
            console.error('SPARC Logo failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <img 
          src={moeLogo}
          alt="Ministry of Education Logo" 
          className="h-10 w-auto md:h-10 lg:h-13"
          onError={(e) => {
            console.error('Ministry of Education Logo failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      {/* Navbar Row */}
      <div className="container mx-auto px-4 flex justify-center items-center pt-1 w-full relative">
        <nav className="hidden md:block w-full">
          <ul className="flex space-x-6 items-center justify-center w-full">
            <li><a href="/" className="text-primary hover:text-accent font-medium transition-colors">Home</a></li>
            <li><a href="/AIHC 2025-12.pdf" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap text-primary hover:text-accent font-medium transition-colors">Call for Papers</a></li>
            <li><a href="/AIHC 2025_Brochure_For_Sponsorship.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-medium transition-colors">Sponsorship</a></li>
            <li><a href="/submission" className="text-primary hover:text-accent font-medium transition-colors">Submission</a></li>
            <li><a href="/workshops" className="text-primary hover:text-accent font-medium transition-colors">Workshops</a></li>
            <li><a href="/speakers" className="text-primary hover:text-accent font-medium transition-colors">Speakers</a></li>
            {/* <li><a href="#" className="text-primary hover:text-accent font-medium transition-colors">Program</a></li> */}
            <li className="relative group">
              <button 
                onClick={() => toggleSubmenu('committee')}
                className="text-primary hover:text-accent font-medium transition-colors flex items-center"
              >
                Committee
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-48 z-50 ${activeSubmenu === 'committee' ? 'block' : 'hidden'}`}>
                <a href="/organizing-committee" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Organizing Committee</a>
                <a href="/advisory-committee" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Advisory Committee</a>
                <a href="/program-committee" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Program Committee</a>
                <a href="/area-chairs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Area Chairs</a>
              </div>
            </li>
            <li><a href="/accommodation" className="text-primary hover:text-accent font-medium transition-colors">Accommodation</a></li>
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
          <li><a href="/AIHC 2025-12.pdf" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap block py-2 text-primary hover:bg-secondary rounded">Call for Papers</a></li>
          <li><a href="/AIHC 2025_Brochure_For_Sponsorship.pdf" target="_blank" rel="noopener noreferrer" className="block py-2 text-primary hover:bg-secondary rounded">Sponsorship</a></li>
          <li><a href="/submission" className="block py-2 text-primary hover:bg-secondary rounded">Submission</a></li>
          <li><a href="/workshops" className="block py-2 text-primary hover:bg-secondary rounded">Workshops</a></li>
          <li><a href="/speakers" className="block py-2 text-primary hover:bg-secondary rounded">Speakers</a></li>
          <li><a href="#" className="block py-2 text-primary hover:bg-secondary rounded">Program</a></li>
          <li className="relative">
            <button 
              onClick={() => toggleSubmenu('committee-mobile')}
              className="block py-2 text-primary hover:bg-secondary rounded flex items-center justify-between w-full"
            >
              Committee
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className={`bg-gray-50 rounded-md ml-4 ${activeSubmenu === 'committee-mobile' ? 'block' : 'hidden'}`}>
              <a href="/organizing-committee" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Organizing Committee</a>
              <a href="/advisory-committee" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Advisory Committee</a>
              <a href="/program-committee" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Program Committee</a>
              <a href="/area-chairs" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Area Chairs</a>
            </div>
          </li>
          <li><a href="/accommodation" className="block py-2 text-primary hover:bg-secondary rounded">Accommodation</a></li>
          <li><a href="/venue" className="block py-2 text-primary hover:bg-secondary rounded">Venue</a></li>
          <li><a href="/visa" className="block py-2 text-primary hover:bg-secondary rounded">Visa</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;