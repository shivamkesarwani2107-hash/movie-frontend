export default function Admin() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header */}
      <div className="bg-red-500 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">🎬 Admin Dashboard</h1>

          <button className="bg-white text-red-500 px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
            Logout
          </button>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="max-w-7xl mx-auto p-6">

        <h2 className="text-3xl font-bold mb-6">
          Welcome Admin 👋
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-600">
              Total Movies
            </h3>

            <p className="text-4xl font-bold text-red-500 mt-3">
              12
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-600">
              Total Bookings
            </h3>

            <p className="text-4xl font-bold text-green-500 mt-3">
              185
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-600">
              Total Users
            </h3>

            <p className="text-4xl font-bold text-blue-500 mt-3">
              78
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-600">
              Revenue
            </h3>

            <p className="text-4xl font-bold text-purple-500 mt-3">
              ₹45,600
            </p>
          </div>

        </div>

        {/* Quick Actions */}

        <div className="bg-white mt-8 rounded-xl shadow-md p-6">

          <h2 className="text-2xl font-bold mb-5">
            Quick Actions
          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-md">
              ➕ Add Movie
            </button>

            <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-md">
              📋 View Bookings
            </button>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-md">
              👥 View Users
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}