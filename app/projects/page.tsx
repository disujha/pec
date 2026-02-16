import Image from 'next/image';

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our Project Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Showcasing our expertise through successful delivery of complex petrochemical projects across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects from Homepage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Our portfolio demonstrates our capability to deliver complex projects on time, within budget, and to the highest quality standards.
            </p>
          </div>
          
          {/* Project 1 - DM Water IOCL */}
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
              <p className="text-lg text-gray-900 mb-6">
                Advanced demineralized water treatment facility for Indian Oil Corporation Limited, featuring state-of-the-art reverse osmosis technology and comprehensive water quality management systems. This project demonstrates our expertise in water treatment engineering and environmental compliance.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-sm text-gray-500">Project Value</div>
                  <div className="text-lg font-semibold text-primary">$45M</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="text-lg font-semibold text-primary">18 Months</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="text-lg font-semibold text-primary">Paradeep, Odisha</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Manpower</div>
                  <div className="text-lg font-semibold text-primary">250+ Engineers</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Water Treatment</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">IOCL</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Environmental</span>
              </div>
            </div>
          </div>

          {/* Project 2 - HSFO Tank */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-1">
              <h3 className="text-3xl font-bold text-primary mb-4">HSFO Tank Construction</h3>
              <p className="text-lg text-gray-900 mb-6">
                Large-scale heavy fuel oil storage tank construction with advanced safety systems and corrosion-resistant materials. This project showcases our capabilities in tank engineering, structural design, and safety compliance for critical fuel storage infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-sm text-gray-500">Project Value</div>
                  <div className="text-lg font-semibold text-primary">$28M</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="text-lg font-semibold text-primary">12 Months</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Capacity</div>
                  <div className="text-lg font-semibold text-primary">50,000 KL</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Manpower</div>
                  <div className="text-lg font-semibold text-primary">180+ Engineers</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tank Construction</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Fuel Storage</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Safety Systems</span>
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

          {/* Project 3 - Sulphuric Acid Tank IFFCO */}
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
              <p className="text-lg text-gray-900 mb-6">
                Specialized chemical storage facility construction for IFFCO with advanced corrosion-resistant materials and safety systems. This project demonstrates our expertise in chemical plant engineering and hazardous material handling protocols.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-sm text-gray-500">Project Value</div>
                  <div className="text-lg font-semibold text-primary">$35M</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="text-lg font-semibold text-primary">15 Months</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="text-lg font-semibold text-primary">Kandla, Gujarat</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Manpower</div>
                  <div className="text-lg font-semibold text-primary">220+ Engineers</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Chemical Storage</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">IFFCO</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Corrosion Resistant</span>
              </div>
            </div>
          </div>

          {/* Project 4 - HMEL Refinery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-1">
              <h3 className="text-3xl font-bold text-primary mb-4">HMEL Refinery Complex</h3>
              <p className="text-lg text-gray-900 mb-6">
                Comprehensive refinery expansion project for HPCL-Mittal Energy Limited, including process optimization, safety systems upgrade, and environmental compliance enhancements. This project showcases our capabilities in large-scale refinery engineering and modernization.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-sm text-gray-500">Project Value</div>
                  <div className="text-lg font-semibold text-primary">$120M</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="text-lg font-semibold text-primary">24 Months</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="text-lg font-semibold text-primary">Bathinda, Punjab</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Manpower</div>
                  <div className="text-lg font-semibold text-primary">400+ Engineers</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Refinery Expansion</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">HMEL</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Process Optimization</span>
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

          {/* Project 5 - Mitsubishi Piping */}
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
              <p className="text-lg text-gray-900 mb-6">
                Comprehensive piping design and installation for Mitsubishi projects, featuring advanced materials, automated welding processes, and rigorous testing protocols. This project demonstrates our expertise in precision piping engineering and quality control systems.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-sm text-gray-500">Project Value</div>
                  <div className="text-lg font-semibold text-primary">$35M</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="text-lg font-semibold text-primary">15 Months</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="text-lg font-semibold text-primary">Chennai, Tamil Nadu</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Manpower</div>
                  <div className="text-lg font-semibold text-primary">220+ Engineers</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Piping Systems</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Mitsubishi</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Automated Welding</span>
              </div>
            </div>
          </div>

          {/* Project 6 - Reliance Complex */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <h3 className="text-3xl font-bold text-primary mb-4">Reliance Petrochemical Complex</h3>
              <p className="text-lg text-gray-900 mb-6">
                Large-scale petrochemical complex development for Reliance Industries, encompassing process engineering, construction management, and integrated safety systems. This project showcases our expertise in mega-project execution and world-class facility operations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-sm text-gray-500">Project Value</div>
                  <div className="text-lg font-semibold text-primary">$200M</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="text-lg font-semibold text-primary">36 Months</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="text-lg font-semibold text-primary">Jamnagar, Gujarat</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Manpower</div>
                  <div className="text-lg font-semibold text-primary">600+ Engineers</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Petrochemical Complex</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Reliance</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Mega Project</span>
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

      {/* Additional Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Additional Projects</h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              More examples of our diverse project portfolio across various sectors and technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* DM Water IOCL Paradeep */}
            <div className="bg-white p-6">
              <Image
                src="/projects/dmwaterioclparadeep.jpg"
                alt="DM Water IOCL Paradeep"
                width={400}
                height={250}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">DM Water Plant - IOCL Paradeep</h3>
              <p className="text-gray-900 mb-4">
                Advanced water treatment facility with reverse osmosis technology for industrial water supply.
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Paradeep, Odisha</span>
                <span className="text-accent font-medium">2022</span>
              </div>
            </div>

            {/* Fabrication Excellence */}
            <div className="bg-white p-6">
              <Image
                src="/projects/fabrication.jpg"
                alt="Fabrication Excellence"
                width={400}
                height={250}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">Precision Fabrication Services</h3>
              <p className="text-gray-900 mb-4">
                High-precision fabrication of complex petrochemical equipment with advanced welding techniques.
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Mumbai, Maharashtra</span>
                <span className="text-accent font-medium">2021</span>
              </div>
            </div>

            {/* Piping VCPL */}
            <div className="bg-white p-6">
              <Image
                src="/projects/pipinvcpl.jpg"
                alt="Piping VCPL"
                width={400}
                height={250}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">Piping Systems - VCPL</h3>
              <p className="text-gray-900 mb-4">
                Comprehensive piping installation for VCPL with advanced materials and quality control.
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Gujarat</span>
                <span className="text-accent font-medium">2020</span>
              </div>
            </div>

            {/* Raw Water IOCL Haldia */}
            <div className="bg-white p-6">
              <Image
                src="/projects/rawwaterioclhaldia.jpg"
                alt="Raw Water IOCL Haldia"
                width={400}
                height={250}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">Raw Water Treatment - IOCL Haldia</h3>
              <p className="text-gray-900 mb-4">
                Raw water treatment facility with advanced filtration and purification systems.
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Haldia, West Bengal</span>
                <span className="text-accent font-medium">2020</span>
              </div>
            </div>

            {/* Vadinar Terminal */}
            <div className="bg-white p-6">
              <Image
                src="/projects/vadinar.jpg"
                alt="Vadinar Terminal"
                width={400}
                height={250}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">Vadinar Terminal Expansion</h3>
              <p className="text-gray-900 mb-4">
                Strategic oil terminal expansion with advanced storage systems and automated loading facilities.
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Vadinar, Gujarat</span>
                <span className="text-accent font-medium">2019</span>
              </div>
            </div>

            {/* Project Statistics Card */}
            <div className="bg-primary text-white p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4">Project Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Projects Completed</span>
                  <span className="text-accent font-bold">500+</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Value</span>
                  <span className="text-accent font-bold">$5B+</span>
                </div>
                <div className="flex justify-between">
                  <span>On-Time Delivery</span>
                  <span className="text-accent font-bold">98%</span>
                </div>
                <div className="flex justify-between">
                  <span>Safety Record</span>
                  <span className="text-accent font-bold">100%</span>
                </div>
              </div>
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
    </div>
  );
}