import React from 'react';
import { Link } from 'react-router-dom'; 
// Make sure you have react-router-dom installed

const MedicalServicesSection = () => {
  const services = [
    {
      title: "General Consultation",
      description: "Comprehensive health evaluations and advice for general health issues.",
      icon: "🏥",
      link: "/services/general-consultation" // Replace with actual route
    },
    {
      title: "Pediatric Care",
      description: "Specialized medical care for infants, children, and adolescents.",
      icon: "👶",
      link: "/services/pediatric-care" // Replace with actual route
    },
    {
      title: "Mental Health Services",
      description: "Support and treatment for mental health conditions and emotional well-being.",
      icon: "🧠",
      link: "/mental" // Replace with actual route
    },
    {
      title: "Nutrition Counseling",
      description: "Personalized nutrition plans and dietary advice from certified nutritionists.",
      icon: "🥗",
      link: "/plan" // Replace with actual route
    },
    {
      title: "Chronic Disease Management",
      description: "Ongoing support and management for chronic conditions like diabetes and hypertension.",
      icon: "❤️",
      link: "/chronic" // Replace with actual route
    },
    {
      title: "Telemedicine Services",
      description: "Access healthcare from home through virtual consultations with specialists.",
      icon: "💻",
      link: "/services/telemedicine" // Replace with actual route
    },
    {
      title: "Cancer Care",
      description: "Comprehensive support and treatment for cancer patients, including counseling and management.",
      icon: "🎗️",
      link: "/services/cancer-care" // Replace with actual route
    },
    {
      title: "Burn Care",
      description: "Specialized treatment and rehabilitation services for burn victims.",
      icon: "🔥",
      link: "/services/burn-care" // Replace with actual route
    },
    {
      title: "IoT Integration",
      description: "Utilize wearable devices to monitor health metrics and share data with healthcare providers.",
      icon: "⌚",
      link: "/Iot-integration" // Replace with actual route
    },
    {
      title: "AI X-ray Diagnosis",
      description: "Leverage AI technology for accurate and quick analysis of X-ray images.",
      icon: "🩻",
      link:'/medical' // Replace with actual route
    },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Our Medical Services</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div className="bg-gray-100 rounded-lg shadow-md p-6 w-64" key={index}>
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
            <Link to={service.link} className="inline-flex items-center mt-4 text-blue-600 hover:underline">
              Learn More
              <span className="ml-2">&#8594;</span> {/* Right arrow */}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MedicalServicesSection;
