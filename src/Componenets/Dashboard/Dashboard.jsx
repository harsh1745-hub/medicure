import Linechart from "../Linechart/Linechart";

const Dashboard = () => {
    return (
      <div className="flex-1 bg-gray-100 p-6">
        {/* Summary Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-gray-700 text-xl">Upcoming Appointments</h2>
            <p className="text-gray-500">3 appointments scheduled</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-gray-700 text-xl">Unread Messages</h2>
            <p className="text-gray-500">5 unread messages</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-gray-700 text-xl">New Health Reports</h2>
            <p className="text-gray-500">2 new reports</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-gray-700 text-xl">AI Diagnoses</h2>
            <p className="text-gray-500">1 pending diagnosis</p>
          </div>
        </div>
  
        {/* Interactive Charts */}
        <div className="mt-6">
          <h2 className="text-gray-700 text-xl mb-4">Health Metrics</h2>
        
          <div className="bg-white p-4 rounded-lg shadow-md">
            <canvas id="healthChart"></canvas> {/* Use Chart.js or another library */}
          </div>
        </div>
  
        {/* Recent Activities */}
        <div className="mt-6">
          <h2 className="text-gray-700 text-xl mb-4">Recent Activities</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <ul>
              <li className="border-b py-2">New message from Dr. John Doe</li>
              <li className="border-b py-2">X-ray report uploaded</li>
              <li className="border-b py-2">Appointment with Dr. Jane Smith confirmed</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
     export default Dashboard;