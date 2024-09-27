import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Virtual Consultations",
      description: "Connect with healthcare professionals through video or audio calls from the comfort of your home.",
      icon: "🩺"
    },
    {
      title: "Appointment Scheduling",
      description: "Easily schedule, reschedule, or cancel appointments online without any hassle.",
      icon: "📅"
    },
    {
      title: "Secure EHR Access",
      description: "Manage and access your electronic health records securely whenever you need them.",
      icon: "🔒"
    },
    {
        title: "AI-Powered Insights",
        description: "Receive personalized health recommendations and diagnostics powered by advanced AI technology, including X-ray analysis for accurate diagnoses.",
        icon: "🤖"
    },
    {
      title: "IoT Integration",
      description: "Track your health data using wearable devices and share it with your healthcare providers.",
      icon: "⌚"
    },
   
  ];

  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Features</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <div className="bg-white rounded-lg shadow-md p-6 w-64" key={index}>
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
