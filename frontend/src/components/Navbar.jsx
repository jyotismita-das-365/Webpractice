import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Sun, ShoppingCart, Menu, X } from "lucide-react";
import collegelogo from "../assets/logo.png";
import Department from "./Department";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Facilities from "./Facilities";
import Placement from "./Placement";
import Banner from "./Banner";
import Footer from "./Footer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <BrowserRouter>
        <nav className="bg-gradient-to-t from-red-500 to-red-600 flex justify-between items-center p-2">
          <img
            src={collegelogo}
            alt="College Logo"
            className="h-20 border rounded-full mx-4"
          />
          
          {/* Deskto menu */}
          <div className="flex justify-evenly gap-10 text-white font-semibold text-lg">
            <Link to="/">Home</Link>
            <Link to="/Department">Department</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/AboutUs">About Us</Link>
            <Link to="/Facilities">Facilities</Link>
            <Link to="/Placement">Placement</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 text-gray-800">
            <Link to="/ShoppingCart">
            <ShoppingCart className="cursor-pointer hover:scale-110 transition"
              size={24}/>
            </Link>
            
            <Sun
              className="cursor-pointer hover:scale-110 transition"
              size={24}
            />

            {/* Mobile menu button */}
            <button onClick={toggleMenu}
              className="md:hidden hover:scale-110 transition">
              {isOpen ? <X size={28}/> : <Menu size={28} />}
            </button>
            </div>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t-2 border-gray-200 flex flex-col gap-4 p-6">
            <Link to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-gray-600 font-semibold">Home</Link>

              <Link
              to="/product"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-gray-600 font-semibold"
            >
              Product
            </Link>
          </div>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Department />
                <AboutUs />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/Department"
            element={
              <>
                <Department />
                <Footer />
              </>
            }
          />
          <Route
            path="/Contact"
            element={
              <>
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/AboutUs"
            element={
              <>
                <AboutUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/Facilities"
            element={
              <>
                <Facilities />
                <Footer />
              </>
            }
          />
          <Route
            path="/Placement"
            element={
              <>
                <Placement />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
