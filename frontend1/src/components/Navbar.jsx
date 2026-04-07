import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
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
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";

    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <BrowserRouter>
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-rose-600 px-4 py-2 text-white shadow-lg shadow-black/10 backdrop-blur-md transition-colors duration-300 dark:border-1 dark:border-rose-600 dark:bg-slate-950 dark:shadow-black/30">
        <img
          src={collegelogo}
          alt="College Logo"
          className="h-14 rounded-full border border-white/70 sm:h-16 md:h-20"
        />

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 text-base font-semibold lg:text-lg md:flex">
          <Link
            to="/"
            className="transition hover:text-red-100 dark:hover:text-cyan-300"
          >
            Home
          </Link>
          <Link
            to="/department"
            className="transition hover:text-red-100 dark:hover:text-cyan-300"
          >
            Department
          </Link>
          <Link
            to="/contact"
            className="transition hover:text-red-100 dark:hover:text-cyan-300"
          >
            Contact
          </Link>
          <Link
            to="/aboutus"
            className="transition hover:text-red-100 dark:hover:text-cyan-300"
          >
            About Us
          </Link>
          <Link
            to="/facilities"
            className="transition hover:text-red-100 dark:hover:text-cyan-300"
          >
            Facilities
          </Link>
          <Link
            to="/placement"
            className="transition hover:text-red-100 dark:hover:text-cyan-300"
          >
            Placement
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 p-2 backdrop-blur transition hover:bg-white/20"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={toggleMenu}
            className="text-white transition hover:scale-110"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 border-t border-slate-200 bg-white px-6 py-4 text-slate-800 shadow-lg transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 md:hidden">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="font-semibold transition hover:text-red-600 dark:hover:text-cyan-300"
          >
            Home
          </Link>
          <Link
            to="/department"
            onClick={() => setIsOpen(false)}
            className="font-semibold transition hover:text-red-600 dark:hover:text-cyan-300"
          >
            Department
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="font-semibold transition hover:text-red-600 dark:hover:text-cyan-300"
          >
            Contact
          </Link>
          <Link
            to="/aboutus"
            onClick={() => setIsOpen(false)}
            className="font-semibold transition hover:text-red-600 dark:hover:text-cyan-300"
          >
            About Us
          </Link>
          <Link
            to="/facilities"
            onClick={() => setIsOpen(false)}
            className="font-semibold transition hover:text-red-600 dark:hover:text-cyan-300"
          >
            Facilities
          </Link>
          <Link
            to="/placement"
            onClick={() => setIsOpen(false)}
            className="font-semibold transition hover:text-red-600 dark:hover:text-cyan-300"
          >
            Placement
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
              <Facilities />
              <Placement />
              <Footer />
            </>
          }
        />
        <Route
          path="/department"
          element={
            <>
              <Department />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/aboutus"
          element={
            <>
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/facilities"
          element={
            <>
              <Facilities />
              <Footer />
            </>
          }
        />
        <Route
          path="/placement"
          element={
            <>
              <Placement />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
