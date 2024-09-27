const Head = () => {
    return (
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Welcome, [User]</h1>
        <div className="flex space-x-4">
          <button className="relative text-gray-700 focus:outline-none">
            <span className="material-icons">notifications</span>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
          </button>
          <img src="[ProfileImage]" alt="Profile" className="h-10 w-10 rounded-full border-2 border-gray-400"/>
        </div>
      </header>
    );
  };
  