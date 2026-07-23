import Header from "./header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMovie() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        image: "",
        name: "",
        language: "",
        price: "",
        duration: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/movie`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            alert(data.message);

            navigate("/admin");

        } catch (err) {

            alert(err.message);

        } finally {

            setLoading(false);

        }

    };

    return (
        <>
            <Header />

            <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

                <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">

                    <h1 className="text-3xl font-bold text-center text-red-500 mb-8">
                        🎬 Add Movie
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        <input
                            type="text"
                            name="image"
                            placeholder="Poster URL"
                            value={formData.image}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />

                        <input
                            type="text"
                            name="name"
                            placeholder="Movie Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />

                        <input
                            type="text"
                            name="language"
                            placeholder="Language"
                            value={formData.language}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />

                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />

                        <input
                            type="text"
                            name="duration"
                            placeholder="Duration (2h 30m)"
                            value={formData.duration}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-lg"
                            required
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-bold"
                        >
                            {loading ? "Adding..." : "Add Movie"}
                        </button>

                    </form>

                </div>

            </div>

        </>
    );

}