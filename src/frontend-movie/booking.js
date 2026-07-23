import { useNavigate, useLocation } from "react-router-dom";
import Header from "./header";
import { useState, useEffect } from "react";
export default function Booking() {
  const location = useLocation();
  const movie = location.state?.movie;

  const [movieName, setMovieName] = useState("");
  const [theatre, setTheatre] = useState("");
  const [date, setDate] = useState("");
  const [seats, setSeats] = useState("");
  const [payment, setPayment] = useState("");
  const [time, setTime] = useState("");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];

  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 1);
  const oneMonthLater = maxDate.toISOString().split("T")[0];

  const handleBooking = async () => {

    if (!movieName || !theatre || !date || !time || !seats || !payment) {
      alert("All fields are required");
      return;
    }

    if (date < today) {
      alert("Past date booking is not allowed");
      return;
    }

    setLoading(true);

    try {

      const response = await fetch(`${process.env.REACT_APP_API_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          movieName,
          theatre,
          date,
          time,
          seats,
          payment
        })
      });

      const data = await response.json();

      if (response.ok) {

        localStorage.setItem("booking", JSON.stringify(data.booking));
        setMovieName("");
        setTheatre("");
        setDate("");
        setTime("");
        setSeats("");
        setPayment("");

        navigate("/payment");

      } else {

        alert(data.message);
        setLoading(false);

      }

    } catch (err) {

      alert("Server Error");
      setLoading(false);

    }

  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/movie`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, [])

  useEffect(() => {
    if (movie) {
      setMovieName(movie.name);
    }
  }, [movie]);

  useEffect(() => {
    if (!movieName) return;

    fetch(`${process.env.REACT_APP_API_URL}/movie`)
      .then((res) => res.json())
      .then((data) => {
        const foundMovie = data.find(
          (m) => m.name === movieName
        );

        setSelectedMovie(foundMovie);
      })
      .catch((err) => console.log(err));
  }, [movieName]);

  const selectedSlot = selectedMovie?.slots?.find(
    (slot) => slot.time === time
  );

  const availableSeats = selectedSlot
    ? selectedSlot.totalSeats - selectedSlot.bookedSeats
    : null;


  return (

    <>
      <Header />

      <div className="min-h-screen bg-gray-100 py-10">

        <h1 className="text-4xl font-bold text-center text-red-500 mb-8">
          🎟️ Book Your Ticket
        </h1>

        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-semibold">🎬 Movie Name</label>

              <div className="relative mt-2 mb-4">
                <input
                  type="text"
                  placeholder="Search Movie..."
                  value={movieName}
                  onChange={(e) => {
                    const value = e.target.value;

                    setMovieName(value);

                    if (value.trim() === "") {
                      setFilteredMovies([]);
                    } else {
                      const result = movies.filter((movie) =>
                        movie.name.toLowerCase().includes(value.toLowerCase())
                      );

                      setFilteredMovies(result);
                    }
                  }}
                  className="w-full border rounded-md p-3 outline-none"
                />

                {filteredMovies.length > 0 && (
                  <div className="absolute w-full bg-white border rounded-md shadow-lg max-h-48 overflow-y-auto z-50">
                    {filteredMovies.map((movie) => (
                      <div
                        key={movie._id}
                        onClick={() => {
                          setMovieName(movie.name);
                          setFilteredMovies([]);
                        }}
                        className="p-3 cursor-pointer hover:bg-red-100"
                      >
                        {movie.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <label className="font-semibold">🏢 Theatre</label>
              <input
                type="text"
                placeholder="Enter Theatre Name"
                value={theatre}
                onChange={(e) => setTheatre(e.target.value)}
                className="w-full border rounded-md p-3 mt-2 mb-4 outline-none"
              />

              <label className="font-semibold">📅 Date</label>
              <input
                type="date"
                value={date}
                min={today}
                max={oneMonthLater}
                onChange={(e) => {
                  const value = e.target.value;

                  if (value < today || value > oneMonthLater) {
                    alert("Please select a valid date.");
                    return;
                  }

                  setDate(value);
                }}
                onKeyDown={(e) => e.preventDefault()}
                onPaste={(e) => e.preventDefault()}  
                className="w-full border rounded-md p-3 mt-2 mb-4 outline-none"
              />
            </div>

            <div>
              <label className="font-semibold">⏰ Show Time</label>

              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border rounded-md p-3 mt-2 mb-4 outline-none"
              >
                <option value="">Select Show Time</option>

                {selectedMovie?.slots?.map((slot) => (

                  <option
                    key={slot.time}
                    value={slot.time}
                  >
                    {slot.time} (
                    Available Seats:
                    {slot.totalSeats - slot.bookedSeats}
                    )

                  </option>

                ))}

              </select>

              <label className="font-semibold">💺 Number of Seats</label>
              <input
                type="number"
                placeholder="Enter Seats"
                value={seats}
                min="1"
                max="15"
                onChange={(e) => {
                  const value = Number(e.target.value);

                  if (e.target.value === "") {
                    setSeats("");
                    return;
                  }

                  if (value >= 1 && value <= 15) {
                    setSeats(value);
                  }
                }}
                className="w-full border rounded-md p-3 mt-2 mb-4 outline-none"
              />

              <label className="font-semibold">💳 Payment Method</label>

              <select
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                className="w-full border rounded-md p-3 mt-2 mb-4 outline-none"
              >
                <option value="">Select Payment Method</option>
                <option value="UPI">UPI</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Net Banking">Net Banking</option>
              </select>

            </div>

          </div>

          <button
            disabled={loading || availableSeats === null || availableSeats === 0}
            onClick={handleBooking}
            className={`w-full mt-6 py-3 rounded-md text-white flex items-center justify-center gap-2 ${loading
              ? "bg-red-500 cursor-wait"
              : availableSeats === null || availableSeats === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
              }`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </>
            ) : availableSeats === null ? (
              "⏰ Select Show Time"
            ) : availableSeats === 0 ? (
              "🚫 House Full"
            ) : (
              "🎟️ Confirm Booking"
            )}
          </button>
        </div>

      </div>
    </>
  );
}