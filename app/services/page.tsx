'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Cog, Wrench, Shield, Settings, Zap, Globe, BarChart, Users, Award, ChevronRight } from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('core');

  const coreServices = [
    {
      id: 1,
      title: "Process Engineering",
      description: "Advanced process design, optimization, and simulation for refineries, petrochemical plants, and gas processing facilities.",
      features: ["Process Design & Optimization", "Heat & Mass Balance Studies", "Equipment Sizing & Selection", "Process Safety Analysis"],
      icon: Cog,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "EPC Services",
      description: "End-to-end Engineering, Procurement, and Construction services for complex industrial projects.",
      features: ["Project Engineering", "Procurement Management", "Construction Management", "Commissioning & Start-up"],
      icon: Wrench,
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Quality Assurance",
      description: "Rigorous quality control and assurance programs ensuring compliance with industry standards.",
      features: ["Quality Management Systems", "Inspection & Testing", "Compliance Auditing", "Documentation Control"],
      icon: Shield,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Maintenance & Support",
      description: "Comprehensive maintenance, inspection, and support services to ensure operational excellence.",
      features: ["Preventive Maintenance", "Predictive Maintenance", "Equipment Overhaul", "Spare Parts Management"],
      icon: Settings,
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      title: "Environmental Consulting",
      description: "Expert advice on environmental impact assessments and sustainable practices.",
      features: ["Environmental Impact Assessment", "Sustainability Planning", "Waste Management", "Carbon Footprint Analysis"],
      icon: Globe,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: 6,
      title: "Project Management",
      description: "Full project lifecycle management from planning to execution and handover.",
      features: ["Project Planning & Scheduling", "Risk Management", "Cost Control", "Stakeholder Management"],
      icon: BarChart,
      color: "from-red-500 to-red-600"
    }
  ];

  const specializedServices = [
    {
      id: 1,
      title: "Offshore Engineering",
      description: "Specialized engineering solutions for offshore platforms, subsea systems, and marine structures.",
      icon: Zap,
      color: "from-cyan-500 to-cyan-600",
      features: ["Platform Design", "Subsea Engineering", "Marine Structures", "Offshore Installation"]
    },
    {
      id: 2,
      title: "Safety Engineering",
      description: "Comprehensive safety engineering services including HAZOP, SIL, and safety instrumented systems.",
      icon: Shield,
      color: "from-red-500 to-red-600",
      features: ["HAZOP Studies", "SIL Assessment", "Safety Systems Design", "Risk Analysis"]
    },
    {
      id: 3,
      title: "Digital Engineering",
      description: "Advanced digital solutions including 3D modeling, simulation, and digital twin technology.",
      icon: Cog,
      color: "from-indigo-500 to-indigo-600",
      features: ["3D Modeling", "Process Simulation", "Digital Twin Technology", "Advanced Analytics"]
    },
    {
      id: 4,
      title: "Process Optimization",
      description: "Advanced process optimization techniques to improve efficiency, reduce costs, and enhance performance.",
      icon: BarChart,
      color: "from-green-500 to-green-600",
      features: ["Efficiency Analysis", "Cost Optimization", "Performance Enhancement", "Process Integration"]
    },
    {
      id: 5,
      title: "Training & Development",
      description: "Specialized training programs for industry professionals and workforce development.",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      features: ["Technical Training", "Skill Development", "Certification Programs", "Knowledge Transfer"]
    },
    {
      id: 6,
      title: "Performance Analytics",
      description: "Data-driven analytics and performance monitoring to optimize plant operations and efficiency.",
      icon: Award,
      color: "from-yellow-500 to-yellow-600",
      features: ["Real-time Monitoring", "Performance Analytics", "Predictive Maintenance", "Operational Insights"]
    }
  ];

  const capabilities = [
    {
      title: "Concept",
      description: "Feasibility Studies",
      detail: "Initial Planning & Design"
    },
    {
      title: "Design",
      description: "Engineering Design",
      detail: "Detailed Engineering"
    },
    {
      title: "Build",
      description: "Construction",
      detail: "Procurement & Construction"
    },
    {
      title: "Operate",
      description: "Operations Support",
      detail: "Maintenance & Optimization"
    }
  ];

  const industryExpertise = [
    {
      title: "Oil & Gas Refining",
      description: "Comprehensive services for crude oil processing, refining, and petrochemical production facilities.",
      icon: Cog
    },
    {
      title: "Petrochemical Plants",
      description: "Specialized engineering for ethylene, propylene, and other petrochemical production units.",
      icon: Zap
    },
    {
      title: "Gas Processing",
      description: "Natural gas processing, LNG facilities, and gas treatment plant engineering services.",
      icon: Globe
    },
    {
      title: "Pipeline Systems",
      description: "Design and construction of cross-country pipelines and pipeline infrastructure projects.",
      icon: BarChart
    },
    {
      title: "Offshore Platforms",
      description: "Engineering and construction services for offshore drilling and production platforms.",
      icon: Shield
    },
    {
      title: "Environmental Solutions",
      description: "Environmental engineering and sustainability solutions for industrial facilities.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/services-hero.png)' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Comprehensive Engineering Services
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              From concept to completion, we deliver integrated solutions across the entire petrochemical value chain with proven expertise and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Service Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of engineering and construction services tailored to meet the complex needs of the petrochemical industry.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              {['core', 'specialized'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)} Services
                </button>
              ))}
            </div>
          </div>

          {/* Core Services Grid */}
          {activeCategory === 'core' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4 text-center">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-center">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3 text-sm">
                          <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Specialized Services Grid */}
          {activeCategory === 'specialized' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {specializedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="grid grid-cols-1 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3 text-sm">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Service Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Service Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive capabilities span the entire project lifecycle, from initial concept to final commissioning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl font-bold text-primary mb-2">{capability.title}</div>
                <div className="text-gray-900 mb-2">{capability.description}</div>
                <div className="text-sm text-gray-900 mt-2">{capability.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Industry Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve diverse sectors within the petrochemical industry with specialized knowledge and experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryExpertise.map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <expertise.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{expertise.title}</h3>
                <p className="text-gray-600 leading-relaxed">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
