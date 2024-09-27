import React, { useState } from 'react';

const Mental = () => {
  const [mood, setMood] = useState('');
  const [insight, setInsight] = useState(null);

  const moodOptions = ['Happy', 'Sad', 'Stressed', 'Anxious', 'Neutral'];

  const handleMoodSubmit = () => {
    // Logic to send mood data to backend or AI engine
    // Placeholder AI Insight
    if (mood === 'Stressed' || mood === 'Anxious') {
      setInsight("It seems you're feeling stressed. Consider trying meditation or a breathing exercise.");
    } else if (mood === 'Happy') {
      setInsight("Great to hear you're feeling good! Keep up the positive vibe.");
    } else {
      setInsight("Your mood seems neutral. How about a short meditation to relax?");
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Mental Health Services</h2>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl mb-4">How are you feeling today?</h3>
        <div className="grid grid-cols-2 gap-4">
          {moodOptions.map((option) => (
            <button
              key={option}
              className={`py-2 px-4 rounded-md focus:outline-none ${mood === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => setMood(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={handleMoodSubmit}
          className="bg-blue-500 text-white mt-4 py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit Mood
        </button>
      </div>

      {insight && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl mb-4">AI-Powered Insight</h3>
          <p>{insight}</p>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-xl mb-4">Suggested Relaxation Techniques</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Guided Meditation</h4>
            <p>Try this 5-minute guided meditation to help calm your mind.</p>
            <button className="mt-2 bg-green-500 text-white py-2 px-4 rounded-md">Start Meditation</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-semibold">Breathing Exercise</h4>
            <p>Follow this simple breathing exercise to reduce stress.</p>
            <button className="mt-2 bg-green-500 text-white py-2 px-4 rounded-md">Start Exercise</button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl mb-4">Chat with Our Mental Health Assistant</h3>
        <p>Feeling overwhelmed? Chat with our AI mental health assistant for support.</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Start Chat</button>
      </div>
    </div>
  );
};

export default Mental;
