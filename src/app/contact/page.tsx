import Image from "next/image";

// components/ContactForm.js
export default function ContactForm() {
    return (
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          
          {/* Left Side - Contact Form */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl font-semibold text-gray-700 mb-6">Contact Us</h2>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                placeholder="Interested In"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded h-32"
                required
              ></textarea>
              
              <button className="px-6 py-2 bg-gray-900 text-white rounded mt-4">
                Send Email &rarr;
              </button>
            </form>
          </div>
  
          {/* Right Side - Image */}
          <div className="md:w-1/2 w-full mt-6 md:mt-0 md:pl-10">
            <Image src="/image 12.png" alt="Contact Us" width={400} height={400} className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </section>
    );
  }
  