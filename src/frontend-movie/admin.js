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
        return <h1 className="text-center mt-20">Loading...</h1>;
    }

    if (error) {
        return <h1 className="text-center mt-20">Something Went Wrong</h1>;
    }

    
    return (
        <>
            <Header />

            <div className="min-h-screen bg-gray-100 p-6">

                <h1 className="text-4xl font-bold text-red-500 mb-8">
                    🎬 Admin Dashboard
                </h1>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div 
                    onClick={() => navigate("/admin/add-movie")}
                    className="bg-white rounded-xl shadow-md p-6">
                        <h2 className="text-gray-500">Total Movies</h2>
                        <p className="text-4xl font-bold text-red-500 mt-3">
                            {movies.length}
                        </p>
                    </div>

                    <div 
                    onClick={() => navigate("/admin/view-booking")}
                    className="bg-white rounded-xl shadow-md p-6">
                        <h2 className="text-gray-500"
                         onClick={() => navigate("/admin/view-booking")}
                        >
                            Bookings
                            </h2>
                        <p className="text-4xl font-bold text-green-500 mt-3">
                           10
                        </p>
                    </div>

                    <div 
                     onClick={() => navigate("/admin/view-user")}
                    className="bg-white rounded-xl shadow-md p-6">
                        <h2 className="text-gray-500"
                        >
                            Users
                            </h2>
                        <p className="text-4xl font-bold text-blue-500 mt-3">78</p>
                    </div>



                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-md mt-8 p-6">

                    <h2 className="text-2xl font-bold mb-5">
                        Quick Actions
                    </h2>

                    <div className="flex flex-wrap gap-4">

                        <button
                            className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg"
                            onClick={() => navigate("/admin/add-movie")}
                        >
                            ➕ Add Movie
                        </button>

                        <button
                            className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-3 rounded-lg"
                            onClick={() => navigate("/admin/view-booking")}
                        >
                            🎟 View Bookings
                        </button>

                        <button
                            className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-lg"
                            onClick={() => navigate("/admin/view-user")}
                        >
                            👥 View Users
                        </button>


                    </div>

                </div>

                {/* Movies Table */}
                <div className="bg-white rounded-xl shadow-md mt-8 p-6">

                    <div className="flex justify-between items-center mb-5">

                        <h2 className="text-2xl font-bold">
                            Movies
                        </h2>

                        <button className="bg-red-500 text-white px-4 py-2 rounded-md"
                            onClick={() => navigate("/admin/add-movie")}
                        >
                            Add Movie
                        </button>

                    </div>

                    <table className="w-full border-collapse">

                        <thead>

                            <tr className="bg-gray-200">

                                <th className="p-3 border">Movie</th>
                                <th className="p-3 border">Language</th>
                                <th className="p-3 border">Price</th>
                                <th className="p-3 border">Duration</th>
                                <th className="p-3 border">Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {movies.map((movie) => (

                                <tr
                                    key={movie._id}
                                    className="text-center"
                                >

                                    <td className="border p-3">

                                        <div className="flex items-center gap-3">

                                            <img
                                                src={movie.image}
                                                alt={movie.name}
                                                className="w-16 h-20 rounded object-cover"
                                            />

                                            <span>{movie.name}</span>

                                        </div>

                                    </td>

                                    <td className="border p-3">
                                        {movie.language}
                                    </td>

                                    <td className="border p-3">
                                        ₹{movie.price}
                                    </td>

                                    <td className="border p-3">
                                        {movie.duration}
                                    </td>

                                    <td className="border p-3">

                                        <button
                                            className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>
        </>
    );
}