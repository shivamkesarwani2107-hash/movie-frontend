import Header from "./header";
export default function Ticket() {

  const booking = JSON.parse(localStorage.getItem("booking"));

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">

        <div className="bg-white w-[450px] rounded-xl shadow-xl overflow-hidden">

          <div className="bg-red-500 text-white text-center py-5">
            <h1 className="text-3xl font-bold">
              🎟️ Movie Ticket
            </h1>
            <p className="text-sm mt-1">
              Booking Confirmed ✅
            </p>
          </div>

          <div className="p-6 space-y-4">

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">🎬 Movie</span>
              <span>{booking?.movieName}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">🏢 Theatre</span>
              <span>{booking?.theatre}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">📅 Date</span>
              <span>{booking?.date}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">⏰ Time</span>
              <span>{booking?.time}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">💺 Seats</span>
              <span>{booking?.seats}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">💳 Payment</span>
              <span>{booking?.payment}</span>
            </div>

          </div>

          <div className="bg-gray-100 py-4 text-center">
            <p className="text-green-600 font-semibold">
              ✅ Enjoy Your Movie
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Please arrive 30 minutes before the show.
            </p>
          </div>

        </div>

      </div>

    </>
  );
}