import Header from "./header";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/home");
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex justify-center items-center py-10">

        <div className="bg-white w-[430px] rounded-2xl shadow-2xl overflow-hidden">

          {/* Cover */}
          <div className="bg-red-500 h-28"></div>

          {/* Profile */}
          <div className="-mt-14 flex flex-col items-center">

            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg"
            />

            <h2 className="text-2xl font-bold mt-3">
              {user?.name}
            </h2>

            <p className="text-gray-500">
              {user?.email}
            </p>
          </div>

          {/* Details */}
          <div className="p-6">

            <div className="space-y-4">

              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">👤 Name</span>
                <span>{user?.name}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">📧 Email</span>
                <span>{user?.email}</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold">🎟️ Bookings</span>
                <span>0</span>
              </div>

            </div>

            {/* Buttons */}

            <div className="mt-8 space-y-3">

              <button
                onClick={() => navigate("/booking")}
                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600"
              >
                🎟️ My Bookings
              </button>

              <button
                onClick={handleLogout}
                className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-black"
              >
                🚪 Logout
              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}