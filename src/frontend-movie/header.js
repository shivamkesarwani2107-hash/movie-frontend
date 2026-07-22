import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
    FaBars,
    FaTimes,
    FaHome,
    FaFilm,
    FaTicketAlt,
    FaUserCircle,
    FaQuestionCircle,
    FaSearch,
    FaSignOutAlt,
    FaSignInAlt,
} from "react-icons/fa";

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);

    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };

    const activeClass = (path) =>
        location.pathname === path
            ? "text-red-500"
            : "text-white hover:text-red-500";

    return (
        <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">

            <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">


                <div
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <span className="text-3xl">🎬</span>

                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
                        MovieTicket
                    </h1>
                </div>

                <div className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-6 font-medium text-sm lg:text-base">

                    <button
                        onClick={() => navigate("/")}
                        className={activeClass("/")}
                    >
                        <FaHome className="inline mr-1" />
                        Home
                    </button>

                    <button
                        onClick={() => navigate("/movie")}
                        className={activeClass("/movie")}
                    >
                        <FaFilm className="inline mr-1" />
                        Movies
                    </button>

                    <button
                        onClick={() => navigate("/booking")}
                        className={activeClass("/booking")}
                    >
                        <FaTicketAlt className="inline mr-1" />
                        Booking
                    </button>

                    <button
                        onClick={() => navigate("/profile")}
                        className={activeClass("/profile")}
                    >
                        <FaUserCircle className="inline mr-1" />
                        Profile
                    </button>

                    <button
                        onClick={() => navigate("/help")}
                        className={activeClass("/help")}
                    >
                        <FaQuestionCircle className="inline mr-1" />
                        Help
                    </button>

                    {token ? (
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
                        >
                            <FaSignOutAlt className="inline mr-2" />
                            Logout
                        </button>
                    ) : (
                        <button
                            onClick={() => navigate("/login")}
                            className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
                        >
                            <FaSignInAlt className="inline mr-2" />
                            Login
                        </button>
                    )}

                </div>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

            </div>

            {menuOpen && (

                <div className="md:hidden bg-gray-900 px-4 py-4 space-y-3 shadow-xl">

                    <div className="flex items-center bg-white rounded-lg overflow-hidden">

                        <FaSearch className="text-gray-500 ml-3" />

                        <input
                            type="search"
                            placeholder="Search Movies..."
                            className="w-full px-3 py-2 outline-none text-black"
                        />

                    </div>

                    <button
                        onClick={() => {
                            navigate("/");
                            setMenuOpen(false);
                        }}
                        className="block w-full text-left py-2 border-b border-gray-700"
                    >
                        🏠 Home
                    </button>

                    <button
                        onClick={() => {
                            navigate("/movie");
                            setMenuOpen(false);
                        }}
                        className="block w-full text-left"
                    >
                        🎬 Movies
                    </button>

                    <button
                        onClick={() => {
                            navigate("/booking");
                            setMenuOpen(false);
                        }}
                        className="block w-full text-left"
                    >
                        🎟 Booking
                    </button>

                    <button
                        onClick={() => {
                            navigate("/profile");
                            setMenuOpen(false);
                        }}
                        className="block w-full text-left"
                    >
                        👤 Profile
                    </button>

                    <button
                        onClick={() => {
                            navigate("/help");
                            setMenuOpen(false);
                        }}
                        className="block w-full text-left"
                    >
                        ❓ Help
                    </button>

                    {token ? (

                        <button
                            onClick={handleLogout}
                            className="w-full bg-red-500 py-2 rounded-lg"
                        >
                            Logout
                        </button>

                    ) : (

                        <button
                            onClick={() => {
                                navigate("/login");
                                setMenuOpen(false);
                            }}
                            className="w-full bg-green-500 py-2 rounded-lg"
                        >
                            Login
                        </button>

                    )}

                </div>

            )}

        </header>
    );
}

export default Header;