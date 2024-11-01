import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";

// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Logo and Branding */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Digital Project</h2>
            </div>
  
            {/* Information Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Information</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Main</a></li>
                <li><a href="#" className="hover:underline">Gallery</a></li>
                <li><a href="#" className="hover:underline">Projects</a></li>
                <li><a href="#" className="hover:underline">Certifications</a></li>
                <li><a href="#" className="hover:underline">Contacts</a></li>
              </ul>
            </div>
  
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacts</h3>
              <ul className="space-y-2">
                <li>
                  <span>1234 Sample Street, Austin Texas 78704</span>
                </li>
                <li>
                  <span>512.333.2222</span>
                </li>
                <li>
                  <span>sampleemail@gmail.com</span>
                </li>
              </ul>
            </div>
  
            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="hover:text-gray-400"><FaFacebook/></a>
                <a href="#" aria-label="Twitter" className="hover:text-gray-400"><FaTwitter/></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-gray-400"><FaLinkedin/></a>
                <a href="#" aria-label="Pinterest" className="hover:text-gray-400"><FaPinterest/></a>
              </div>
            </div>
          </div>
  
          {/* Bottom Copyright */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p>&copy; 2021 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    );
  }
  