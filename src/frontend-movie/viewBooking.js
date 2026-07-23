import Header from "./header";
import { useQuery } from "@tanstack/react-query";

export default function ViewBooking() {

    const getBookings = async () => {

        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/booking`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch bookings");
        }

        return response.json();
    };

    const {
        data: bookings = [],
        isLoading,
        error,
    } = useQuery({
        queryKey: ["bookings"],
        queryFn: getBookings,
    });

    if (isLoading) {
        return (
            <>
                <Header />
                <h1 className="text-4xl text-center mt-20">
                    Loading...
                </h1>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Header />
                <h1 className="text-4xl text-center mt-20 text-red-500">
                    Something Went Wrong
                </h1>
            </>
        );
    }

    return (
        <>
            <Header />

            <div className="min-h-screen bg-gray-100 p-8">

                <div className="flex justify-between items-center mb-8">

                    <h1 className="text-4xl font-bold text-purple-600">
                        🎟 View Bookings
                    </h1>

                    <div className="bg-white shadow-md rounded-xl px-6 py-4">

                        <p className="text-gray-500">
                            Total Bookings
                        </p>

                        <h2 className="text-3xl font-bold text-purple-600">
                            {bookings.length}
                        </h2>

                    </div>

                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">

                    <table className="w-full">

                        <thead>

                            <tr className="bg-purple-600 text-white">

                                <th className="p-4">Movie</th>
                                <th className="p-4">Theatre</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Time</th>
                                <th className="p-4">Seats</th>
                                <th className="p-4">Payment</th>
                                <th className="p-4">Amount</th>

                            </tr>

                        </thead>

                        <tbody>

                            {bookings.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="7"
                                        className="text-center p-10 text-gray-500"
                                    >
                                        No Bookings Found
                                    </td>

                                </tr>

                            ) : (

                                bookings.map((booking) => (

                                    <tr
                                        key={booking._id}
                                        className="border-b hover:bg-gray-100 text-center"
                                    >

                                        <td className="p-4 font-semibold">
                                            {booking.movieName}
                                        </td>

                                        <td className="p-4">
                                            {booking.theatre}
                                        </td>

                                        <td className="p-4">
                                            {booking.date}
                                        </td>

                                        <td className="p-4">
                                            {booking.time}
                                        </td>

                                        <td className="p-4">
                                            {booking.seats}
                                        </td>

                                        <td className="p-4">
                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                                {booking.payment}
                                            </span>
                                        </td>

                                        <td className="p-4 font-bold text-red-500">
                                            ₹{booking.amount}
                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </>
    );
}