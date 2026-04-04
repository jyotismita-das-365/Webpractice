import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-red-600 text-red-100 transition-colors duration-300 dark:bg-slate-800 dark:text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-white dark:text-slate-100">
              SSIET
            </h2>
          </div>
          <p className="mt-3 text-sm text-red-100/80 dark:text-slate-400">
            Where Learning Meets Excellence
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white dark:text-slate-100">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="/"
                className="text-red-100 transition-colors hover:text-white dark:text-slate-400 dark:hover:text-cyan-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/aboutus"
                className="text-red-100 transition-colors hover:text-white dark:text-slate-400 dark:hover:text-cyan-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/department"
                className="text-red-100 transition-colors hover:text-white dark:text-slate-400 dark:hover:text-cyan-300"
              >
                Department
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-red-100 transition-colors hover:text-white dark:text-slate-400 dark:hover:text-cyan-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white dark:text-slate-100">
            Important
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="/department"
                className="text-red-100 transition-colors hover:text-white dark:text-slate-400 dark:hover:text-cyan-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/department"
                className="text-red-100 transition-colors hover:text-white dark:text-slate-400 dark:hover:text-cyan-300"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/department"
                className="text-red-100 transition-colors hover:text-white dark:text-slate-400 dark:hover:text-cyan-300"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/department"
                className="text-red-100 transition-colors hover:text-white dark:text-slate-400 dark:hover:text-cyan-300"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white dark:text-slate-100">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="mailto:support@webpractice.com"
                className="text-red-100 transition-colors hover:text-white dark:text-slate-400 dark:hover:text-cyan-300"
              >
                sukhmani@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+911234567890"
                className="text-red-100 transition-colors hover:text-white dark:text-slate-400 dark:hover:text-cyan-300"
              >
                +91 86996 09193
              </a>
            </li>
            <li>
              <a
                href="/location"
                className="text-red-100 transition-colors hover:text-white dark:text-slate-400 dark:hover:text-cyan-300"
              >
                Chandigarh, India
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-red-600 py-4 text-center text-sm text-red-100/80 dark:border-slate-800 dark:text-slate-500">
        <p>© {year} SSIET. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
