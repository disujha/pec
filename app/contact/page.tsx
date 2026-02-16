export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-primary">Head Office</h3>
              <p className="text-gray-700">123 Petroleum Plaza, Mumbai, Maharashtra 400001, India</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">Phone</h3>
              <p className="text-gray-700">022 6565 6222</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">Email</h3>
              <p className="text-gray-700">info@pecengg.com</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
            </div>
            <button type="submit" className="bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
