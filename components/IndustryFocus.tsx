'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Droplet, Truck, Waves, Factory, Wrench, Database, Building } from 'lucide-react'

export default function IndustryFocus() {
  const [activeTab, setActiveTab] = useState('refinery')

  const industries = [
    {
      id: 'refinery',
      name: 'Refinery',
      icon: Factory,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      projects: [
        {
          title: "Crude Distillation Unit",
          capacity: "200,000 BPD",
          timeline: "24 months",
          description: "Complete EPC for crude distillation with advanced process control systems"
        },
        {
          title: "Catalytic Reforming Unit",
          capacity: "50,000 BPD",
          timeline: "18 months",
          description: "High-octane gasoline production with hydrogen recycling systems"
        },
        {
          title: "Hydrocracking Complex",
          capacity: "100,000 BPD",
          timeline: "30 months",
          description: "Ultra-low sulfur diesel production with integrated hydrogen units"
        }
      ]
    },
    {
      id: 'storage',
      name: 'Storage',
      icon: Database,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      projects: [
        {
          title: "Tank Farm Development",
          capacity: "500,000 KL",
          timeline: "12 months",
          description: "Crude and product storage with automated tank gauging systems"
        },
        {
          title: "Strategic Petroleum Reserve",
          capacity: "2 Million KL",
          timeline: "24 months",
          description: "Underground storage caverns with surface facilities"
        },
        {
          title: "Chemical Storage Terminal",
          capacity: "100,000 KL",
          timeline: "15 months",
          description: "Specialized chemical storage with safety systems and containment"
        }
      ]
    },
    {
      id: 'pipelines',
      name: 'Pipelines',
      icon: Truck,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      projects: [
        {
          title: "Cross-Country Pipeline",
          length: "1,200 km",
          timeline: "36 months",
          description: "Multi-product pipeline with pump stations and SCADA control"
        },
        {
          title: "Offshore Pipeline",
          length: "150 km",
          timeline: "24 months",
          description: "Subsea gas pipeline with riser platforms and compression facilities"
        },
        {
          title: "Product Distribution Network",
          length: "500 km",
          timeline: "18 months",
          description: "Urban pipeline network with automated metering and safety systems"
        }
      ]
    },
    {
      id: 'water',
      name: 'Water Treatment',
      icon: Waves,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      projects: [
        {
          title: "Industrial Wastewater Treatment",
          capacity: "50 MLD",
          timeline: "18 months",
          description: "Zero liquid discharge system with evaporation and crystallization"
        },
        {
          title: "Seawater Desalination Plant",
          capacity: "100 MLD",
          timeline: "24 months",
          description: "Reverse osmosis plant with energy recovery systems"
        },
        {
          title: "Process Water Treatment",
          capacity: "200 MLD",
          timeline: "20 months",
          description: "Demineralization and polishing systems for boiler feed water"
        }
      ]
    }
  ]

  const currentIndustry = industries.find(ind => ind.id === activeTab) || industries[0]

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-blueprint bg-blueprint opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pec-dark mb-6">
            Industry <span className="text-pec-copper">Focus</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized expertise in oil, gas, and petrochemical infrastructure with proven 
            execution capabilities in industrial environments.
          </p>
        </motion.div>

        {/* Industry tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-lg border-2 transition-all ${
                activeTab === industry.id
                  ? `${industry.bgColor} ${industry.borderColor} ${industry.color} border-current`
                  : 'bg-white border-gray-200 text-gray-600 hover:border-pec-copper hover:text-pec-copper'
              }`}
            >
              <industry.icon className="w-5 h-5" />
              <span className="font-medium">{industry.name}</span>
            </button>
          ))}
        </div>

        {/* Industry content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Main showcase */}
          <div className="lg:col-span-2">
            <div className={`${currentIndustry.bgColor} rounded-xl p-8 border ${currentIndustry.borderColor}`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 ${currentIndustry.bgColor} rounded-lg flex items-center justify-center`}>
                  <currentIndustry.icon className={`w-8 h-8 ${currentIndustry.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pec-dark">{currentIndustry.name} Projects</h3>
                  <p className="text-gray-600">Specialized EPC solutions</p>
                </div>
              </div>

              {/* Featured projects */}
              <div className="space-y-4">
                {currentIndustry.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-pec-dark">{project.title}</h4>
                      <div className="text-right">
                        <div className={`text-sm font-medium ${currentIndustry.color}`}>
                          {'capacity' in project ? project.capacity : project.length}
                        </div>
                        <div className="text-xs text-gray-500">{project.timeline}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Capabilities sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <h4 className="text-lg font-bold text-pec-dark mb-4">Key Capabilities</h4>
              <ul className="space-y-3">
                {[
                  "Process Engineering",
                  "Detailed Design",
                  "Equipment Procurement",
                  "Construction Management",
                  "Commissioning & Startup",
                  "Safety Management"
                ].map((capability, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pec-copper rounded-full" />
                    <span className="text-pec-navy">{capability}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-pec-dark rounded-xl p-6 text-white"
            >
              <h4 className="text-lg font-bold mb-4">Project Metrics</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Safety Record</span>
                    <span className="text-pec-copper">LTIFR: 0.02</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-pec-copper h-2 rounded-full" style={{ width: '98%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Quality Compliance</span>
                    <span className="text-pec-copper">99.5%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-pec-copper h-2 rounded-full" style={{ width: '99.5%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>On-Time Delivery</span>
                    <span className="text-pec-copper">87%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-pec-copper h-2 rounded-full" style={{ width: '87%' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
