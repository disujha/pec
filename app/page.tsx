import Image from 'next/image';
import HeroSlideshow from '../components/HeroSlideshow';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Slideshow */}
      <HeroSlideshow />

      {/* Brands Section */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">Trusted by Industry Leaders</h2>
            <p className="text-gray-900">Companies we&apos;ve partnered with across the globe</p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 items-center">
              {/* First set of brands */}
              <div className="flex items-center space-x-12 flex-shrink-0">
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/reliance.jpg" alt="Reliance" width={50} height={50} className="object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/iocl.jpg" alt="IOCL" width={50} height={50} className="object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/hpcl.jpg" alt="HPCL" width={50} height={50} className="object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/lt.jpg" alt="L&T" width={50} height={50} className="object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/kirloskar.jpg" alt="Kirloskar" width={50} height={50} className="object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/mitsubishi.jpg" alt="Mitsubishi" width={50} height={50} className="object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/technip.jpg" alt="Technip" width={50} height={50} className="object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/toyo.jpg" alt="Toyo" width={50} height={50} className="object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/iffco.jpg" alt="IFFCO" width={50} height={50} className="object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/hmel.jpg" alt="HMEL" width={50} height={50} className="object-contain" />
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-12 flex-shrink-0">
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/reliance.jpg" alt="Reliance" width={50} height={50} className="object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/iocl.jpg" alt="IOCL" width={50} height={50} className="object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/hpcl.jpg" alt="HPCL" width={50} height={50} className="object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/lt.jpg" alt="L&T" width={50} height={50} className="object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/kirloskar.jpg" alt="Kirloskar" width={50} height={50} className="object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/mitsubishi.jpg" alt="Mitsubishi" width={50} height={50} className="object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/technip.jpg" alt="Technip" width={50} height={50} className="object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/toyo.jpg" alt="Toyo" width={50} height={50} className="object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/iffco.jpg" alt="IFFCO" width={50} height={50} className="object-contain" />
                </div>
                <div className="flex items-center justify-center w-20 h-16 bg-white border border-gray-100">
                  <Image src="/brands/hmel.jpg" alt="HMEL" width={50} height={50} className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Some of Our Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Some of Our Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise through successful project deliveries across diverse industrial sectors.
            </p>
          </div>
          
          {/* Project 1 - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <Image
                src="/projects/dmwateriocl.jpg"
                alt="DM Water IOCL Project"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-primary mb-4">DM Water Treatment Plant - IOCL</h3>
              <p className="text-lg text-gray-600 mb-6">
                Advanced demineralized water treatment facility for Indian Oil Corporation Limited, featuring state-of-the-art reverse osmosis technology and comprehensive water quality management systems. This project demonstrates our expertise in water treatment engineering and environmental compliance.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-primary/10 text-primary px-4 py-2 font-medium">Water Treatment</span>
                <span className="bg-primary/10 text-primary px-4 py-2 font-medium">IOCL</span>
                <span className="bg-primary/10 text-primary px-4 py-2 font-medium">Paradeep</span>
              </div>
            </div>
          </div>

          {/* Project 2 - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-1">
              <h3 className="text-3xl font-bold text-primary mb-4">HSFO Tank Construction</h3>
              <p className="text-lg text-gray-600 mb-6">
                Large-scale heavy fuel oil storage tank construction with advanced safety systems and corrosion-resistant materials. This project showcases our capabilities in tank engineering, structural design, and safety compliance for critical fuel storage infrastructure.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-primary/10 text-primary px-4 py-2 font-medium">Tank Construction</span>
                <span className="bg-primary/10 text-primary px-4 py-2 font-medium">Fuel Storage</span>
                <span className="bg-primary/10 text-primary px-4 py-2 font-medium">Safety Systems</span>
              </div>
            </div>
            <div className="order-2">
              <Image
                src="/projects/hsfotank.jpg"
                alt="HSFO Tank Construction"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Project 3 - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <Image
                src="/projects/sulphurictank_iffco.jpg"
                alt="Sulphuric Acid Tank IFFCO"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-primary mb-4">Sulphuric Acid Tank - IFFCO</h3>
              <p className="text-lg text-gray-600 mb-6">
                Specialized chemical storage facility construction for IFFCO with advanced corrosion-resistant materials and safety systems. This project demonstrates our expertise in chemical plant engineering and hazardous material handling protocols.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-primary/10 text-primary px-4 py-2 font-medium">Chemical Storage</span>
                <span className="bg-primary/10 text-primary px-4 py-2 font-medium">IFFCO</span>
                <span className="bg-primary/10 text-primary px-4 py-2 font-medium">Corrosion Resistant</span>
              </div>
            </div>
          </div>

          {/* Project 4 - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-1">
              <h3 className="text-3xl font-bold text-primary mb-4">HMEL Refinery Complex</h3>
              <p className="text-lg text-gray-600 mb-6">
                Comprehensive refinery expansion project for HPCL-Mittal Energy Limited, including process optimization, safety systems upgrade, and environmental compliance enhancements. This project showcases our capabilities in large-scale refinery engineering and modernization.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-primary/10 text-primary px-4 py-2 font-medium">Refinery Expansion</span>
                <span className="bg-primary/10 text-primary px-4 py-2 font-medium">HMEL</span>
                <span className="bg-primary/10 text-primary px-4 py-2 font-medium">Process Optimization</span>
              </div>
            </div>
            <div className="order-2">
              <Image
                src="/projects/hmel.jpg"
                alt="HMEL Refinery Complex"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Project 5 - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <Image
                src="/projects/pipingmitsubishi.jpg"
                alt="Mitsubishi Piping Systems"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-primary mb-4">Mitsubishi Piping Systems</h3>
              <p className="text-lg text-gray-600 mb-6">
                Comprehensive piping design and installation for Mitsubishi projects, featuring advanced materials, automated welding processes, and rigorous testing protocols. This project demonstrates our expertise in precision piping engineering and quality control systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-primary/10 text-primary px-4 py-2 font-medium">Piping Systems</span>
                <span className="bg-primary/10 text-primary px-4 py-2 font-medium">Mitsubishi</span>
                <span className="bg-primary/10 text-primary px-4 py-2 font-medium">Automated Welding</span>
              </div>
            </div>
          </div>

          {/* Project 6 - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <h3 className="text-3xl font-bold text-primary mb-4">Reliance Petrochemical Complex</h3>
              <p className="text-lg text-gray-600 mb-6">
                Large-scale petrochemical complex development for Reliance Industries, encompassing process engineering, construction management, and integrated safety systems. This project showcases our expertise in mega-project execution and world-class facility operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-primary/10 text-primary px-4 py-2 font-medium">Petrochemical Complex</span>
                <span className="bg-primary/10 text-primary px-4 py-2 font-medium">Reliance</span>
                <span className="bg-primary/10 text-primary px-4 py-2 font-medium">Mega Project</span>
              </div>
            </div>
            <div className="order-2">
              <Image
                src="/projects/reliance.jpg"
                alt="Reliance Petrochemical Complex"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Critical Projects */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Critical Projects</h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              High-stakes projects that demanded exceptional precision, innovation, and execution under challenging conditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Critical Project 1 */}
            <div className="bg-white p-8">
              <div className="mb-6">
                <Image
                  src="/critical-special-1.jpg"
                  alt="Critical Special Project 1"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover mb-6"
                />
                <h3 className="text-2xl font-bold text-primary mb-4">Critical Infrastructure Project</h3>
                <p className="text-gray-900 mb-4">
                  A high-priority infrastructure project that required exceptional engineering precision and rapid deployment capabilities. This critical project demanded innovative solutions and flawless execution under stringent timelines and safety requirements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-100 text-red-800 px-3 py-1 text-sm font-medium">Critical</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 text-sm font-medium">Infrastructure</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 text-sm font-medium">High Priority</span>
                </div>
              </div>
            </div>

            {/* Critical Project 2 */}
            <div className="bg-white p-8">
              <div className="mb-6">
                <Image
                  src="/critical-special-nature.png"
                  alt="Critical Special Nature Project"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover mb-6"
                />
                <h3 className="text-2xl font-bold text-primary mb-4">Critical Nature Project</h3>
                <p className="text-gray-900 mb-4">
                  An environmentally sensitive project that required specialized expertise in sustainable engineering practices and environmental compliance. This critical nature project showcased our commitment to balancing industrial progress with environmental stewardship.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-100 text-red-800 px-3 py-1 text-sm font-medium">Critical</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 text-sm font-medium">Environmental</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 text-sm font-medium">Sustainable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Comprehensive Engineering Solutions</h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              From concept to completion, we deliver integrated solutions across the entire petrochemical value chain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Process Engineering</h3>
              <p className="text-gray-900">Advanced process design and optimization for refineries, petrochemical plants, and gas processing facilities.</p>
            </div>
            <div className="bg-white p-8">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">EPC Services</h3>
              <p className="text-gray-900">End-to-end Engineering, Procurement, and Construction services for complex industrial projects.</p>
            </div>
            <div className="bg-white p-8">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Quality Assurance</h3>
              <p className="text-gray-900">Rigorous quality control and assurance programs ensuring compliance with international standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & HSE Excellence */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Safety & HSE Excellence</h2>
              <p className="text-xl text-white mb-8">
                Our unwavering commitment to Health, Safety, and Environment standards ensures zero compromise on safety across all operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Zero major incidents in the last 5 years</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>100% compliance with international HSE standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Continuous training and awareness programs</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8">
              <h3 className="text-2xl font-semibold mb-6">Safety Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Lost Time Injury Frequency Rate</span>
                  <span className="text-2xl font-bold text-accent">0.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Total Recordable Incident Rate</span>
                  <span className="text-2xl font-bold text-accent">0.1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Safety Training Hours (Annual)</span>
                  <span className="text-2xl font-bold text-accent">50,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Global Presence & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With strategic operations across multiple continents, we bring local expertise and global standards to every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">India</h3>
              <p className="text-gray-600">Headquarters & Major Operations</p>
              <p className="text-sm text-gray-900 mt-2">200+ Projects</p>
            </div>
            <div className="text-center p-6 bg-gray-50">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Middle East</h3>
              <p className="text-gray-600">Strategic Partnerships</p>
              <p className="text-sm text-gray-900 mt-2">150+ Projects</p>
            </div>
            <div className="text-center p-6 bg-gray-50">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Africa</h3>
              <p className="text-gray-600">Emerging Markets</p>
              <p className="text-sm text-gray-900 mt-2">75+ Projects</p>
            </div>
            <div className="text-center p-6 bg-gray-50">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Southeast Asia</h3>
              <p className="text-gray-600">Regional Expansion</p>
              <p className="text-sm text-gray-900 mt-2">100+ Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Start Your Next Project?</h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Partner with PEC for world-class petrochemical engineering solutions. Let&apos;s discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-accent text-primary px-8 py-4 font-semibold hover:bg-accent/90 transition-colors">
              Get Started Today
            </a>
            <a href="/projects" className="border-2 border-primary text-primary px-8 py-4 font-semibold hover:bg-primary hover:text-white transition-colors">
              View Our Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
