import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-100 text-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/pec-logo.png" 
              alt="PEC Logo" 
              width={50} 
              height={50}
              className="object-contain"
            />
            <div>
              <div className="text-xl font-bold text-gray-900">PEC</div>
              <div className="text-xs text-gray-600">Petrochemical Engineering & Construction</div>
            </div>
          </Link>
        </div>
        <nav className="hidden lg:flex space-x-8">
          <Link href="/" className="text-gray-800 hover:text-primary transition-colors font-medium">Home</Link>
          <Link href="/about" className="text-gray-800 hover:text-primary transition-colors font-medium">About Us</Link>
          <Link href="/services" className="text-gray-800 hover:text-primary transition-colors font-medium">Services</Link>
          <Link href="/projects" className="text-gray-800 hover:text-primary transition-colors font-medium">Projects</Link>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <Link 
            href="/contact" 
            className="bg-accent text-gray-900 px-6 py-2 font-semibold hover:bg-accent/90 transition-colors"
          >
            Get Quote
          </Link>
        </div>
        <div className="lg:hidden">
          <button className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
