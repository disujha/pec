'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/technology', label: 'Technology' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200' 
          : 'bg-white border-b border-gray-100'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <div className="w-16 h-10 flex items-center justify-center transform transition-transform group-hover:scale-105">
                  <img src="/pec-new.png" alt="PEC Logo" className="w-16 h-10 object-contain" />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-pec-navy hover:text-primary transition-colors duration-200 font-medium text-sm group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="relative overflow-hidden group bg-primary text-white px-6 py-2.5 rounded-sm font-medium text-sm transition-all duration-300 hover:bg-primary-dark hover-lift"
              >
                <span className="relative z-10">Get Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center group"
            >
              <span className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className="border-t border-gray-200 bg-white">
            <nav className="container mx-auto px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-pec-navy hover:text-primary transition-colors duration-200 font-medium py-2 group"
                >
                  <span className="flex items-center space-x-3">
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-primary text-white px-6 py-3 rounded-sm font-medium text-center transition-colors duration-300 hover:bg-primary-dark mt-4"
              >
                Get Quote
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Engineering Grid Background Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0 grid-pattern"></div>
    </>
  );
};

export default Header;
