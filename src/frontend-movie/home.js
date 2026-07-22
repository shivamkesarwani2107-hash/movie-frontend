import Header from "./header";
import Footer from "./footer";
import Movie from "./movie";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <>
      <Header />


      <section
        className="relative h-[80vh] md:h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop)"
        }}
      >

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight">

            Book Your
            <span className="text-red-500">
              {" "}Favourite Movies
            </span>

          </h1>

          <p className="text-gray-300 mt-6 text-lg md:text-2xl max-w-2xl">

            Experience the latest blockbusters with secure booking,
            instant confirmation and easy online payments.

          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <button
              onClick={() => navigate("/movie")}
              className="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-lg text-white font-semibold"
            >
              🎬 Explore Movies
            </button>

            <button
              onClick={() => navigate("/booking")}
              className="border border-white hover:bg-white hover:text-black transition px-8 py-3 rounded-lg text-white font-semibold"
            >
              🎟 Book Ticket
            </button>

          </div>

        </div>

      </section>

      <section className="bg-gray-100 py-14">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">

            Why Choose MovieTicket?

          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
            onClick={()=>navigate('movie')}
            >

              <div className="text-5xl mb-4">🎬</div>

              <h3 className="font-bold text-xl">

                Latest Movies

              </h3>

              <p className="text-gray-500 mt-3">

                Watch the newest Bollywood,
                Hollywood and regional movies.

              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
            onClick={()=>navigate('booking')}
            >

              <div className="text-5xl mb-4">⚡</div>

              <h3 className="font-bold text-xl">

                Instant Booking

              </h3>

              <p className="text-gray-500 mt-3">

                Book tickets in seconds without any hassle.

              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 transition">

              <div className="text-5xl mb-4">🔒</div>

              <h3 className="font-bold text-xl">

                Secure Payments

              </h3>

              <p className="text-gray-500 mt-3">

                Safe payment experience with Razorpay.

              </p>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
            onClick={()=>navigate('profile')}
            >

              <div className="text-5xl mb-4">📧</div>

              <h3 className="font-bold text-xl">

                Email Confirmation

              </h3>

              <p className="text-gray-500 mt-3">

                Get instant booking confirmation by email.

              </p>

            </div>

          </div>

        </div>

      </section>

      <Movie />

      <section className="py-12 bg-black">

        <div className="max-w-7xl mx-auto px-6">

          <img

            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png"

            alt="Offer"

            className="rounded-xl w-full"

          />

        </div>

      </section>

      <section className="bg-red-600 py-16">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-white">

            Ready For Your Next Movie?

          </h2>

          <p className="text-white/90 mt-4 text-lg">

            Book your favourite movie tickets today and enjoy
            an unforgettable cinema experience.

          </p>

          <button

            onClick={() => navigate("/movie")}

            className="mt-8 bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:scale-105 transition"

          >

            🎟 Book Now

          </button>

        </div>

      </section>

      <Footer />

    </>
  );

}