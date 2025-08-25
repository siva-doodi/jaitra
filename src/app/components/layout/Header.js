'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    if (pathname !== '/') {
      // Non-home page → always have shadow
      setIsScrolledDown(true);
      return;
    }

    // Home page → remove shadow if at top, else apply if scrolled
    if (window.scrollY === 0) {
      setIsScrolledDown(false);
    } else {
      setIsScrolledDown(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <header
      className={`header fixed top-0 z-50 bg-primary-bg md:px-4 lg:px-24 w-full transition-shadow duration-300
      ${isScrolledDown ? 'shadow-[0_10px_25px_rgba(0,0,0,0.1),0_4px_10px_rgba(183,41,96,0.2)]' : ''}`}
    >
      <div className="flex justify-between max-w-7xl mx-auto items-center py-2 px-4 md:px-0 relative">
        <div className="nav_logo">
          <Link href="/">
            <Image
              alt="Logo"
              src="/images/logo3.jpg"
              width={100}
              height={55}
              className="h-[55px] w-auto object-contain"
            />
          </Link>
        </div>
        <nav className="hidden lg:flex gap-6 text-white">
          <Link href="/" className="cursor-pointer hover:underline hover:text-[#b72960] font-medium">Home</Link>
          <Link href="/animation" className="cursor-pointer hover:underline hover:text-[#b72960] font-medium">Animation</Link>
          <Link href="/#highlights" scroll={false} className="cursor-pointer hover:underline hover:text-[#b72960] font-medium">
            Highlights
          </Link>
        </nav>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-[#db894f] focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="flex flex-col bg-[#DCA56C] mt-4 border-t border-gray-200 lg:hidden">
          <Link href="/" className="block px-4 py-3 border-b border-gray-200 text-white hover:text-[#db894f] font-medium">Home</Link>
          <Link href="/animation" className="block px-4 py-3 border-b border-gray-200 text-white hover:text-[#db894f] font-medium">Animation</Link>
          <Link href="/about" className="block px-4 py-3 border-b border-gray-200 text-white hover:text-[#db894f] font-medium">About</Link>
          <Link href="/company" className="block px-4 py-3 border-b border-gray-200 text-white hover:text-[#db894f] font-medium">Company</Link>
        </nav>
      )}
    </header>
  );
}
