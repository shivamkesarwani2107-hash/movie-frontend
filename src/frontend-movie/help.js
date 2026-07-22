import Header from "./header";

export default function Help() {
    return (
        <>
            <Header />

            <div className="min-h-screen bg-gray-100 py-10">

                <h1 className="text-4xl mt-4 font-bold text-center text-red-500 mb-8">
                    🆘 Help & Support
                </h1>

                <div className="max-w-4xl mx-auto space-y-6">

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">
                            🎟️ Booking Guide
                        </h2>

                        <ul className="list-disc ml-6 space-y-2">
                            <li>Select a Movie</li>
                            <li>Choose Theatre</li>
                            <li>Select Seats</li>
                            <li>Complete Payment</li>
                            <li>Download Your Ticket</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">
                            💳 Payment Methods
                        </h2>

                        <p>✔ UPI</p>
                        <p>✔ Credit Card</p>
                        <p>✔ Debit Card</p>
                        <p>✔ Net Banking</p>
                        <p>✔ Wallets</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">
                            ❓ Frequently Asked Questions
                        </h2>

                        <p>🎟️ How can I book a movie ticket?</p>
                        <p>💳 Which payment methods are supported?</p>
                        <p>❌ How can I cancel my booking?</p>
                        <p>💰 Will I get a refund after cancellation?</p>
                        <p>📧 I didn't receive my booking confirmation.</p>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">

                        <div className="grid md:grid-cols-2 gap-8">

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">
                                    📍 Contact Information
                                </h2>

                                <p className="mb-3">
                                    📧 <strong>Email:</strong> support@movieticket.com
                                </p>

                                <p className="mb-3">
                                    📱 <strong>Phone:</strong> +91 9336991973
                                </p>

                                <p className="mb-3">
                                    📍 <strong>Address:</strong> Prayagraj, Uttar Pradesh, India
                                </p>

                                <p>
                                    🕒 <strong>Support Hours:</strong> 9:00 AM - 9:00 PM
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">
                            📜 Terms & Conditions
                        </h2>

                        <p>• Tickets once booked cannot be cancelled after show time.</p>
                        <p>• Please arrive at least 30 minutes before the movie starts.</p>
                        <p>• Carry a valid ID if requested by the theatre.</p>
                    </div>



                </div>
            </div>
        </>
    );
}