import { Link } from "react-router-dom";

const Footer = ({ theme }) => {
  return (
    <footer
      className={`border-t ${
        theme === "light"
          ? "border-red-300/30 bg-red-700"
          : "border-white/10 bg-slate-900"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div
          className={`grid gap-8 md:grid-cols-4 ${
            theme === "light" ? "text-red-50" : "text-slate-200"
          }`}
        >
          <div>
            <h3 className="font-serif text-2xl font-extrabold text-amber-100 sm:text-3xl">
              SSIET
            </h3>
            <p className="mt-2 max-w-xs text-sm text-red-50">
              Where Learning Meets Excellence
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase text-yellow-300">
              Quick Links
            </h4>
            <div className="mt-3 grid gap-2 text-sm">
              <Link
                to="/"
                className="text-red-50 transition hover:text-amber-100"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-red-50 transition hover:text-amber-100"
              >
                About
              </Link>
              <Link
                to="/department"
                className="text-red-50 transition hover:text-amber-100"
              >
                Department
              </Link>
              <Link
                to="/contact"
                className="text-red-50 transition hover:text-amber-100"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase text-yellow-300">
              Important
            </h4>
            <div className="mt-3 grid gap-2 text-sm">
              <Link
                to="/department"
                className="text-red-50 transition hover:text-amber-100"
              >
                Privacy Policy
              </Link>
              <Link
                to="/department"
                className="text-red-50 transition hover:text-amber-100"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/department"
                className="text-red-50 transition hover:text-amber-100"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="text-red-50 transition hover:text-amber-100"
              >
                Support
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase text-yellow-300">
              Contact
            </h4>
            <div className="mt-3 grid gap-2 text-sm">
              <a
                href="mailto:sukhmani@gmail.com"
                className="text-red-50 transition hover:text-amber-100"
              >
                sukhmani@gmail.com
              </a>
              <a
                href="tel:+918699609193"
                className="text-red-50 transition hover:text-amber-100"
              >
                +91 86996 09193
              </a>
              <span className="text-red-50">Chandigarh, India</span>
            </div>
          </div>
        </div>

        <p
          className={`mt-8 border-t pt-5 text-center text-xs ${
            theme === "light"
              ? "border-red-200/25 text-red-50"
              : "border-white/10 text-slate-300"
          }`}
        >
          © {new Date().getFullYear()} SSIET. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
