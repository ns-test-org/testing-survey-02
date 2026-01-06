export default function Landing() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-6">
      <main className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Hello World
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Welcome to your new landing page. Start building something amazing!
        </p>
        
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
          Get Started
        </button>
      </main>
    </div>
  );
}

