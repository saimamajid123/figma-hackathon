import Image from "next/image";

// components/ProjectGallery.js
export default function ProjectGallery() {
    return (
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Our Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 text-white flex items-center justify-center h-64">
              <div className="text-center">
                <h3 className="text-xl font-bold">Sample Project</h3>
                <button className="mt-2 px-4 py-2 bg-gray-900 rounded">View More</button>
              </div>
            </div>
            <div className="bg-gray-300 h-64 flex items-center justify-center">
                <Image src='/image 15 (1).png'  alt='' width={300} height={300} className="w-full h-full object-cover"/>
            </div>
            <div className="bg-gray-300 h-64 flex items-center justify-center">
            <Image src='/image 16 (1).png'  alt='' width={300} height={300} className="w-full h-full object-cover"/>

            </div>
            <div className="bg-gray-300 h-64 flex items-center justify-center">
            <Image src='/image 17 (1).png'  alt='' width={300} height={300} className="w-full h-full object-cover"/>

            </div>
            <div className="bg-gray-300 h-64 flex items-center justify-center">
            <Image src='/image 18 (1).png'  alt='' width={300} height={300} className="w-full h-full object-cover"/>

            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 bg-gray-900 text-white rounded">All Projects &rarr;</button>
          </div>
        </div>
      </section>
    );
  }
  