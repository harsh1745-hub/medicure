import React from 'react';
import { useParams } from 'react-router-dom';

const Service = () => {
  const { serviceName } = useParams();

  const serviceDetails = {
    "general-consultation": {
      title: "General Consultation",
      description:
        "Our General Consultation service offers comprehensive health evaluations. Our experienced physicians provide personalized advice for a wide range of health concerns, helping you to stay in optimal health. We focus on prevention, early detection, and management of chronic diseases.",
      additionalInfo:
        "This service is available both in-person and through virtual telemedicine consultations. Book an appointment to discuss any symptoms or health concerns you may have."
    },
    "pediatric-care": {
      title: "Pediatric Care",
      description:
        "Our Pediatric Care service focuses on the health and well-being of infants, children, and adolescents. From routine check-ups to managing illnesses, our specialists ensure that your child receives the best possible care.",
      additionalInfo:
        "We provide vaccinations, growth monitoring, and specialized care for pediatric conditions."
    },
    "mental-health": {
      title: "Mental Health Services",
      description:
        "Our Mental Health Services offer support and treatment for various mental health conditions, including anxiety, depression, and stress management. We provide therapy sessions, mental health assessments, and medication management.",
      additionalInfo:
        "Services include individual therapy, group therapy, and access to psychiatric care."
    },
    "iot-integration": {
      title: "IoT Integration",
      description:
        "Our IoT Integration service allows patients to connect their wearable health devices, like smartwatches and fitness trackers, to our platform. This allows healthcare providers to remotely monitor your health metrics such as heart rate, sleep patterns, and activity levels.",
      additionalInfo:
        "This integration helps detect early signs of health issues, enabling real-time monitoring and personalized advice based on your data."
    },
    "ai-xray-diagnosis": {
      title: "AI X-ray Diagnosis",
      description:
        "Our AI-powered X-ray Diagnosis service uses cutting-edge artificial intelligence to assist doctors in diagnosing conditions from X-ray images. The AI helps in detecting abnormalities, fractures, and diseases with high accuracy, speeding up the diagnostic process.",
      additionalInfo:
        "This service reduces waiting times for results and provides detailed insights, which can be discussed with your healthcare provider."
    }
  };

  const service = serviceDetails[serviceName];

  return (
    <section className="py-20 px-4 bg-gray-100 text-center">
      {service ? (
        <>
          <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
          <p className="text-lg mb-4">{service.description}</p>
          <p className="text-gray-700 mb-6">{service.additionalInfo}</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
            Book an Appointment
          </button>
        </>
      ) : (
        <p className="text-red-500">Service not found. Please select a valid service.</p>
      )}
    </section>
  );
};

export default Service;
