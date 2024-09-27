import React from 'react';
import { Link } from 'react-router-dom';

const IotIntegration = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            IoT Integration for Real-Time Health Monitoring
          </h2>
          <p className="text-lg text-gray-600">
            Our platform allows patients to connect wearable devices and health monitors for real-time tracking and health management.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Wearable Device Connectivity
            </h3>
            <p className="text-gray-600">
              Easily connect your smartwatches, fitness trackers, and heart rate monitors to the platform. Monitor vitals like heart rate, steps, and sleep patterns.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> Real-time data synchronization
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> Continuous heart rate monitoring
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> Step and activity tracking
              </li>
               <Link to='/wearable' > <button className='bg-primaryColor border-2 rounded-md font-bold'>CONECT YOUR DEVICE</button></Link>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Automated Health Alerts
            </h3>
            <p className="text-gray-600">
              Receive automated alerts based on your health data. Whether it's abnormal heart rate, high blood pressure, or sleep disturbances, stay informed at all times.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> Customized health alerts for abnormalities
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> Alerts directly sent to healthcare providers
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> Preventive health measures based on IoT data
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Remote Patient Monitoring
            </h3>
            <p className="text-gray-600">
              Doctors can monitor patients remotely through connected devices, allowing for continuous care and intervention if needed.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> Real-time access to patient health data
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> Remote diagnosis and recommendations
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> Improved patient outcomes through continuous monitoring
              </li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Data Security and Privacy
            </h3>
            <p className="text-gray-600">
              All health data is encrypted and stored securely, ensuring privacy and confidentiality at every level.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> End-to-end encryption of all data
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> HIPAA compliance for secure health data handling
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">&#10003;</span> Secure sharing of data with healthcare providers
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IotIntegration;
