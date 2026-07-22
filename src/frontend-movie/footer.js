import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-red-500">
          🎬 MovieTicket
        </h2>

        <p className="mt-4 text-gray-300 text-lg">
          Your one-stop destination for booking movie tickets with ease.
        </p>

        <p className="mt-2 text-gray-400">
          Explore the latest blockbusters, discover upcoming releases,
          choose your favorite seats, and enjoy a smooth ticket booking
          experience anytime, anywhere.
        </p>

        <div className="flex justify-center gap-10 mt-8 text-gray-300">
          <div>
            <button
              onClick={() => navigate("/movie")}
              className="font-semibold text-white"
            >
              🎥 Movies
            </button>
            <p>Latest Releases</p>
            <p>Trending Movies</p>
            <p>Coming Soon</p>
          </div>

          <div>
            <button
              onClick={() => navigate("/booking")}
              className="font-semibold text-white"
            >
              🎟️ Booking

            </button>
            <p>Easy Booking</p>
            <p>Secure Payments</p>
            <p>Instant Confirmation</p>
          </div>

          <div>
            <button
              onClick={() => navigate("/help")}
              className="font-semibold text-white"
            >
              📞 Support
            </button>
            <p>Help Center</p>
            <p>Contact Us</p>
            <p>FAQs</p>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <p className="text-gray-400">
          Made with ❤️ for movie lovers.
        </p>

        <p className="text-sm text-gray-500 mt-2">
          © 2026 MovieTicket. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}