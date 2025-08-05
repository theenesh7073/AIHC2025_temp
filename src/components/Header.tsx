import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import nitcLogo from "@/assets/nitc-new.jpeg";
import aihcLogo from "@/assets/aihc-logo.png";
import sparcLogo from "@/assets/sparc-logo.jpeg";
import utahLogo from "@/assets/university-of-utah.jpg";
import moeLogo from "@/assets/moe-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (activeSubmenu) {
      setActiveSubmenu(null);
    }
  };

  const toggleSubmenu = (submenuId: string) => {
    setActiveSubmenu(activeSubmenu === submenuId ? null : submenuId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card flex flex-col pb-0">
      {/* Top Row: Logos and Title Centered */}
      <div className="w-full bg-card flex justify-center items-end space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 py-2 sm:py-0 sm:pb-2 md:pb-3 px-2">
        <img 
          src={nitcLogo}
          alt="NIT Calicut Logo" 
          className="h-10 sm:h-9 md:h-10 lg:h-11 xl:h-12 w-auto max-w-[70px] sm:max-w-[70px] md:max-w-[80px] lg:max-w-[90px] xl:max-w-[100px]"
          onError={(e) => {
            console.error('NIT Calicut Logo failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <img 
          src={utahLogo}
          alt="University of Utah Logo" 
          className="h-10 sm:h-9 md:h-10 lg:h-11 xl:h-12 w-auto max-w-[58px] sm:max-w-[56px] md:max-w-[64px] lg:max-w-[72px] xl:max-w-[80px]"
          onError={(e) => {
            console.error('University of Utah Logo failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <a href="/" className="hover:opacity-80 transition-opacity">
          <img 
            src={aihcLogo}
            alt="AIHC Logo" 
            className="h-11 sm:h-10 md:h-11 lg:h-12 xl:h-14 w-auto max-w-[66px] sm:max-w-[64px] md:max-w-[72px] lg:max-w-[80px] xl:max-w-[88px] cursor-pointer"
            onError={(e) => {
              console.error('AIHC Logo failed to load:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
        </a>
          <img 
            src={sparcLogo}
            alt="SPARC Logo" 
            className="h-10 sm:h-9 md:h-10 lg:h-11 xl:h-12 w-auto max-w-[70px] sm:max-w-[70px] md:max-w-[80px] lg:max-w-[90px] xl:max-w-[100px]"
            onError={(e) => {
              console.error('SPARC Logo failed to load:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
        <img 
          src={moeLogo}
          alt="Ministry of Education Logo" 
          className="h-10 sm:h-9 md:h-10 lg:h-11 xl:h-12 w-auto max-w-[80px] sm:max-w-[80px] md:max-w-[90px] lg:max-w-[100px] xl:max-w-[110px]"
          onError={(e) => {
            console.error('Ministry of Education Logo failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      {/* Navbar Row - Only visible on desktop/tablet */}
      <div className="hidden md:flex container mx-auto px-4 justify-center items-center pt-0 w-full relative">
        <nav className="w-full">
          <ul className="flex space-x-6 items-center justify-center w-full">
            <li><a href="/" className="text-primary hover:text-accent font-medium transition-colors">Home</a></li>
            <li><a href="/AIHC 2025-12.pdf" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap text-primary hover:text-accent font-medium transition-colors">Call for Papers</a></li>
            <li><a href="/AIHC 2025_Brochure_For_Sponsorship.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-medium transition-colors">Sponsorship</a></li>
            <li><a href="/submission" className="text-primary hover:text-accent font-medium transition-colors">Submission</a></li>
            <li><a href="/registration" className="text-primary hover:text-accent font-medium transition-colors">Registration</a></li>
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
                <a href="/program-committee" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Technical Program Committee</a>
              </div>
            </li>
            <li className="relative group">
              <button 
                onClick={() => toggleSubmenu('more')}
                className="text-primary hover:text-accent font-medium transition-colors flex items-center"
              >
                More
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-48 z-50 ${activeSubmenu === 'more' ? 'block' : 'hidden'}`}>
                <a href="/accommodation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Accommodation</a>
                <a href="/venue" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Venue</a>
                <a href="/visa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Visa</a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      {/* Mobile Menu Button - positioned below header level */}
      <button 
        onClick={toggleMobileMenu}
        className="md:hidden text-primary fixed top-20 right-4 bg-white hover:bg-gray-50 rounded-lg p-2 shadow-md border border-gray-200 transition-all duration-200 z-50"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      {/* Mobile Navigation - Dropdown in hero section */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-28 right-4 bg-white rounded-lg shadow-lg border border-gray-200 z-50 min-w-64">
          <div className="px-4 py-3 border-b border-gray-100">
            <span className="text-gray-700 font-semibold text-sm">Navigation Menu</span>
          </div>
          <div className="py-2">
            <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white transition-all duration-200">Home</a>
            <a href="/AIHC 2025-12.pdf" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white transition-all duration-200">Call for Papers</a>
            <a href="/AIHC 2025_Brochure_For_Sponsorship.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white transition-all duration-200">Sponsorship</a>
            <a href="/submission" className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white transition-all duration-200">Submission</a>
            <a href="/registration" className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white transition-all duration-200">Registration</a>
            <a href="/workshops" className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white transition-all duration-200">Workshops</a>
            <a href="/speakers" className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white transition-all duration-200">Speakers</a>
            <div className="relative">
              <button 
                onClick={() => toggleSubmenu('committee-mobile')}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-between"
              >
                Committee
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`bg-gray-50 ${activeSubmenu === 'committee-mobile' ? 'block' : 'hidden'}`}>
                <a href="/organizing-committee" className="block px-6 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white">Organizing Committee</a>
                <a href="/advisory-committee" className="block px-6 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white">Advisory Committee</a>
                <a href="/program-committee" className="block px-6 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white">Technical Program Committee</a>
              </div>
            </div>
            <div className="relative">
              <button 
                onClick={() => toggleSubmenu('more-mobile')}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-between"
              >
                More
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`bg-gray-50 ${activeSubmenu === 'more-mobile' ? 'block' : 'hidden'}`}>
                <a href="/accommodation" className="block px-6 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white">Accommodation</a>
                <a href="/venue" className="block px-6 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white">Venue</a>
                <a href="/visa" className="block px-6 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white">Visa</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;