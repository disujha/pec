'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, DollarSign, Clock, Award, ChevronRight, Filter, Search } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const featuredProjects = [
    {
      id: 1,
      title: "DM Water Treatment Plant - IOCL",
      client: "Indian Oil Corporation Limited",
      description: "Advanced demineralized water treatment facility featuring state-of-the-art reverse osmosis technology and comprehensive water quality management systems.",
      image: "/projects/dmwateriocl.jpg",
      value: "$45M",
      duration: "18 Months",
      location: "Paradeep, Odisha",
      manpower: "250+ Engineers",
      tags: ["Water Treatment", "IOCL", "Environmental"],
      category: "water",
      status: "completed"
    },
    {
      id: 2,
      title: "HSFO Tank Construction",
      client: "Private Sector Client",
      description: "Large-scale heavy fuel oil storage tank construction with advanced safety systems and corrosion-resistant materials.",
      image: "/projects/hsfotank.jpg",
      value: "$28M",
      duration: "12 Months",
      location: "Mumbai, Maharashtra",
      capacity: "50,000 KL",
      manpower: "180+ Engineers",
      tags: ["Tank Construction", "Fuel Storage", "Safety Systems"],
      category: "storage",
      status: "completed"
    },
    {
      id: 3,
      title: "Sulphuric Acid Tank - IFFCO",
      client: "Indian Farmers Fertiliser Cooperative",
      description: "Specialized chemical storage facility construction with advanced corrosion-resistant materials and safety systems.",
      image: "/projects/sulphurictank_iffco.jpg",
      value: "$35M",
      duration: "15 Months",
      location: "Kandla, Gujarat",
      manpower: "220+ Engineers",
      tags: ["Chemical Storage", "IFFCO", "Corrosion Resistant"],
      category: "chemical",
      status: "completed"
    },
    {
      id: 4,
      title: "HMEL Refinery Complex",
      client: "HPCL-Mittal Energy Limited",
      description: "Comprehensive refinery expansion project including process optimization, safety systems upgrade, and environmental compliance enhancements.",
      image: "/projects/hmel.jpg",
      value: "$120M",
      duration: "24 Months",
      location: "Bathinda, Punjab",
      manpower: "400+ Engineers",
      tags: ["Refinery Expansion", "HMEL", "Process Optimization"],
      category: "refinery",
      status: "completed"
    },
    {
      id: 5,
      title: "Mitsubishi Piping Systems",
      client: "Mitsubishi Corporation",
      description: "Comprehensive piping design and installation featuring advanced materials, automated welding processes, and rigorous testing protocols.",
      image: "/projects/pipingmitsubishi.jpg",
      value: "$35M",
      duration: "15 Months",
      location: "Chennai, Tamil Nadu",
      manpower: "220+ Engineers",
      tags: ["Piping Systems", "Mitsubishi", "Automated Welding"],
      category: "piping",
      status: "completed"
    },
    {
      id: 6,
      title: "Reliance Petrochemical Complex",
      client: "Reliance Industries",
      description: "Large-scale petrochemical complex development encompassing process engineering, construction management, and integrated safety systems.",
      image: "/projects/reliance.jpg",
      value: "$200M",
      duration: "36 Months",
      location: "Jamnagar, Gujarat",
      manpower: "600+ Engineers",
      tags: ["Petrochemical Complex", "Reliance", "Mega Project"],
      category: "petrochemical",
      status: "completed"
    }
  ];

  const additionalProjects = [
    {
      id: 7,
      title: "DM Water Plant - IOCL Paradeep",
      description: "Advanced water treatment facility with reverse osmosis technology for industrial water supply.",
      image: "/projects/dmwaterioclparadeep.jpg",
      location: "Paradeep, Odisha",
      year: "2022",
      category: "water"
    },
    {
      id: 8,
      title: "Precision Fabrication Services",
      description: "High-precision fabrication of complex petrochemical equipment with advanced welding techniques.",
      image: "/projects/fabrication.jpg",
      location: "Mumbai, Maharashtra",
      year: "2021",
      category: "fabrication"
    },
    {
      id: 9,
      title: "Piping Systems - VCPL",
      description: "Comprehensive piping installation with advanced materials and quality control.",
      image: "/projects/pipinvcpl.jpg",
      location: "Gujarat",
      year: "2020",
      category: "piping"
    },
    {
      id: 10,
      title: "Raw Water Treatment - IOCL Haldia",
      description: "Raw water treatment facility with advanced filtration and purification systems.",
      image: "/projects/rawwaterioclhaldia.jpg",
      location: "Haldia, West Bengal",
      year: "2020",
      category: "water"
    },
    {
      id: 11,
      title: "Vadinar Terminal Expansion",
      description: "Strategic oil terminal expansion with advanced storage systems and automated loading facilities.",
      image: "/projects/vadinar.jpg",
      location: "Vadinar, Gujarat",
      year: "2019",
      category: "storage"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: featuredProjects.length + additionalProjects.length },
    { id: 'water', name: 'Water Treatment', count: 3 },
    { id: 'storage', name: 'Storage', count: 2 },
    { id: 'chemical', name: 'Chemical', count: 1 },
    { id: 'refinery', name: 'Refinery', count: 1 },
    { id: 'piping', name: 'Piping', count: 2 },
    { id: 'petrochemical', name: 'Petrochemical', count: 1 },
    { id: 'fabrication', name: 'Fabrication', count: 1 }
  ];

  const filteredProjects = featuredProjects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/projects-hero.png)' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our Project Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8">
              Showcasing our expertise through successful delivery of complex petrochemical projects across the globe.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 mr-2" />
                <span>500+ Projects Completed</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <DollarSign className="w-4 h-4 mr-2" />
                <span>$5B+ Total Value</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-4 h-4 mr-2" />
                <span>1000+ Engineers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our flagship projects demonstrating engineering excellence and innovative solutions in the petrochemical sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-sm text-accent font-medium">{project.client}</span>
                    <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                    <p className="text-gray-600 line-clamp-3">{project.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm">
                      <DollarSign className="w-4 h-4 text-primary mr-2" />
                      <span className="font-medium text-primary">{project.value}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 text-primary mr-2" />
                      <span className="text-gray-600">{project.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 text-primary mr-2" />
                      <span className="text-gray-600">{project.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 text-primary mr-2" />
                      <span className="text-gray-600">{project.manpower}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors flex items-center justify-center">
                    View Project Details
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">More Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional examples of our diverse project portfolio across various sectors and technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{project.location}</span>
                    </div>
                    <span className="text-accent font-medium">{project.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Project Excellence</h2>
            <p className="text-xl text-white max-w-3xl mx-auto opacity-90">
              Our track record speaks for itself with consistent delivery of complex projects and industry recognition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", icon: Award },
              { number: "$5B+", label: "Total Value", icon: DollarSign },
              { number: "98%", label: "On-Time Delivery", icon: Clock },
              { number: "100%", label: "Safety Record", icon: Users }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                  <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-white">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}