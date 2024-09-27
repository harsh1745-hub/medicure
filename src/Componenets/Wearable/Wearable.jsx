import React, { useState } from 'react';

const Wearable = () => {
  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    // Redirect user to the OAuth URL for Google Fit
    window.location.href = 'GOOGLE_FIT_OAUTH_URL';
  };

  return (
    <div className="bg-white py-10 text-center">
      <h2 className="text-3xl font-bold text-gray-900">Connect Your Wearable Device</h2>
      <p className="text-gray-600 mt-4">Sync your wearable device data with our platform for real-time health insights.</p>
      <button 
        className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg"
        onClick={handleConnect}
      >
        {connected ? 'Connected' : 'Connect Google Fit'}
      </button>
    </div>
  );
};

export default Wearable;
