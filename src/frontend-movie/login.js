import Header from "./header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      });

      const data = await response.json();
      if (response.ok) {

        localStorage.setItem("token", data.token);

        localStorage.setItem("user", JSON.stringify(data.user));

        alert(data.message);

        setEmail("");
        setPassword("");

        navigate("/");

      }
      else {

        alert(data.message);

      }

    } catch (err) {
      alert("Server Error");
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen flex justify-center items-center bg-gray-100">

        <div className="bg-white w-[400px] p-8 rounded-lg shadow-lg">

          <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
            Login
          </h1>



          <input
            type="email"
            placeholder="📧 Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 mb-4 outline-none text-black"
          />

          <input
            type="password"
            placeholder="🔒 Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 mb-6 outline-none text-black"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600"
          >
            Login
          </button>

          <p className="text-center mt-5 text-gray-600">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-red-500 cursor-pointer font-semibold"
            >
              Create Account
            </span>
          </p>

        </div>

      </div>

    </>
  );
}