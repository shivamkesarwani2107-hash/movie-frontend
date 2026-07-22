import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function Movie() {
  const navigate = useNavigate();

  const getMovies = async () => {
    const response = await fetch("http://localhost:4000/movie");

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    return response.json();
  };

  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
  <section className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12">

    <div className="max-w-7xl mx-auto px-5">

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl md:text-5xl font-bold">
            🎬 Now Showing
          </h1>

          <p className="text-gray-500 mt-2">
            Book your favourite movie in just one click.
          </p>

        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        {movies.map((movie) => (

          <div
            key={movie._id}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
          >

            <div className="relative overflow-hidden">

              <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-96 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute top-3 left-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                ⭐ 4.8
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/40 to-transparent h-28"></div>

              <h2 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                {movie.name}
              </h2>

            </div>

            <div className="p-5">

              <div className="flex flex-wrap gap-2 mb-4">

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  🌐 {movie.language}
                </span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  ⏰ {movie.duration}
                </span>

              </div>

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-400 text-sm">
                    Starting From
                  </p>

                  <h2 className="text-2xl font-bold text-red-600">
                    ₹{movie.price}
                  </h2>

                </div>

              </div>

              <button
                onClick={() =>
                  navigate("/booking", {
                    state: { movie },
                  })
                }
                className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition"
              >
                🎟 Book Now
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  </section>
);
}