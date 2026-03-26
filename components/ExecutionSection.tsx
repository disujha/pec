'use client'

import { motion } from 'framer-motion'
import { Cpu, Zap, BarChart3, Activity } from 'lucide-react'
import { Brain, Monitor, Package, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ExecutionSection() {
  const pillars = [
    {
      icon: Brain,
      title: "AI-Assisted Planning",
      description: "Advanced algorithms optimize project timelines, resource allocation, and risk mitigation strategies.",
      features: ["Predictive scheduling", "Resource optimization", "Risk analysis"]
    },
    {
      icon: Monitor,
      title: "Digital Project Monitoring",
      description: "Real-time tracking of progress, costs, and quality metrics with intelligent alerts.",
      features: ["Live dashboards", "Automated reporting", "Performance analytics"]
    },
    {
      icon: Package,
      title: "Integrated Procurement Systems",
      description: "Streamlined supply chain management with AI-driven vendor selection and inventory optimization.",
      features: ["Smart sourcing", "Inventory tracking", "Cost optimization"]
    },
    {
      icon: Wrench,
      title: "On-Ground Execution Excellence",
      description: "Field-proven methodologies combined with digital tools for precision execution.",
      features: ["Quality control", "Safety monitoring", "Progress tracking"]
    }
  ]

  const flowSteps = [
    { name: "Design", icon: "📐" },
    { name: "Simulation", icon: "🔬" },
    { name: "Procurement", icon: "📦" },
    { name: "Construction", icon: "🏗️" },
    { name: "Commissioning", icon: "⚡" }
  ]

  return (
    <section className="py-24 bg-pec-dark relative overflow-hidden">
      {/* Industrial Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-move"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-pec-rust/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pec-copper/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6">
        {/* Unique Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-pec-copper"></div>
            <span className="text-pec-copper font-bold text-sm tracking-widest">EXECUTION FRAMEWORK</span>
            <div className="w-12 h-0.5 bg-pec-copper"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            <span className="text-pec-copper">epcX</span> EXECUTION
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light tracking-wide">
            Proprietary methodology combining <span className="text-pec-copper font-semibold">25+ years expertise</span> with 
            <span className="text-pec-copper font-semibold"> AI-powered precision</span> for predictable project outcomes
          </p>
        </motion.div>

        {/* Industrial 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: <Cpu className="w-8 h-8" />,
              number: "01",
              title: "AI PLANNING",
              description: "Machine learning optimizes project timelines and resource allocation",
              features: ["Predictive Analytics", "Resource Optimization", "Risk Assessment"]
            },
            {
              icon: <Zap className="w-8 h-8" />,
              number: "02", 
              title: "PRECISION ENGINEERING",
              description: "Digital twins and advanced simulation ensure zero-error execution",
              features: ["3D Modeling", "Digital Twins", "Quality Control"]
            },
            {
              icon: <BarChart3 className="w-8 h-8" />,
              number: "03",
              title: "SMART PROCUREMENT", 
              description: "AI-driven supply chain management with real-time tracking",
              features: ["Supply Chain AI", "Cost Optimization", "Vendor Management"]
            },
            {
              icon: <Activity className="w-8 h-8" />,
              number: "04",
              title: "RAPID CONSTRUCTION",
              description: "Modular construction with IoT monitoring for accelerated delivery",
              features: ["Modular Building", "IoT Monitoring", "Safety Systems"]
            }
          ].map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-pec-rust/10 transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-pec-navy/50 backdrop-blur-sm border border-pec-rust/30 rounded-xl p-8 h-full">
                {/* Industrial Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-pec-rust rounded-full flex items-center justify-center text-white font-black">
                  {pillar.number}
                </div>
                
                <div className="text-pec-copper mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-black text-white mb-3">{pillar.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{pillar.description}</p>
                
                <ul className="space-y-2">
                  {pillar.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-pec-copper rounded-full"></div>
                      <span className="text-gray-300 text-xs font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unique Execution Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-white mb-4">
              <span className="text-pec-copper">EXECUTION</span> FLOW
            </h3>
            <p className="text-gray-400">From concept to commissioning with zero delays</p>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-pec-copper hover:bg-pec-rust text-white px-8 py-4 text-lg font-semibold rounded-md inline-flex items-center gap-2 group transition-colors">
            Explore Our Process
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
