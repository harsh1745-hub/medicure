import React, { useState } from 'react';

const Ai = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [xrayImage, setXrayImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [diagnosis, setDiagnosis] = useState(null);

  const handleImageUpload = (e) => {
    setXrayImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !xrayImage) {
      alert('Please fill in all fields and upload an X-ray image.');
      return;
    }

    setLoading(true);

    // Prepare the form data for the AI diagnosis API call
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('xrayImage', xrayImage);

    try {
      // Send the form data to the AI diagnosis API (replace with your actual API endpoint)
      const response = await fetch('https://your-ai-diagnosis-api.com/api/xray-diagnosis', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      // Update the diagnosis result
      setDiagnosis(result.diagnosis);
    } catch (error) {
      alert('Error submitting the form. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        X-ray Analysis Submission
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">ENTER YOUR NAME</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Enter Your Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Upload X-ray Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${
              loading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {loading ? 'Submitting...' : 'Get Diagnosis'}
          </button>
        </div>
      </form>

      {diagnosis && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-center text-green-600">
            Diagnosis Result
          </h3>
          <p className="text-center text-gray-700">{diagnosis}</p>
        </div>
      )}
    </div>
  );
};

export default Ai;
