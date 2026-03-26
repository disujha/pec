'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Award, Calendar, MapPin, Mail, ExternalLink, ChevronRight } from 'lucide-react';

export default function About() {
  const leadership = [
    {
      id: 1,
      name: "Biswajit Panja",
      role: "Chief Executive Officer",
      image: "/panja.png",
      experience: "25+ years",
      description: "Visionary leader with 25+ years of EPC project experience across the globe. Has successfully delivered complex petrochemical projects in Middle East, Africa, and Southeast Asia, establishing PEC as a trusted name in international engineering. Known for strategic planning, client relationship management, and excellence in large-scale project execution.",
      expertise: ["Strategic Planning", "Business Development", "Global Operations", "EPC Project Execution", "International Markets"],
      linkedin: "",
      email: "bpanja@pecengg.com"
    },
    {
      id: 2,
      name: "Sunil Jha",
      role: "Chief Technology Officer", 
      image: "/sunil.png",
      experience: "25+ years",
      description: "Seasoned entrepreneur and technology expert with over 25 years of diverse experience spanning retail, real estate, technology, and EPC project execution. Brings unique multi-sector perspective to drive technological innovation and process optimization at PEC. Successfully led technology initiatives across multiple industries before joining PEC's leadership team.",
      expertise: ["Chemical Engineering", "Process Optimization", "Technology Strategy", "Digital Transformation", "Multi-Sector Experience", "Entrepreneurship"],
      linkedin: "https://www.linkedin.com/in/skumar2018/",
      email: "sunil@pecengg.com"
    }
  ];

  const milestones = [
    {
      year: "1998",
      title: "Company Founded",
      description: "Started as engineering consultancy in Mumbai",
      icon: Calendar
    },
    {
      year: "2005",
      title: "First International Project", 
      description: "Expanded to Middle East market",
      icon: Target
    },
    {
      year: "2010",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2008 certification",
      icon: Award
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "Opened offices in Africa & Southeast Asia",
      icon: MapPin
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched digital engineering platform",
      icon: Eye
    }
  ];

  const values = [
    {
      title: "Our Mission",
      description: "To deliver world-class petrochemical engineering and construction services that drive efficiency, safety, and sustainability in the energy sector while creating value for our clients and stakeholders.",
      icon: Target
    },
    {
      title: "Our Vision", 
      description: "To be the leading provider of integrated petrochemical engineering solutions globally, recognized for innovation, environmental responsibility, and exceptional project delivery.",
      icon: Eye
    },
    {
      title: "Our Values",
      description: "Safety First, Excellence in Delivery, Innovation & Technology, Environmental Responsibility, Integrity & Transparency, Client Partnership.",
      icon: Users
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed", sublabel: "Across 15+ Countries" },
    { number: "25+", label: "Years Experience", sublabel: "Industry Leadership" },
    { number: "1000+", label: "Expert Professionals", sublabel: "Global Team" },
    { number: "$2B+", label: "Project Value", sublabel: "Cumulative" }
  ];

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System",
      icon: Award
    },
    {
      title: "ISO 14001:2015", 
      description: "Environmental Management",
      icon: Eye
    },
    {
      title: "ISO 45001:2018",
      description: "Occupational Health & Safety",
      icon: Users
    },
    {
      title: "API Q1",
      description: "Petroleum Industry Quality",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/about-hero.png)' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              About PEC
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Leading the future of petrochemical engineering and construction with 25+ years of excellence and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { number: "500+", label: "Projects Completed", icon: Target },
                { number: "25+", label: "Years Experience", icon: Calendar },
                { number: "15+", label: "Countries Served", icon: MapPin },
                { number: "1000+", label: "Expert Professionals", icon: Users }
              ].map((stat, index) => (
                <div key={index} className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <stat.icon className="w-4 h-4 mr-2" />
                  <span>{stat.label}: <strong>{stat.number}</strong></span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small consultancy to a global engineering powerhouse
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  Founded in 1998, PEC Petrochemical Engineering & Construction has grown from a small engineering consultancy to a leading global provider of petrochemical engineering and construction services.
                </p>
                <p className="text-lg">
                  Our journey began with a vision to revolutionize the petrochemical industry through innovative engineering solutions, uncompromising safety standards, and sustainable practices.
                </p>
                <p className="text-lg">
                  Today, we serve major oil, gas, and petrochemical companies across four continents with headquarters in Mumbai, India.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-primary mb-6">Company Milestones</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">{milestone.year}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{milestone.title}</h4>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of expertise in petrochemical engineering and construction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
              >
                <div className="relative h-32 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="w-24 h-24 rounded-full border-4 border-white shadow-2xl overflow-hidden relative">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover rounded-full"
                        sizes="96px"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-primary mb-2">{leader.name}</h3>
                    <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full mb-4">
                      <p className="text-accent font-semibold text-sm">{leader.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-center">{leader.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      <span>Experience: <span className="text-primary font-semibold">{leader.experience}</span></span>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full text-xs font-medium border border-primary/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm border-t pt-6">
                    <div className="flex items-center space-x-4">
                      <a href={`mailto:${leader.email}`} className="flex items-center text-gray-500 hover:text-primary transition-colors group">
                        <Mail className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                        <span className="group-hover:text-primary">{leader.email}</span>
                      </a>
                      {leader.linkedin && (
                        <a href={leader.linkedin} className="flex items-center text-gray-500 hover:text-primary transition-colors group">
                          <ExternalLink className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                          <span className="group-hover:text-primary">LinkedIn</span>
                        </a>
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission, vision, and values guide everything we do and shape our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Key Achievements</h2>
            <p className="text-xl text-white max-w-3xl mx-auto opacity-90">
              Our track record speaks for itself with consistent delivery of complex projects and industry recognition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-colors duration-300">
                  <div className="text-4xl font-bold text-accent mb-2">{achievement.number}</div>
                  <div className="text-white font-medium">{achievement.label}</div>
                  <div className="text-sm text-white mt-2 opacity-90">{achievement.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Certifications & Awards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is recognized through various certifications and industry awards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <cert.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
