export default function Clients() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">Clients & Partners</h1>
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-primary mb-8 text-center">Our Valued Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-secondary p-6 rounded-lg text-center">
            <h3 className="font-semibold text-primary">ONGC</h3>
            <p className="text-sm text-gray-700">Oil and Natural Gas Corporation</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg text-center">
            <h3 className="font-semibold text-primary">Reliance Industries</h3>
            <p className="text-sm text-gray-700">Integrated Energy Company</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg text-center">
            <h3 className="font-semibold text-primary">BP</h3>
            <p className="text-sm text-gray-700">British Petroleum</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg text-center">
            <h3 className="font-semibold text-primary">Shell</h3>
            <p className="text-sm text-gray-700">Royal Dutch Shell</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-primary mb-8 text-center">Strategic Partnerships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-4">Technology Partners</h3>
            <p className="text-gray-700">
              Collaborating with leading technology firms to integrate cutting-edge solutions in our projects.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-4">Academic Institutions</h3>
            <p className="text-gray-700">
              Partnering with universities for research, development, and talent acquisition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
