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
              <div className="w-full bg-card flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-4 lg:space-x-8 xl:space-x-12 py-2 px-2">
        <img 
          src={nitcNewLogo}
          alt="NITC Logo" 
          className="h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20 w-auto max-w-[60px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[120px] xl:max-w-[140px]"
          onError={(e) => {
            console.error('NITC Logo failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <img 
          src={utahLogo}
          alt="University of Utah Logo" 
          className="h-8 sm:h-10 md:h-12 lg:h-10 xl:h-16 w-auto max-w-[70px] sm:max-w-[90px] md:max-w-[110px] lg:max-w-[130px] xl:max-w-[150px]"
          onError={(e) => {
            console.error('University of Utah Logo failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <img 
          src={aihcLogo}
          alt="AIHC Logo" 
          className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 w-auto max-w-[70px] sm:max-w-[90px] md:max-w-[110px] lg:max-w-[130px] xl:max-w-[150px]"
          onError={(e) => {
            console.error('AIHC Logo failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <img 
          src={sparcLogo}
          alt="SPARC Logo" 
          className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto max-w-[60px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[120px] xl:max-w-[140px]"
          onError={(e) => {
            console.error('SPARC Logo failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <img 
          src={moeLogo}
          alt="Ministry of Education Logo" 
          className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 w-auto max-w-[50px] sm:max-w-[60px] md:max-w-[80px] lg:max-w-[100px] xl:max-w-[120px]"
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
        {/* Mobile Menu Button - positioned lower and more visible */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-primary absolute right-4 top-2 bg-white/90 hover:bg-white rounded-lg p-2 shadow-md border border-gray-200 transition-all duration-200"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile Navigation */}
      <div className={`mobile-menu md:hidden ${isMobileMenuOpen ? 'open' : ''}`}> 
        {/* Collapse Header */}
        <div className="flex justify-between items-center px-6 py-3 bg-gray-50 border-b border-gray-200">
          <span className="text-gray-700 font-semibold text-sm">Navigation Menu</span>
          <button 
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full p-1 transition-all duration-200"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <ul className="px-6 py-4 space-y-1">
          <li><a href="/" className="block py-3 px-4 text-gray-800 hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-200 border-b border-gray-100">Home</a></li>
          <li><a href="/AIHC 2025-12.pdf" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap block py-3 px-4 text-gray-800 hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-200 border-b border-gray-100">Call for Papers</a></li>
          <li><a href="/AIHC 2025_Brochure_For_Sponsorship.pdf" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 text-gray-800 hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-200 border-b border-gray-100">Sponsorship</a></li>
          <li><a href="/submission" className="block py-3 px-4 text-gray-800 hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-200 border-b border-gray-100">Submission</a></li>
          <li><a href="/workshops" className="block py-3 px-4 text-gray-800 hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-200 border-b border-gray-100">Workshops</a></li>
          <li><a href="/speakers" className="block py-3 px-4 text-gray-800 hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-200 border-b border-gray-100">Speakers</a></li>
          <li><a href="#" className="block py-3 px-4 text-gray-800 hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-200 border-b border-gray-100">Program</a></li>
          <li className="relative">
            <button 
              onClick={() => toggleSubmenu('committee-mobile')}
              className="block py-3 px-4 text-gray-800 hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-200 border-b border-gray-100 flex items-center justify-between w-full"
            >
              Committee
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className={`bg-gray-50 rounded-lg ml-4 mt-2 shadow-inner ${activeSubmenu === 'committee-mobile' ? 'block' : 'hidden'}`}>
              <a href="/organizing-committee" className="block py-2 px-4 text-sm text-gray-700 hover:bg-primary hover:text-white rounded">Organizing Committee</a>
              <a href="/advisory-committee" className="block py-2 px-4 text-sm text-gray-700 hover:bg-primary hover:text-white rounded">Advisory Committee</a>
              <a href="/program-committee" className="block py-2 px-4 text-sm text-gray-700 hover:bg-primary hover:text-white rounded">Program Committee</a>
              <a href="/area-chairs" className="block py-2 px-4 text-sm text-gray-700 hover:bg-primary hover:text-white rounded">Area Chairs</a>
            </div>
          </li>
          <li><a href="/accommodation" className="block py-3 px-4 text-gray-800 hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-200 border-b border-gray-100">Accommodation</a></li>
          <li><a href="/venue" className="block py-3 px-4 text-gray-800 hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-200 border-b border-gray-100">Venue</a></li>
          <li><a href="/visa" className="block py-3 px-4 text-gray-800 hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-200 border-b border-gray-100">Visa</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;