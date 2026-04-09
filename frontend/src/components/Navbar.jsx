import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";

const baseNavItems = [
  { label: "Home", to: "/" },
  { label: "Department", to: "/department" },
  { label: "About Us", to: "/about" },
  { label: "Facilities", to: "/facilities" },
  { label: "Placement", to: "/placement" },
  { label: "Admissions", to: "/admissions" },
  { label: "Contact", to: "/contact" },
];

const Navbar = ({ theme, toggleTheme }) => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    ...baseNavItems,
    ...(user?.role === "teacher"
      ? [{ label: "Teacher", to: "/teacher-host" }]
      : []),
    ...(user?.role === "student"
      ? [{ label: "Student Store", to: "/student-store" }]
      : []),
  ];

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    handleCloseMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMobileThemeToggle = () => {
    toggleTheme();
    handleCloseMenu();
  };

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl ${
        theme === "light" ? "bg-white/95" : "bg-slate-900/95"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-3 py-3 sm:px-4 sm:py-4 lg:px-6">
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="group inline-flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-red-300/50 bg-white/90 sm:h-11 sm:w-11 sm:rounded-xl">
              <img
                src={logo}
                alt="Sri Sukhmani logo"
                className="h-7 w-7 object-contain sm:h-9 sm:w-9"
              />
            </span>
          </Link>

          {/* Desktop Nav - Hidden on mobile */}
          <nav
            className={`hidden flex-wrap justify-end gap-1 rounded-full border p-1 md:flex lg:gap-2 ${
              theme === "light"
                ? "border-red-200/60 bg-white"
                : "border-red-300/20 bg-slate-800"
            }`}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 text-xs font-medium transition sm:px-4 sm:py-2 sm:text-sm ${
                    isActive
                      ? "bg-red-600 text-white"
                      : theme === "light"
                        ? "text-slate-800 hover:bg-red-100"
                        : "text-slate-200 hover:bg-slate-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions - Hidden on mobile */}
          <div className="hidden items-center gap-1 sm:gap-2 md:flex">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className={`rounded-lg border px-2 py-1.5 text-xs font-semibold uppercase tracking-wider transition sm:rounded-xl sm:px-3 sm:py-2 ${
                    theme === "light"
                      ? "border-red-300/55 bg-white/90 text-red-800 hover:bg-red-50"
                      : "border-red-200/30 bg-slate-800 text-red-100 hover:bg-slate-700"
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="rounded-lg bg-red-600 px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-red-700 sm:rounded-xl sm:px-3 sm:py-2"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <div className="rounded-lg border border-red-300/40 bg-red-500/10 px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-100 sm:rounded-xl sm:px-3 sm:py-2">
                  {user.role}
                </div>
                <Link
                  to={
                    user.role === "teacher" ? "/teacher-host" : "/student-store"
                  }
                  className="rounded-lg bg-red-600 px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-red-700 sm:rounded-xl sm:px-3 sm:py-2"
                >
                  {user.role === "teacher" ? "Host" : "Store"}
                </Link>
              </>
            )}
            <button
              type="button"
              onClick={toggleTheme}
              className={`inline-flex shrink-0 items-center gap-1 rounded-lg border px-2 py-1.5 text-xs font-semibold uppercase transition sm:rounded-xl sm:px-3 sm:py-2 sm:gap-2 ${
                theme === "light"
                  ? "border-red-300/55 bg-red-50 text-red-800 hover:bg-red-100"
                  : "border-red-200/30 bg-slate-800 text-red-100 hover:bg-slate-700"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon size={14} className="sm:size-4" />
              ) : (
                <Sun size={14} className="sm:size-4" />
              )}
              <span className="hidden sm:inline">
                {theme === "light" ? "Dark" : "Light"}
              </span>
            </button>
            {user && (
              <button
                type="button"
                onClick={logout}
                className="rounded-lg border border-red-300 bg-red-50 px-2 py-1.5 text-xs font-semibold uppercase text-red-900 transition hover:bg-red-200 sm:rounded-xl sm:px-3 sm:py-2"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={handleToggleMenu}
            className={`inline-flex shrink-0 items-center justify-center rounded-lg border p-1.5 transition sm:p-2 sm:rounded-xl md:hidden ${
              theme === "light"
                ? "border-red-300/50 bg-red-50 text-red-800 hover:bg-red-100"
                : "border-red-200/30 bg-slate-800 text-red-100 hover:bg-slate-700"
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav
            className={`mt-3 grid gap-2 rounded-xl border p-2 sm:mt-4 sm:gap-3 sm:p-3 md:hidden ${
              theme === "light"
                ? "border-red-200/60 bg-white"
                : "border-red-300/20 bg-slate-800"
            }`}
          >
            <button
              type="button"
              onClick={handleMobileThemeToggle}
              className={`flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition sm:rounded-xl sm:px-4 sm:py-2.5 ${
                theme === "light"
                  ? "border-red-300/55 bg-red-50 text-red-800 hover:bg-red-100"
                  : "border-red-200/30 bg-slate-800 text-red-100 hover:bg-slate-700"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>

            {!user ? (
              <>
                <Link
                  to="/login"
                  onClick={handleNavClick}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition sm:rounded-xl sm:px-4 sm:py-2.5 ${
                    theme === "light"
                      ? "text-slate-800 hover:bg-red-100"
                      : "text-slate-100 hover:bg-slate-700"
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={handleNavClick}
                  className="rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-700 sm:rounded-xl sm:px-4 sm:py-2.5"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={
                    user.role === "teacher" ? "/teacher-host" : "/student-store"
                  }
                  onClick={handleNavClick}
                  className="rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-700 sm:rounded-xl sm:px-4 sm:py-2.5"
                >
                  {user.role === "teacher" ? "Teacher" : "Student Store"}
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    handleCloseMenu();
                  }}
                  className="rounded-lg px-3 py-2 text-left text-sm font-medium text-white transition hover:bg-slate-700 sm:rounded-xl sm:px-4 sm:py-2.5"
                >
                  Logout ({user.role})
                </button>
              </>
            )}

            <div className="my-1 border-t border-red-300/30" />

            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition sm:rounded-xl sm:px-4 sm:py-2.5 ${
                    isActive
                      ? "bg-red-600 text-white"
                      : theme === "light"
                        ? "text-slate-800 hover:bg-red-100"
                        : "text-slate-100 hover:bg-slate-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
