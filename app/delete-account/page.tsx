'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Trash2, Mail, Phone, ArrowLeft, Clock, FileText, Shield } from 'lucide-react'
import Link from 'next/link'

export default function DeleteAccountPage() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('Account Deletion Request')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Please provide your registered email address')
      return
    }

    setIsSubmitting(true)

    try {
      // Create email content
      const emailContent = `
Account Deletion Request
========================

App: epcX – Field Data & AI Insight
Developer: reThela Technology Pvt Ltd

User Information:
- Email: ${email}

Additional Message:
${message || 'No additional message provided'}

Request Type: Permanent Account Deletion
Date: ${new Date().toLocaleString()}

This request is submitted via the official deletion page and should be processed according to the stated timeline.
      `.trim()

      // Create mailto link
      const mailtoLink = `mailto:support@rethela.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`
      
      // Open email client
      window.location.href = mailtoLink
      
      // Show success state after a short delay
      setTimeout(() => {
        setIsSubmitted(true)
        setIsSubmitting(false)
      }, 1000)

    } catch (err) {
      setError('Failed to open email client. Please manually email support@rethela.com')
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Deletion Request Sent</h1>
              <p className="text-gray-600 mb-6">
                Your account deletion request has been initiated. Please check your email to ensure it was sent successfully.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  What happens next?
                </h3>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li>• Your email has been opened with pre-filled deletion request</li>
                  <li>• Send the email to complete your deletion request</li>
                  <li>• Requests are processed within 7 working days</li>
                  <li>• Your account will be permanently deleted</li>
                  <li>• All associated data will be removed from our systems</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-yellow-900 mb-2 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Important Reminder
                </h3>
                <p className="text-sm text-yellow-800">
                  Make sure to actually send the email that was opened in your email client. 
                  The deletion is not complete until the email is sent to support@rethela.com
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = 'mailto:support@rethela.com?subject=Account%20Deletion%20Request'}
                  className="inline-flex items-center px-6 py-3 bg-pec-copper text-white rounded-lg hover:bg-pec-rust transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Open Email Again
                </button>
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Return to Home
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* App Header */}
          <div className="bg-gradient-to-r from-pec-copper to-pec-rust text-white p-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-2">Account & Data Deletion</h1>
              <p className="text-pec-copper/90 font-medium">epcX – Field Data & AI Insight</p>
              <p className="text-sm text-pec-copper/80 mt-1">by reThela Technology Pvt Ltd</p>
            </div>
          </div>

          <div className="p-6">
            {/* Main Instructions */}
            <div className="mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  How to Request Deletion
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email us at:</p>
                      <p className="text-pec-copper font-semibold">support@rethela.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Subject:</p>
                      <p className="text-gray-700">Account Deletion Request</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Include your registered:</p>
                      <p className="text-gray-700">Email address</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Section */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-semibold text-amber-900 mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  What Happens After Request
                </h2>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Trash2 className="w-3 h-3 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Permanent Account Deletion</p>
                      <p className="text-sm text-gray-600">Your account will be permanently deleted</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <FileText className="w-3 h-3 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Complete Data Removal</p>
                      <p className="text-sm text-gray-600">All associated data including uploaded files, reports, and activity logs will be removed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Section */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Deletion Timeline
                </h2>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold">7</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Working Days</p>
                    <p className="text-sm text-gray-600">Requests are processed within 7 working days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Request Form */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Deletion Request</h3>
              <p className="text-sm text-gray-600 mb-4">
                Fill out the form below to automatically generate your deletion request email:
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Registered Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent"
                    placeholder="Any additional information..."
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-sm text-red-800">{error}</p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Cancel and keep my account
                  </Link>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span>Opening Email...</span>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        Send Deletion Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Support */}
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about the deletion process or encounter any issues, our support team is here to help.
              </p>
              <div className="flex items-center justify-center">
                <Mail className="w-5 h-5 text-pec-copper mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Email Support</p>
                  <a 
                    href="mailto:support@rethela.com" 
                    className="text-pec-copper hover:underline"
                  >
                    support@rethela.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
