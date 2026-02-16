export default function Careers() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">Careers at PEC</h1>
      <div className="text-center mb-16">
        <p className="text-lg text-gray-700 mb-8">
          Join our team of experts and contribute to shaping the future of the oil and gas industry.
        </p>
        <a href="/contact" className="bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors">
          Apply Now
        </a>
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
              <h3 className="font-semibold text-primary">Senior Petroleum Engineer</h3>
              <p className="text-sm text-gray-700">Experience: 5+ years | Location: Mumbai</p>
            </div>
            <div className="bg-secondary p-4 rounded-lg">
              <h3 className="font-semibold text-primary">Project Manager</h3>
              <p className="text-sm text-gray-700">Experience: 7+ years | Location: Delhi</p>
            </div>
            <div className="bg-secondary p-4 rounded-lg">
              <h3 className="font-semibold text-primary">HSE Specialist</h3>
              <p className="text-sm text-gray-700">Experience: 3+ years | Location: Chennai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
