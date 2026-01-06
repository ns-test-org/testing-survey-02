export default function Landing() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-6">
      <main className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight">
          Hello World
        </h1>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Welcome to your new landing page. This is where great things begin.
        </p>
        
        {/* Call to Action */}
        <div className="pt-4">
          <button className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}

