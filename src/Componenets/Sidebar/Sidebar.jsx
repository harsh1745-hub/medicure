const Sidebar = () => {
    return (
      <div className="h-full w-64 bg-gray-800 text-white">
        <div className="p-4 text-center font-bold text-xl">Healthcare Dashboard</div>
        <ul className="mt-6">
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Dashboard</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Appointments</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Messages</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Health Records</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">AI Diagnosis</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Settings</li>
        </ul>
      </div>
    );
  };
  