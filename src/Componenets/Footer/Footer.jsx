import React from 'react';
import Logo from '../../assests/image/logo.png'

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Column 1: Logo & About */}
          <div>
               <img className=''
               src={Logo} alt='logo' height={200} width={200}/>
            
            <p className="text-gray-300 mt-6">
              Your trusted partner for AI-driven healthcare solutions. We empower you with innovative technology to enhance medical care and diagnostics.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2 hover:text-white">
                <a href="/service">Our Services</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="/about">About Us</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="/contact">Contact Us</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="/faq">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Medical Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Medical Services</h3>
            <ul>
              <li className="mb-2 hover:text-white">
                <a href="/ai-diagnosis">AI-Powered Diagnostics</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="/iot-integration">IoT Integration</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="/cancer-care">Cancer Care</a>
              </li>
              <li className="mb-2 hover:text-white">
                <a href="/burn-care">Burn Care</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <ul className="text-gray-300">
              <li className="mb-2">
                <span className="font-semibold">Phone:</span> +91 123 456 7890
              </li>
              <li className="mb-2">
                <span className="font-semibold">Email:</span> support@healthcareai.com
              </li>
              <li className="mb-2">
                <span className="font-semibold">Address:</span> 123 Healthcare St., Mumbai, India
              </li>
            </ul>
          </div>

        </div>

        {/* Social Media Links */}
        <div className="mt-10 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} HarshSrivastava. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;








  




  




  
  
  

  
  
  

  
  
  
  

  
  
  

  
  
  
  
  





  
  
  
  
  


  


  
   





