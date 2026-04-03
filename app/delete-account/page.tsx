'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Trash2, Mail, Phone, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function DeleteAccountPage() {
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validate confirmation
    if (confirmation !== 'DELETE MY ACCOUNT') {
      setError('Please type "DELETE MY ACCOUNT" exactly as shown to confirm')
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call to delete account
      const response = await fetch('/api/delete-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          reason,
          confirmation,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to delete account')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError('Failed to process deletion request. Please contact support.')
    } finally {
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
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Account Deletion Requested</h1>
              <p className="text-gray-600 mb-6">
                Your account deletion request has been received. You will receive a confirmation email shortly.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
                <ul className="text-sm text-blue-800 space-y-1 text-left">
                  <li>• Your account will be permanently deleted within 30 days</li>
                  <li>• All your data will be removed from our systems</li>
                  <li>• You will receive a final confirmation when complete</li>
                  <li>• This action cannot be undone</li>
                </ul>
              </div>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-pec-copper text-white rounded-lg hover:bg-pec-rust transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Home
              </Link>
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
          {/* Warning Header */}
          <div className="bg-red-50 border-b border-red-200 p-6">
            <div className="flex items-center">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-red-900">Delete Account</h1>
                <p className="text-red-700">This action cannot be undone</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Information Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Before you delete your account</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-yellow-900 mb-2">Important Information:</h3>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• All your data will be permanently deleted</li>
                  <li>• Project data and history will be lost</li>
                  <li>• Team access and permissions will be revoked</li>
                  <li>• You cannot recover your account after deletion</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Data that will be deleted:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Personal profile information</li>
                  <li>• Project assignments and history</li>
                  <li>• Attendance records and time logs</li>
                  <li>• Messages and communications</li>
                  <li>• Uploaded files and documents</li>
                  <li>• App settings and preferences</li>
                </ul>
              </div>
            </div>

            {/* Deletion Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for deletion (optional)
                </label>
                <textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent"
                  placeholder="Please tell us why you're deleting your account..."
                />
              </div>

              <div>
                <label htmlFor="confirmation" className="block text-sm font-medium text-gray-700 mb-2">
                  Type "DELETE MY ACCOUNT" to confirm *
                </label>
                <input
                  type="text"
                  id="confirmation"
                  value={confirmation}
                  onChange={(e) => setConfirmation(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pec-copper focus:border-transparent"
                  placeholder="DELETE MY ACCOUNT"
                />
                <p className="text-xs text-gray-500 mt-1">
                  This helps us prevent accidental account deletions
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
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
                    <span>Processing...</span>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete My Account
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Contact Support */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            If you're having trouble with your account or have questions, our support team is here to help.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-pec-copper mr-3" />
              <div>
                <p className="font-medium text-gray-900">Email Support</p>
                <p className="text-sm text-gray-600">support@pecengg.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-pec-copper mr-3" />
              <div>
                <p className="font-medium text-gray-900">Phone Support</p>
                <p className="text-sm text-gray-600">+91-33-1234-5678</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
