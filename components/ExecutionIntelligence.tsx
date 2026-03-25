'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Activity, AlertTriangle, TrendingUp, Clock, Package, Users, Target } from 'lucide-react'

export default function ExecutionIntelligence() {
  const [activeMetric, setActiveMetric] = useState('progress')
  const [animatedValues, setAnimatedValues] = useState({
    progress: 0,
    efficiency: 0,
    safety: 0,
    budget: 0
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        progress: 78,
        efficiency: 92,
        safety: 98,
        budget: 85
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const metrics = [
    {
      id: 'progress',
      title: 'Project Progress',
      value: animatedValues.progress,
      unit: '%',
      icon: BarChart3,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      trend: '+12%',
      status: 'On Track'
    },
    {
      id: 'efficiency',
      title: 'Execution Efficiency',
      value: animatedValues.efficiency,
      unit: '%',
      icon: Activity,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      trend: '+5%',
      status: 'Excellent'
    },
    {
      id: 'safety',
      title: 'Safety Score',
      value: animatedValues.safety,
      unit: '%',
      icon: AlertTriangle,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      trend: '0%',
      status: 'Compliant'
    },
    {
      id: 'budget',
      title: 'Budget Performance',
      value: animatedValues.budget,
      unit: '%',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      trend: '+8%',
      status: 'Under Budget'
    }
  ]

  const alerts = [
    {
      type: 'warning',
      title: 'Equipment Delivery Delay',
      description: 'Compressor units delayed by 5 days - mitigation in progress',
      time: '2 hours ago'
    },
    {
      type: 'info',
      title: 'Milestone Achieved',
      description: 'Foundation work completed ahead of schedule',
      time: '4 hours ago'
    },
    {
      type: 'success',
      title: 'Safety Audit Passed',
      description: 'Quarterly safety inspection completed with no findings',
      time: '1 day ago'
    }
  ]

  const currentMetric = metrics.find(m => m.id === activeMetric) || metrics[0]

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
            Execution <span className="text-pec-copper">Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our systems track project progress, procurement timelines, and execution risks in real time — 
            enabling proactive decision-making and predictable outcomes.
          </p>
        </motion.div>

        {/* Main dashboard */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Metrics cards */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-pec-dark mb-6">Live Project Metrics</h3>
              
              {/* Metric selector */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {metrics.map((metric) => (
                  <button
                    key={metric.id}
                    onClick={() => setActiveMetric(metric.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      activeMetric === metric.id
                        ? `${metric.bgColor} border-current ${metric.color}`
                        : 'bg-white border-gray-200 hover:border-pec-copper'
                    }`}
                  >
                    <metric.icon className={`w-6 h-6 mb-2 ${activeMetric === metric.id ? metric.color : 'text-gray-600'}`} />
                    <div className="text-sm font-medium text-pec-navy">{metric.title}</div>
                    <div className={`text-lg font-bold ${activeMetric === metric.id ? metric.color : 'text-pec-navy'}`}>
                      {metric.value}{metric.unit}
                    </div>
                  </button>
                ))}
              </div>

              {/* Detailed metric view */}
              <motion.div
                key={activeMetric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`${currentMetric.bgColor} rounded-lg p-6`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <currentMetric.icon className={`w-8 h-8 ${currentMetric.color}`} />
                    <div>
                      <h4 className="text-lg font-bold text-pec-dark">{currentMetric.title}</h4>
                      <p className="text-sm text-gray-600">Current Status: <span className="font-medium">{currentMetric.status}</span></p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold ${currentMetric.color}`}>
                      {currentMetric.value}{currentMetric.unit}
                    </div>
                    <div className="text-sm text-green-600 font-medium">{currentMetric.trend}</div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full ${currentMetric.color === 'text-blue-600' ? 'bg-blue-600' : currentMetric.color === 'text-green-600' ? 'bg-green-600' : currentMetric.color === 'text-amber-600' ? 'bg-amber-600' : 'bg-purple-600'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${currentMetric.value}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </div>

            {/* KPI Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-pec-copper" />
                  <span className="text-sm font-medium text-gray-600">Schedule Performance</span>
                </div>
                <div className="text-2xl font-bold text-pec-dark">94%</div>
                <div className="text-xs text-green-600">On Track</div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <Package className="w-5 h-5 text-pec-copper" />
                  <span className="text-sm font-medium text-gray-600">Procurement Status</span>
                </div>
                <div className="text-2xl font-bold text-pec-dark">87%</div>
                <div className="text-xs text-amber-600">Minor Delays</div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-pec-copper" />
                  <span className="text-sm font-medium text-gray-600">Resource Utilization</span>
                </div>
                <div className="text-2xl font-bold text-pec-dark">91%</div>
                <div className="text-xs text-green-600">Optimal</div>
              </div>
            </div>
          </div>

          {/* Alerts sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <h4 className="text-lg font-bold text-pec-dark mb-4">Real-time Alerts</h4>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-3 rounded-lg border ${
                      alert.type === 'warning' ? 'bg-amber-50 border-amber-200' :
                      alert.type === 'success' ? 'bg-green-50 border-green-200' :
                      'bg-blue-50 border-blue-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        alert.type === 'warning' ? 'bg-amber-500' :
                        alert.type === 'success' ? 'bg-green-500' :
                        'bg-blue-500'
                      }`} />
                      <div className="flex-1">
                        <h5 className="font-medium text-pec-dark text-sm">{alert.title}</h5>
                        <p className="text-xs text-gray-600 mt-1">{alert.description}</p>
                        <p className="text-xs text-gray-500 mt-2">{alert.time}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-pec-dark rounded-xl p-6 text-white"
            >
              <h4 className="text-lg font-bold mb-4">AI Insights</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-pec-copper mt-1" />
                  <div>
                    <p className="text-sm font-medium">Risk Prediction</p>
                    <p className="text-xs text-gray-400">87% probability of on-time completion</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-pec-copper mt-1" />
                  <div>
                    <p className="text-sm font-medium">Efficiency Recommendation</p>
                    <p className="text-xs text-gray-400">Optimize resource allocation for 12% improvement</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
