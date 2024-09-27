import React from 'react';
import { Link } from 'react-router-dom';

const AIDiagnosisSection = () => {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-6 text-blue-900">
          AI-Powered Diagnosis
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Revolutionizing healthcare diagnostics with AI. Faster, more accurate, and efficient diagnostics for a healthier tomorrow.
        </p>

        {/* AI Diagnostic Features */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* AI X-ray Diagnosis */}
          <div className="w-full sm:w-1/3 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              AI X-ray Diagnosis
            </h3>
            <p className="text-gray-600 mb-4">
              Our AI-powered system analyzes X-ray images to detect conditions like fractures and lung diseases with high precision, improving diagnosis speed and accuracy.
            </p>
            <a href="/services/ai-xray-diagnosis" className="inline-flex items-center text-blue-600 hover:underline">
              Learn More
              <span className="ml-2">&#8594;</span>
            </a>
          </div>

          {/* Real-time Diagnosis */}
          <div className="w-full sm:w-1/3 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Real-time Diagnosis
            </h3>
            <p className="text-gray-600 mb-4">
              Monitor vital signs in real-time with IoT-enabled health devices. Our AI alerts healthcare providers instantly when abnormalities are detected.
            </p>
            <a href="/services/real-time-diagnosis" className="inline-flex items-center text-blue-600 hover:underline">
              Learn More
              <span className="ml-2">&#8594;</span>
            </a>
          </div>

          {/* Advanced Medical Insights */}
          <div className="w-full sm:w-1/3 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Advanced Medical Insights
            </h3>
            <p className="text-gray-600 mb-4">
              Our AI offers deep insights from health data, enabling early detection of diseases and providing personalized health improvement recommendations.
            </p>
            <Link to ="/medical" className="inline-flex items-center text-blue-600 hover:underline">Learn More</Link>
            
              <span className="ml-2">&#8594;</span>
            
          </div>
        </div>

        {/* Call-to-action button */}
        <div className="mt-10">
          <Link to='/ai'>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Schedule AI Diagnosis
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIDiagnosisSection;
