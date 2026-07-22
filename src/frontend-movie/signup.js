import Header from "./header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigate("/login");
      } else {
        alert(data.message);
      }

    } catch (err) {
      alert("Server Error");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">

        <div className="bg-white w-full max-w-md p-6 sm:p-8 rounded-xl shadow-xl">

          <h1 className="text-3xl sm:text-4xl font-bold text-center text-green-500 mb-6">
            Signup
          </h1>

          <input
            type="text"
            placeholder="👤 Enter Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none text-black focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            placeholder="📧 Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none text-black focus:ring-2 focus:ring-green-400"
          />

          <input
            type="password"
            placeholder="🔒 Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 outline-none text-black focus:ring-2 focus:ring-green-400"
          />

          <input
            type="password"
            placeholder="🔐 Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 mb-6 outline-none text-black focus:ring-2 focus:ring-green-400"
          />

          <button
            onClick={handleSignup}
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Create Account
          </button>

          <p className="text-center mt-5 text-gray-600 text-sm sm:text-base">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-green-500 cursor-pointer font-semibold hover:underline"
            >
              Login
            </span>
          </p>

        </div>

      </div>

    </>
  );
}