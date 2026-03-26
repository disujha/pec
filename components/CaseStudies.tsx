'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Award, TrendingUp, Clock, CheckCircle2, ArrowRight } from 'lucide-react'

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedStudy, setSelectedStudy] = useState<typeof caseStudies[0] | null>(null)

  const caseStudies = [
    {
      id: 1,
      title: "IOCL Paradip Refinery Expansion",
      client: "Indian Oil Corporation Limited",
      category: "refinery",
      location: "Paradip, Odisha",
      timeline: "28 months",
      scope: "Crude Distillation Unit (CDU) - 150,000 BPD",
      challenge: "Tight 24-month deadline with complex integration into existing refinery operations",
      outcome: "Completed 2 months ahead of schedule with 15% cost savings",
      metrics: {
        safety: "Zero LTIs",
        quality: "99.8% compliance",
        efficiency: "18% above target"
      },
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Reliance Jamnagar Tank Farm",
      client: "Reliance Industries Limited",
      category: "storage",
      location: "Jamnagar, Gujarat",
      timeline: "18 months",
      scope: "Strategic Storage Terminal - 1.2 Million KL capacity",
      challenge: "Coastal environment with strict environmental regulations and monsoon constraints",
      outcome: "Zero environmental incidents, achieved full operational readiness",
      metrics: {
        safety: "Zero incidents",
        quality: "100% compliance",
        efficiency: "On-time delivery"
      },
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "HPCL Mumbai Pipeline Network",
      client: "Hindustan Petroleum Corporation Limited",
      category: "pipelines",
      location: "Mumbai, Maharashtra",
      timeline: "24 months",
      scope: "Multi-product pipeline - 450 km with 8 pump stations",
      challenge: "Urban right-of-way challenges and crossing multiple utility corridors",
      outcome: "Completed with minimal disruption to city operations",
      metrics: {
        safety: "Zero LTIs",
        quality: "99.5% compliance",
        efficiency: "12% cost savings"
      },
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Nayara Energy Vadinar Revamp",
      client: "Nayara Energy",
      category: "refinery",
      location: "Vadinar, Gujarat",
      timeline: "36 months",
      scope: "Complete refinery modernization and capacity enhancement",
      challenge: "Live refinery operations with zero shutdown requirements",
      outcome: "Increased capacity by 35% while maintaining operations",
      metrics: {
        safety: "Zero process safety incidents",
        quality: "99.9% compliance",
        efficiency: "22% productivity gain"
      },
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "L&T Katupalli Water Treatment",
      client: "Larsen & Toubro",
      category: "water",
      location: "Katupalli, Tamil Nadu",
      timeline: "20 months",
      scope: "Industrial wastewater treatment - 50 MLD capacity",
      challenge: "Stringent zero liquid discharge requirements and space constraints",
      outcome: "Achieved ZLD compliance with 30% lower energy consumption",
      metrics: {
        safety: "Zero LTIs",
        quality: "100% compliance",
        efficiency: "30% energy savings"
      },
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Kuwait National Petroleum Company Refinery",
      client: "KNPC - Kuwait National Petroleum Company",
      category: "refinery",
      location: "Al Ahmadi, Kuwait",
      timeline: "32 months",
      scope: "Refinery upgrade and clean fuel project - 615,000 BPD capacity",
      challenge: "Harsh desert environment with extreme temperatures and stringent quality requirements",
      outcome: "Successfully completed with zero safety incidents and full operational readiness",
      metrics: {
        safety: "Zero LTIs",
        quality: "100% compliance",
        efficiency: "On-time delivery"
      },
      image: "/api/placeholder/600/400"
    }
  ]

  const filters = [
    { id: 'all', name: 'All Projects', count: caseStudies.length },
    { id: 'refinery', name: 'Refinery', count: caseStudies.filter(cs => cs.category === 'refinery').length },
    { id: 'storage', name: 'Storage', count: caseStudies.filter(cs => cs.category === 'storage').length },
    { id: 'pipelines', name: 'Pipelines', count: caseStudies.filter(cs => cs.category === 'pipelines').length },
    { id: 'water', name: 'Water Treatment', count: caseStudies.filter(cs => cs.category === 'water').length }
  ]

  const filteredStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === activeFilter)

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
            Project <span className="text-pec-copper">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world execution proof showcasing our ability to deliver complex EPC projects 
            with precision, safety, and predictable outcomes.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all ${
                activeFilter === filter.id
                  ? 'bg-pec-copper text-white border-pec-copper'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-pec-copper hover:text-pec-copper'
              }`}
            >
              <span className="font-medium">{filter.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeFilter === filter.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Case studies grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
            >
              {/* Project header */}
              <div className="bg-pec-dark p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <p className="text-pec-copper font-medium">{study.client}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Timeline</div>
                    <div className="text-lg font-semibold">{study.timeline}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {study.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Completed 2024
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                {/* Scope */}
                <div className="mb-6">
                  <h4 className="font-semibold text-pec-dark mb-2">Project Scope</h4>
                  <p className="text-gray-600 text-sm">{study.scope}</p>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="font-semibold text-pec-dark mb-2">Key Challenge</h4>
                  <p className="text-gray-600 text-sm">{study.challenge}</p>
                </div>

                {/* Outcome */}
                <div className="mb-6">
                  <h4 className="font-semibold text-pec-dark mb-2">Outcome</h4>
                  <p className="text-green-600 text-sm font-medium">{study.outcome}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Safety</div>
                    <div className="text-sm font-semibold text-pec-dark">{study.metrics.safety}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Award className="w-5 h-5 text-pec-copper mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Quality</div>
                    <div className="text-sm font-semibold text-pec-dark">{study.metrics.quality}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-600">Efficiency</div>
                    <div className="text-sm font-semibold text-pec-dark">{study.metrics.efficiency}</div>
                  </div>
                </div>

                {/* CTA */}
                <button 
                  onClick={() => setSelectedStudy(study)}
                  className="w-full bg-pec-copper hover:bg-pec-rust text-white py-3 px-4 rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-colors"
                >
                  View Detailed Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-pec-dark rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Execute Your Next Project?
            </h3>
            <p className="text-gray-300 mb-6">
              Let us demonstrate how our execution intelligence can deliver predictable outcomes for your complex EPC requirements.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('project-discussion');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-pec-copper hover:bg-pec-rust text-white px-8 py-4 text-lg font-semibold rounded-md inline-flex items-center gap-2 group transition-colors"
            >
              Discuss Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Side Sheet Overlay */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedStudy(null)}
          />
          
          {/* Side Sheet */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="absolute right-0 top-0 h-full w-full max-w-full sm:max-w-2xl bg-white shadow-2xl overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-pec-dark text-white p-6 border-b border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedStudy.title}</h3>
                  <p className="text-pec-copper font-medium">{selectedStudy.client}</p>
                </div>
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center gap-6 mt-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {selectedStudy.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {selectedStudy.timeline}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Completed 2024
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Project Overview */}
              <div>
                <h4 className="text-xl font-bold text-pec-dark mb-4">Project Overview</h4>
                <div className="bg-pec-copper/10 p-4 rounded-lg mb-4">
                  <p className="text-pec-dark font-medium">{selectedStudy.scope}</p>
                </div>
              </div>

              {/* Key Challenge */}
              <div>
                <h4 className="text-xl font-bold text-pec-dark mb-4">Key Challenge</h4>
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <p className="text-gray-700">{selectedStudy.challenge}</p>
                </div>
              </div>

              {/* Solution & Outcome */}
              <div>
                <h4 className="text-xl font-bold text-pec-dark mb-4">Solution & Outcome</h4>
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <p className="text-green-800 font-medium">{selectedStudy.outcome}</p>
                </div>
              </div>

              {/* Detailed Metrics */}
              <div>
                <h4 className="text-xl font-bold text-pec-dark mb-4">Performance Metrics</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Safety Record</div>
                    <div className="text-lg font-bold text-pec-dark">{selectedStudy.metrics.safety}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 bg-pec-copper/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-pec-copper" />
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Quality Compliance</div>
                    <div className="text-lg font-bold text-pec-dark">{selectedStudy.metrics.quality}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Efficiency</div>
                    <div className="text-lg font-bold text-pec-dark">{selectedStudy.metrics.efficiency}</div>
                  </div>
                </div>
              </div>

              {/* Project Highlights */}
              <div>
                <h4 className="text-xl font-bold text-pec-dark mb-4">Project Highlights</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pec-copper rounded-full mt-2"></div>
                    <p className="text-gray-700">Strategic planning and execution excellence</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pec-copper rounded-full mt-2"></div>
                    <p className="text-gray-700">Advanced technology integration and digital solutions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pec-copper rounded-full mt-2"></div>
                    <p className="text-gray-700">Exceptional safety and environmental performance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pec-copper rounded-full mt-2"></div>
                    <p className="text-gray-700">On-time delivery within budget constraints</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-pec-dark rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-3">Interested in Similar Projects?</h4>
                <p className="text-gray-300 mb-6">
                  Let's discuss how we can deliver similar results for your organization.
                </p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      setSelectedStudy(null);
                      setTimeout(() => {
                        const element = document.getElementById('project-discussion');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}
                    className="bg-pec-copper hover:bg-pec-rust text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
                  >
                    Discuss Your Project
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedStudy(null)}
                    className="border border-white text-white hover:bg-white hover:text-pec-dark px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
