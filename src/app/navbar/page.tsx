import Image from 'next/image'


export default function Navbar() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="flex items-center justify-between p-8">
        <h1 className="text-xl font-bold">LOGO</h1>
        <nav className="space-x-8">
          <a href="#" className="text-gray-700 hover:text-black">Main</a>
          <a href="#" className="text-gray-700 hover:text-black">Gallery</a>
          <a href="#" className="text-gray-700 hover:text-black">Projects</a>
          <a href="#" className="text-gray-700 hover:text-black">Certifications</a>
          <a href="#" className="text-gray-700 hover:text-black">Contacts</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center h-screen">
        <div className="grid grid-cols-2 gap-4 w-4/5">
          {/* Left Side - Text */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="text-3xl font-light text-gray-600">Project</h2>
              <h3 className="text-5xl font-semibold">Lorum</h3>
            </div>
            <div className="flex space-x-4">
              <button className="p-2 border border-gray-300 rounded hover:bg-gray-200">←</button>
              <button className="p-2 border border-gray-300 rounded hover:bg-gray-200">→</button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold">01</span>
              <span className="text-gray-400">/</span>
              <span className="text-lg text-gray-400">02</span>
            </div>
            <a href="#" className="text-lg font-semibold text-blue-600 hover:underline">
              View Project →
            </a>
          </div>

          {/* Right Side - Image Placeholder */}
          <div className="relative w-full h-[500px] bg-gray-200">
          <Image src="/rectangle.png" alt="Project Image" layout="fill" objectFit="cover" />

          </div>
        </div>
      </main>
    </div>
  )
}
