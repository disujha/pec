'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, TrendingUp, Clock, Zap, Shield, ArrowRight } from 'lucide-react'

export default function WhyPEC() {
  const comparisonData = [
    {
      feature: "Project Speed",
      pec: {
        value: "30-40% Faster",
        description: "AI-optimized planning and execution",
        icon: Zap,
        color: "text-green-600"
      },
      traditional: {
        value: "Standard Timeline",
        description: "Traditional EPC processes",
        icon: Clock,
        color: "text-gray-500"
      }
    },
    {
      feature: "Flexibility",
      pec: {
        value: "High Adaptability",
        description: "Agile methodology with real-time adjustments",
        icon: TrendingUp,
        color: "text-green-600"
      },
      traditional: {
        value: "Rigid Processes",
        description: "Fixed scope and change orders",
        icon: XCircle,
        color: "text-gray-500"
      }
    },
    {
      feature: "Technology",
      pec: {
        value: "AI-Enabled",
        description: "Digital twins, predictive analytics, IoT monitoring",
        icon: Zap,
        color: "text-green-600"
      },
      traditional: {
        value: "Manual Systems",
        description: "Traditional project management tools",
        icon: XCircle,
        color: "text-gray-500"
      }
    },
    {
      feature: "Cost Efficiency",
      pec: {
        value: "15-20% Savings",
        description: "Optimized resource allocation and procurement",
        icon: TrendingUp,
        color: "text-green-600"
      },
      traditional: {
        value: "Industry Standard",
        description: "Traditional cost structures",
        icon: Clock,
        color: "text-gray-500"
      }
    },
    {
      feature: "Risk Management",
      pec: {
        value: "Predictive",
        description: "AI-driven risk identification and mitigation",
        icon: Shield,
        color: "text-green-600"
      },
      traditional: {
        value: "Reactive",
        description: "Issue-based problem solving",
        icon: XCircle,
        color: "text-gray-500"
      }
    },
    {
      feature: "Execution Quality",
      pec: {
        value: "99.8% Compliance",
        description: "Automated quality control systems",
        icon: CheckCircle2,
        color: "text-green-600"
      },
      traditional: {
        value: "95-97% Compliance",
        description: "Manual inspection processes",
        icon: Clock,
        color: "text-gray-500"
      }
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
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
            Why <span className="text-pec-copper">PEC</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare PEC&apos;s technology-enabled execution approach against traditional EPC contractors 
            to understand the competitive advantage we deliver.
          </p>
        </motion.div>

        {/* Comparison table */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Feature column */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-pec-dark mb-4">Capability</h3>
            </div>
            
            {/* PEC column */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-pec-copper text-white px-4 py-2 rounded-full mb-4">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-semibold">PEC Approach</span>
              </div>
            </div>
            
            {/* Traditional column */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-full mb-4">
                <Clock className="w-4 h-4" />
                <span className="font-semibold">Traditional EPC</span>
              </div>
            </div>
          </div>

          {/* Comparison rows */}
          <div className="space-y-4">
            {comparisonData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Feature name */}
                  <div>
                    <h4 className="font-bold text-pec-dark text-lg">{item.feature}</h4>
                  </div>
                  
                  {/* PEC approach */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <item.pec.icon className={`w-5 h-5 ${item.pec.color}`} />
                      <span className={`font-bold ${item.pec.color}`}>{item.pec.value}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.pec.description}</p>
                  </div>
                  
                  {/* Traditional approach */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <item.traditional.icon className={`w-5 h-5 ${item.traditional.color}`} />
                      <span className={`font-bold ${item.traditional.color}`}>{item.traditional.value}</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.traditional.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="bg-pec-dark rounded-xl p-6 text-white text-center">
            <div className="text-4xl font-bold text-pec-copper mb-2">30%</div>
            <div className="text-lg font-semibold mb-2">Faster Delivery</div>
            <p className="text-gray-300 text-sm">AI-optimized project execution reduces timeline by 30% on average</p>
          </div>
          
          <div className="bg-pec-dark rounded-xl p-6 text-white text-center">
            <div className="text-4xl font-bold text-pec-copper mb-2">20%</div>
            <div className="text-lg font-semibold mb-2">Cost Savings</div>
            <p className="text-gray-300 text-sm">Technology-driven procurement and resource optimization</p>
          </div>
          
          <div className="bg-pec-dark rounded-xl p-6 text-white text-center">
            <div className="text-4xl font-bold text-pec-copper mb-2">98%</div>
            <div className="text-lg font-semibold mb-2">Client Satisfaction</div>
            <p className="text-gray-300 text-sm">Consistent delivery excellence across 500+ projects</p>
          </div>
        </motion.div>

        {/* Client testimonial style section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-pec-copper rounded-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            The PEC Difference: Technology + Execution Excellence
          </h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            While traditional EPC contractors rely on manual processes and experience-based decisions, 
            PEC combines 25+ years of execution expertise with cutting-edge AI and digital technologies. 
            This hybrid approach delivers predictable outcomes, reduced risk, and superior value for 
            complex oil, gas, and petrochemical projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pec-copper hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-md inline-flex items-center gap-2 group transition-colors">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-pec-copper px-8 py-4 text-lg font-semibold rounded-md inline-flex items-center gap-2 group transition-colors">
              Download Capability Statement
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
