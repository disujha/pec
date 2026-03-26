'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Upload, FileText, Phone, Mail, Send, CheckCircle2, ArrowRight } from 'lucide-react'

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
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Execute Your <span className="text-pec-copper">Project?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let&apos;s discuss how PEC&apos;s technology-enabled EPC solutions can deliver predictable outcomes 
            for your complex oil, gas, and petrochemical projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              {/* Quick contact options */}
              <div className="space-y-4 mb-8">
                <a 
                  href="tel:+919876543210"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                >
                  <div className="w-12 h-12 bg-pec-copper rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Call Us</div>
                    <div className="text-gray-300">+91 98765 43210</div>
                  </div>
                </a>

                <a 
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">WhatsApp</div>
                    <span className="text-pec-navy">Chat with our team</span>
                  </div>
                </a>

                <a 
                  href="mailto:projects@pec.com"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-gray-300">projects@pec.com</div>
                  </div>
                </a>
              </div>

              {/* Document upload */}
              <div className="border-t border-white/20 pt-6">
                <h4 className="font-semibold text-white mb-4">Share Your Requirements</h4>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10 border-dashed">
                    <Upload className="w-5 h-5 text-pec-copper" />
                    <span className="text-white">Upload Tender Document</span>
                  </button>
                  <button className="w-full flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10 border-dashed">
                    <FileText className="w-5 h-5 text-pec-copper" />
                    <span className="text-white">Share BOQ / Scope</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl p-8">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-pec-dark mb-6">Discuss Your Project</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-pec-navy mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-pec-navy mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-pec-navy mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-pec-navy mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expected Timeline *
                      </label>
                      <select
                        name="timeline"
                        required
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map(timeline => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Details
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Briefly describe your project requirements..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-pec-copper hover:bg-pec-rust text-white py-3 px-6 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                    >
                      <Send className="w-5 h-5" />
                      Submit Project Request
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-pec-dark mb-4">
                    Thank You for Your Interest!
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
