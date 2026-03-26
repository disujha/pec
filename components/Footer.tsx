'use client';

import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '/technology', label: 'Technology' },
        { href: '/careers', label: 'Careers' },
        { href: '/news', label: 'News & Insights' }
      ]
    },
    {
      title: 'Services',
      links: [
        { href: '/services', label: 'EPC Services' },
        { href: '/services', label: 'Process Engineering' },
        { href: '/services', label: 'Construction' },
        { href: '/services', label: 'Consulting' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { href: '/projects', label: 'Projects' },
        { href: '/clients', label: 'Clients' },
        { href: '/safety', label: 'Safety & HSE' },
        { href: '/contact', label: 'Contact' }
      ]
    }
  ];

  const certifications = [
    'ISO 9001:2015',
    'ISO 14001:2015', 
    'ISO 45001:2018',
    'API Q1'
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    { name: 'Twitter', href: '#', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' }
  ];

  return (
    <footer className="relative bg-gray-50 text-gray-900 overflow-hidden">
      {/* Engineering Grid Background */}
      <div className="absolute inset-0 opacity-5 grid-pattern"></div>
      
      {/* Top Border with Cross Elements */}
      <div className="relative border-t border-gray-200">
        <div className="flex justify-center space-x-8 py-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-4 h-4 cross-element opacity-30"></div>
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <div className="w-20 h-12 flex items-center justify-center mb-6">
                <img src="/pec-new.png" alt="PEC Logo" className="w-20 h-12 object-contain" />
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Leading provider of petrochemical engineering and construction services with 
                25+ years of excellence in delivering world-class EPC solutions to the global 
                energy sector.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 hover-lift"
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-primary mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-primary flex-shrink-0 mt-0.5">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-medium text-primary">PEC Headquarters</div>
                  <div>123 Petroleum Plaza</div>
                  <div>Mumbai, Maharashtra 400001</div>
                  <div>India</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-primary flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">022 6565 6222</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-primary flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">info@pecengg.com</span>
              </div>
            </div>
          </div>

          {/* Links Sections - Split 3 sections into 2 columns */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-primary mb-6 font-serif">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-600 hover:text-primary transition-colors duration-200 text-sm group flex items-center"
                      >
                        <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-4 mr-2"></span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="font-semibold text-primary mb-4 font-serif">Certifications</h4>
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-sm border border-gray-200">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-serif">25+</div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-serif">15+</div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-serif">500+</div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {currentYear} PEC Petrochemical Engineering. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-600 hover:text-primary text-sm transition-colors duration-200">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-600 hover:text-primary text-sm transition-colors duration-200">Terms of Service</Link>
              <Link href="/sitemap" className="text-gray-600 hover:text-primary text-sm transition-colors duration-200">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
