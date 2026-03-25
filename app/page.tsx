'use client'

import Hero from '@/components/Hero'
import ExecutionSection from '@/components/ExecutionSection'
import IndustryFocus from '@/components/IndustryFocus'
import ExecutionIntelligence from '@/components/ExecutionIntelligence'
import CaseStudies from '@/components/CaseStudies'
import WhyPEC from '@/components/WhyPEC'
import ProjectCTA from '@/components/ProjectCTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* How PEC Delivers with Precision */}
      <ExecutionSection />
      
      {/* Industry Focus */}
      <IndustryFocus />
      
      {/* Execution Intelligence Dashboard */}
      <ExecutionIntelligence />
      
      {/* Case Studies */}
      <CaseStudies />
      
      {/* Why PEC */}
      <WhyPEC />
      
      {/* Project CTA */}
      <ProjectCTA />
    </div>
  )
}
