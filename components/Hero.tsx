'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, BarChart3, Cpu, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pec-dark pt-24 pb-16">
      {/* Background with industrial overlay */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 animate-grid-move" />
        
        {/* Blueprint pattern */}
        <div className="absolute inset-0 bg-blueprint bg-blueprint opacity-10" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pec-dark via-pec-navy to-pec-dark opacity-90" />
        
        {/* Animated pipeline lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pipeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d97706" stopOpacity="0" />
              <stop offset="50%" stopColor="#d97706" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Horizontal pipeline */}
          <motion.line
            x1="0" y1="30%" x2="100%" y2="30%"
            stroke="url(#pipeline-gradient)"
            strokeWidth="2"
            animate={{ x1: [-100, 100] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Vertical pipeline */}
          <motion.line
            x1="70%" y1="0" x2="70%" y2="100%"
            stroke="url(#pipeline-gradient)"
            strokeWidth="2"
            animate={{ y1: [-100, 100] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Network nodes */}
          {[20, 40, 60, 80].map((x, i) => (
            <motion.circle
              key={i}
              cx={`${x}%`}
              cy="30%"
              r="4"
              fill="#d97706"
              className="animate-node-blink"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
          
          {[30, 50, 70].map((y, i) => (
            <motion.circle
              key={`v-${i}`}
              cx="70%"
              cy={`${y}%`}
              r="4"
              fill="#d97706"
              className="animate-node-blink"
              style={{ animationDelay: `${i * 0.7}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-pec-rust/20 border border-pec-rust/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm"
        >
          <div className="w-2 h-2 bg-pec-rust rounded-full animate-pulse"></div>
          <span className="text-pec-rust font-semibold text-sm tracking-wider">25+ YEARS ENGINEERING EXCELLENCE</span>
          <div className="w-2 h-2 bg-pec-rust rounded-full animate-pulse"></div>
        </motion.div>

        {/* Main Headline with Industrial Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bold mb-6"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-pec-rust/20 blur-xl transform rotate-1"></div>
            <div className="relative">
              <span className="block text-6xl md:text-8xl font-black text-white tracking-tight leading-none">
                ENGINEERING
              </span>
              <span className="block text-6xl md:text-8xl font-black text-pec-rust tracking-tight leading-none mt-2">
                EXECUTION
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-0.5 bg-pec-rust"></div>
            <span className="text-pec-copper font-bold text-xl tracking-widest">PEC</span>
            <div className="w-16 h-0.5 bg-pec-rust"></div>
          </div>
        </motion.h1>

        {/* Industrial Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light tracking-wide"
        >
          <span className="text-pec-copper font-semibold">AI-Enabled</span> EPC Solutions for 
          <span className="text-pec-copper font-semibold"> Oil, Gas & Petrochemical</span> Projects
        </motion.p>

        {/* Industrial CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <button className="group relative overflow-hidden bg-pec-rust text-white px-10 py-4 font-bold text-lg transition-all duration-300 hover:bg-pec-copper transform hover:scale-105 shadow-2xl hover:shadow-pec-rust/25">
            <span className="relative z-10 flex items-center gap-3">
              <span>START PROJECT</span>
              <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pec-copper to-pec-rust transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          
          <button className="group relative overflow-hidden border-2 border-pec-copper text-pec-copper px-10 py-4 font-bold text-lg transition-all duration-300 hover:bg-pec-copper hover:text-white transform hover:scale-105">
            <span className="relative z-10 flex items-center gap-3">
              <Play className="w-5 h-5" />
              <span>VIEW EXECUTION</span>
            </span>
            <div className="absolute inset-0 bg-pec-copper transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </motion.div>

        {/* Industrial Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "25+", label: "YEARS", sublabel: "EXPERIENCE" },
            { value: "500+", label: "PROJECTS", sublabel: "DELIVERED" },
            { value: "98%", label: "ON-TIME", sublabel: "DELIVERY" }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-pec-rust/10 transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-pec-navy/50 backdrop-blur-sm border border-pec-rust/30 rounded-lg p-6">
                <div className="text-4xl font-black text-pec-copper mb-2">{stat.value}</div>
                <div className="text-xs text-pec-rust font-bold tracking-wider">{stat.label}</div>
                <div className="text-xs text-gray-400 tracking-wide">{stat.sublabel}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [-10, 10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-20 h-20 bg-pec-copper/10 rounded-full backdrop-blur-sm border border-pec-copper/20 flex items-center justify-center"
      >
        <BarChart3 className="w-8 h-8 text-pec-copper" />
      </motion.div>

      <motion.div
        animate={{ y: [10, -10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-20 h-20 bg-pec-copper/10 rounded-full backdrop-blur-sm border border-pec-copper/20 flex items-center justify-center"
      >
        <Zap className="w-8 h-8 text-pec-copper" />
      </motion.div>
    </section>
  )
}
