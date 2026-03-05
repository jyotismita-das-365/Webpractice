import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import collegelogo from "../assets/logo.png";
import Department from "./Department";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Facilities from "./Facilities";
import Placement from "./Placement";
import Banner from "./Banner";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="bg-gradient-to-t from-red-500 to-red-600 flex justify-between items-center p-2">
          <img
            src={collegelogo}
            alt="College Logo"
            className="h-20 border rounded-full mx-4"
          />
          <div className="flex justify-evenly gap-10 text-white font-semibold text-lg">
            <Link to="/">Home</Link>
            <Link to="/Department">Department</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/AboutUs">About Us</Link>
            <Link to="/Facilities">Facilities</Link>
            <Link to="/Placement">Placement</Link>
          </div>
        </nav>

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
