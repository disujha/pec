export default function Careers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/careers-hero.png)' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Careers at PEC
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Join our team of experts and contribute to shaping the future of the oil and gas industry.
            </p>
            <a href="/contact" className="inline-block bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-opacity-80 transition-colors">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Join Our Team</h2>
            <p className="text-lg text-gray-600 mb-4">
              For direct inquiries about career opportunities, please contact us at:
            </p>
            <div className="inline-flex items-center bg-accent/20 px-6 py-3 rounded-lg">
              <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-primary font-semibold">career@pecengg.com</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">Why Join PEC?</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Competitive compensation and benefits</li>
                <li>Opportunities for professional growth</li>
                <li>Work on cutting-edge projects globally</li>
                <li>Commitment to work-life balance</li>
                <li>Inclusive and diverse workplace</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">Current Openings</h2>
              <div className="space-y-4">
                <div className="bg-secondary p-4 rounded-lg">
                  <h3 className="font-semibold text-primary">Site Supervisor</h3>
                  <p className="text-sm text-gray-700">Experience: 3+ years | Location: Haldia</p>
                  <button className="mt-2 bg-accent text-primary px-4 py-2 rounded text-sm font-semibold hover:bg-opacity-80 transition-colors">
                    Apply Now
                  </button>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <h3 className="font-semibold text-primary">Safety Officer</h3>
                  <p className="text-sm text-gray-700">Experience: 2+ years | Location: Haldia</p>
                  <button className="mt-2 bg-accent text-primary px-4 py-2 rounded text-sm font-semibold hover:bg-opacity-80 transition-colors">
                    Apply Now
                  </button>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <h3 className="font-semibold text-primary">Site Incharge</h3>
                  <p className="text-sm text-gray-700">Experience: 5+ years | Location: Haldia</p>
                  <button className="mt-2 bg-accent text-primary px-4 py-2 rounded text-sm font-semibold hover:bg-opacity-80 transition-colors">
                    Apply Now
                  </button>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <h3 className="font-semibold text-primary">Senior Petroleum Engineer</h3>
                  <p className="text-sm text-gray-700">Experience: 5+ years | Location: Mumbai</p>
                  <button className="mt-2 bg-accent text-primary px-4 py-2 rounded text-sm font-semibold hover:bg-opacity-80 transition-colors">
                    Apply Now
                  </button>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <h3 className="font-semibold text-primary">Project Manager</h3>
                  <p className="text-sm text-gray-700">Experience: 7+ years | Location: Delhi</p>
                  <button className="mt-2 bg-accent text-primary px-4 py-2 rounded text-sm font-semibold hover:bg-opacity-80 transition-colors">
                    Apply Now
                  </button>
                </div>
                <div className="bg-secondary p-4 rounded-lg">
                  <h3 className="font-semibold text-primary">HSE Specialist</h3>
                  <p className="text-sm text-gray-700">Experience: 3+ years | Location: Chennai</p>
                  <button className="mt-2 bg-accent text-primary px-4 py-2 rounded text-sm font-semibold hover:bg-opacity-80 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Upload Your Resume</h2>
              <p className="text-xl text-gray-600">
                Can&apos;t find a suitable position? Upload your resume and we&apos;ll contact you when relevant opportunities arise.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" id="firstName" name="firstName" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" id="lastName" name="lastName" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">Position of Interest</label>
                  <select id="position" name="position" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                    <option value="">Select a position</option>
                    <option value="site-supervisor">Site Supervisor</option>
                    <option value="safety-officer">Safety Officer</option>
                    <option value="site-incharge">Site Incharge</option>
                    <option value="senior-petroleum-engineer">Senior Petroleum Engineer</option>
                    <option value="project-manager">Project Manager</option>
                    <option value="hse-specialist">HSE Specialist</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                  <input type="number" id="experience" name="experience" min="0" max="50" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">Upload Resume (PDF/DOC, Max 5MB)</label>
                  <div className="relative">
                    <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" placeholder="Tell us why you're interested in joining PEC..."></textarea>
                </div>

                <div className="flex items-center">
                  <input type="checkbox" id="terms" name="terms" className="mr-2" required />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the terms and conditions and consent to PEC processing my personal data for recruitment purposes.
                  </label>
                </div>

                <button type="submit" className="w-full bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
