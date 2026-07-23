import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./frontend-movie/home.js";
import Login from "./frontend-movie/login.js";
import Movie from "./frontend-movie/movie.js";
import Booking from "./frontend-movie/booking.js";
import Signup from "./frontend-movie/signup.js";
import Help from "./frontend-movie/help.js";
import Ticket from "./frontend-movie/ticket.js";
import Payment from "./frontend-movie/payment.js";
import Profile from "./frontend-movie/profile.js";
import ProtectedRoute from "./frontend-movie/ProtectedRoute";
import Admin from "./frontend-movie/admin.js";
import AddMovie from "./frontend-movie/addMovie.js";
import ViewBooking from "./frontend-movie/viewBooking.js";
import ViewUser from "./frontend-movie/viewUser.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />

        <Route
          path="/movie"
          element={

            <Movie />
          }
        />

        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ticket"
          element={
            <ProtectedRoute>
              <Ticket />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/help"
          element={
            <Help />
          }
        />

        <Route
          path="/admin/add-movie"
          element={<AddMovie />}
        />

       

        <Route
          path="/admin/view-booking"
          element={<ViewBooking />}
        />

        <Route
          path="/admin/view-user"
          element={<ViewUser />}
        />


      </Routes>
    </BrowserRouter>
  )
}
export default App;