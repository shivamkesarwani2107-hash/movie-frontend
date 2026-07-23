import Header from "./header";
import { useQuery } from "@tanstack/react-query";

export default function ViewUser() {

    const getUsers = async () => {

        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        return response.json();
    };

    const {
        data,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
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

                    <h1 className="text-4xl font-bold text-green-600">
                        👥 Users
                    </h1>

                    <div className="bg-white shadow-lg rounded-xl px-6 py-4">

                        <p className="text-gray-500">
                            Total Users
                        </p>

                        <h2 className="text-3xl font-bold text-green-600">
                            {data.totalUsers}
                        </h2>

                    </div>

                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">

                    <table className="w-full">

                        <thead>

                            <tr className="bg-green-600 text-white">

                                <th className="p-4">Name</th>
                                <th className="p-4">Email</th>
                                <th className="p-4">Joined</th>

                            </tr>

                        </thead>

                        <tbody>

                            {data.users.map((user) => (

                                <tr
                                    key={user._id}
                                    className="border-b hover:bg-gray-100 text-center"
                                >

                                    <td className="p-4 font-semibold">
                                        {user.name}
                                    </td>

                                    <td className="p-4">
                                        {user.email}
                                    </td>

                                    <td className="p-4">
                                        {new Date(user.createdAt).toLocaleDateString()}
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