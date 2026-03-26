'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Upload, FileText, Phone, Mail, Send, CheckCircle2, ArrowRight, Zap, Edit } from 'lucide-react'

export default function ProjectCTA() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    timeline: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)

  const projectTypes = [
    'Refinery Expansion',
    'Storage Terminal',
    'Pipeline Network',
    'Water Treatment Plant',
    'Process Units',
    'Infrastructure Development',
    'Other'
  ]

  const timelines = [
    'Immediate (0-6 months)',
    'Short-term (6-12 months)',
    'Medium-term (1-2 years)',
    'Long-term (2+ years)',
    'Planning Phase'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="project-discussion" className="py-20 bg-pec-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />
      <div className="absolute inset-0 bg-blueprint bg-blueprint opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section header with visual elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Decorative elements */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-pec-copper"></div>
              <div className="w-3 h-3 bg-pec-copper rounded-full animate-pulse"></div>
              <div className="w-12 h-0.5 bg-pec-copper"></div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            Ready to Execute Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pec-copper to-pec-rust">Project?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Let&apos;s discuss how PEC&apos;s technology-enabled EPC solutions can deliver predictable outcomes 
            for your complex oil, gas, and petrochemical projects.
          </p>
          
          {/* Subtle stats */}
          <div className="flex justify-center gap-12 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-pec-copper mb-1">500+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pec-copper mb-1">25+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pec-copper mb-1">87%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">On-Time</div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Card - Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="bg-gradient-to-br from-pec-copper/10 to-pec-rust/10 backdrop-blur-md rounded-2xl p-8 border border-pec-copper/20 shadow-2xl h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-pec-copper rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Quick Contact</h3>
                  <p className="text-pec-copper text-sm">24-hour response</p>
                </div>
              </div>
              
              {/* Email Contact */}
              <div className="flex-1">
                <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white text-lg mb-1">Send Email</div>
                      <div className="text-gray-300">info@pecengg.com</div>
                      <div className="text-pec-copper text-sm mt-2">✓ Guaranteed response</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 space-y-3">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-pec-copper" />
                  Quick Actions
                </h4>
                <button className="w-full flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-pec-copper/30 group">
                  <div className="flex items-center gap-3">
                    <Upload className="w-5 h-5 text-pec-copper" />
                    <span className="text-white">Upload Tender Document</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-pec-copper transition-colors" />
                </button>
                <button className="w-full flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-pec-copper/30 group">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-pec-copper" />
                    <span className="text-white">Share BOQ / Scope</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-pec-copper transition-colors" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Card - Project Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl border border-gray-100 h-full flex flex-col">
              {!isSubmitted ? (
                <>
                  {/* Form Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-pec-copper rounded-full flex items-center justify-center">
                      <Edit className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-pec-dark">Project Details</h3>
                      <p className="text-pec-copper text-sm">Get expert consultation</p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="flex-1 space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-pec-navy mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-pec-navy mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent transition-all duration-300"
                          placeholder="Company name"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-pec-navy mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent transition-all duration-300"
                          placeholder="your.email@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-pec-navy mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent transition-all duration-300"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-pec-navy mb-2">
                          Project Type *
                        </label>
                        <select
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-pec-navy mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map(timeline => (
                            <option key={timeline} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-pec-navy mb-2">
                        Project Requirements *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent transition-all duration-300"
                        placeholder="Describe your project requirements..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pec-copper to-pec-rust hover:from-pec-rust hover:to-pec-copper text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-pec-copper/25"
                    >
                      <span className="flex items-center justify-center gap-3">
                        <Send className="w-5 h-5" />
                        Send Project Inquiry
                      </span>
                    </button>
                  </form>
                </> 
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-pec-dark mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our project team will review your requirements and contact you within 24 hours 
                    to discuss how we can help execute your project successfully.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-pec-copper hover:bg-pec-rust text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-colors"
                  >
                    Submit Another Request
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom assurance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-pec-copper" />
              <span>24-hour Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-pec-copper" />
              <span>Confidential Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-pec-copper" />
              <span>No-Obligation Discussion</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
