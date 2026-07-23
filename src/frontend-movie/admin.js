import Header from "./header";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function Admin() {

    const navigate = useNavigate();

    const getMovies = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/movie`
        );

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
        return (
            <h1 className="text-center text-2xl mt-20 font-bold">
                Loading...
            </h1>
        );
    }

    if (error) {
        return (
            <h1 className="text-center text-2xl mt-20 text-red-500 font-bold">
                Something Went Wrong
            </h1>
        );
    }

    return (
        <>
            <Header />

            <div className="min-h-screen bg-gray-100 p-8">

                {/* Dashboard Header */}

                <div className="text-center mb-12">

                    <h1 className="text-5xl font-extrabold text-red-500">
                        🎬 Admin Dashboard
                    </h1>

                    <p className="text-gray-500 text-lg mt-3">
                        Manage Movies, Users & Bookings Easily
                    </p>

                </div>

                {/* Quick Actions */}

                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto">

                    <h2 className="text-3xl font-bold text-center mb-8">
                        ⚡ Quick Actions
                    </h2>

                    <div className="flex flex-wrap justify-center gap-6">

                        <button
                            onClick={() => navigate("/admin/add-movie")}
                            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition duration-300 font-semibold"
                        >
                            ➕ Add Movie
                        </button>

                        <button
                            onClick={() => navigate("/admin/view-booking")}
                            className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition duration-300 font-semibold"
                        >
                            🎟 View Bookings
                        </button>

                        <button
                            onClick={() => navigate("/admin/view-user")}
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition duration-300 font-semibold"
                        >
                            👥 View Users
                        </button>

                    </div>

                </div>

                {/* Movies Table */}

                <div className="bg-white rounded-2xl shadow-xl mt-10 p-6">

                    <div className="flex justify-between items-center mb-6">

                        <h2 className="text-3xl font-bold">
                            🎬 Movies
                        </h2>

                        <button
                            onClick={() => navigate("/admin/add-movie")}
                            className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg font-semibold"
                        >
                            + Add Movie
                        </button>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full border-collapse">

                            <thead>

                                <tr className="bg-gray-200">

                                    <th className="p-4 border">
                                        Movie
                                    </th>

                                    <th className="p-4 border">
                                        Language
                                    </th>

                                    <th className="p-4 border">
                                        Price
                                    </th>

                                    <th className="p-4 border">
                                        Duration
                                    </th>

                                    <th className="p-4 border">
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {movies.map((movie) => (

                                    <tr
                                        key={movie._id}
                                        className="hover:bg-gray-50 text-center"
                                    >

                                        <td className="border p-4">

                                            <div className="flex items-center gap-4">

                                                <img
                                                    src={movie.image}
                                                    alt={movie.name}
                                                    className="w-16 h-20 rounded-lg object-cover shadow"
                                                />

                                                <span className="font-semibold">
                                                    {movie.name}
                                                </span>

                                            </div>

                                        </td>

                                        <td className="border p-4">
                                            {movie.language}
                                        </td>

                                        <td className="border p-4">
                                            ₹{movie.price}
                                        </td>

                                        <td className="border p-4">
                                            {movie.duration}
                                        </td>

                                        <td className="border p-4">

                                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg mr-3">
                                                Edit
                                            </button>

                                            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </>
    );
}