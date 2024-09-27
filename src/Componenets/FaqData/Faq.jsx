import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the purpose of this platform?",
      answer:
        "Our platform offers a seamless digital healthcare experience with virtual consultations, appointment scheduling, EHR access, and AI-powered diagnostic tools.",
    },
    {
      question: "How does AI-powered diagnosis work?",
      answer:
        "The platform uses machine learning models to analyze X-ray images and provide diagnostic insights. It's designed to assist healthcare providers with quicker and more accurate diagnoses.",
    },
    {
      question: "What services are available on the platform?",
      answer:
        "We offer virtual consultations, appointment scheduling, access to EHR, AI-powered diagnostics, IoT integration, and specialized care such as cancer care and burn care.",
    },
    {
      question: "Is the AI diagnosis reliable?",
      answer:
        "While our AI diagnosis system is highly accurate, it is used to support healthcare professionals and is not a replacement for human expertise. Always consult with a healthcare provider.",
    },
    {
      question: "How secure is my health data?",
      answer:
        "We ensure end-to-end encryption of all personal and medical data. Our platform complies with healthcare regulations, including HIPAA and GDPR.",
    },
    {
      question: "Can I use the platform to consult specialists?",
      answer:
        "Yes, you can consult with both general practitioners and specialists. The platform will recommend the appropriate healthcare professional for your needs.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "Go to the Schedule Appointment section, select the healthcare professional, choose a time slot, and confirm your booking.",
    },
    {
      question: "How does IoT integration benefit my health tracking?",
      answer:
        "Our platform integrates with IoT devices, allowing you to monitor your vitals and sync data with your health profile for real-time insights.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-lg">{faq.question}</h3>
                <span>
                  {activeIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12h12"
                      />
                    </svg>
                  )}
                </span>
              </div>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 bg-white">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
