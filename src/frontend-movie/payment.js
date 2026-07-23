import Header from "./header";
import { useNavigate } from "react-router-dom";

export default function Payment() {
    const navigate = useNavigate();

    const booking = JSON.parse(localStorage.getItem("booking"));
    const handlePayment = async () => {

        try {

            const response = await fetch(`${process.env.REACT_APP_API_URL}/create-order`, {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    movieName: booking.movieName,

                    seats: booking.seats

                })

            });

            const order = await response.json();

            const options = {

                key: process.env.REACT_APP_RAZORPAY_KEY_ID,

                amount: order.order.amount,

                currency: order.order.currency,

                name: "Movie Ticket Booking",

                description: "Movie Ticket",

                order_id: order.order.id,

                handler: async function (response) {

                    console.log(response);

                    alert("Payment Successful");

                    navigate("/ticket");

                },

                prefill: {

                    name: "Shivam",

                    email: "shivam@gmail.com"

                },

                theme: {

                    color: "#22c55e"

                }

            };

            const razorpay = new window.Razorpay(options);

            razorpay.open();

        }

        catch (err) {

            console.log(err);

            alert("Payment Failed");

        }

    }
    return (
        <>
            <Header />

            <div className="min-h-screen bg-gray-100 flex justify-center items-center">

                <div className="bg-white w-[420px] p-6 rounded-lg shadow-lg">

                    <h1 className="text-2xl underline font-bold text-center text-green-600 mb-6">
                         Payment
                    </h1>

                    <input
                        type="text"
                        placeholder="user@paytm"
                        className="w-full border rounded-md p-3 mt-2 mb-5 outline-none"
                    />

                    <div className="border rounded-md p-4 mb-5">

                        <div className="flex justify-between mb-2">
                            <span>🎬 Movie</span>
                            <span>{booking?.movieName}</span>
                        </div>

                        <div className="flex justify-between mb-2">
                            <span>💺 Seats</span>
                            <span>{booking?.seats}</span>
                        </div>

                        <div className="flex justify-between mb-2">
                            <span>🏢 Theatre</span>
                            <span>{booking?.theatre}</span>
                        </div>

                        <hr className="my-3" />

                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span className="text-red-500">
                                00  
                            </span>
                        </div>

                    </div>

                    <button
                        onClick={handlePayment}
                        className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600">

                        Pay Now

                    </button>

                </div>

            </div>

        </>
    );
}