import React from "react";
import allengers from "../assets/placement/allengers.png";
import blueStar from "../assets/placement/blueStar.png";
import eClerx from "../assets/placement/eClerx.png";
import emicon from "../assets/placement/emicon.png";
import erginus from "../assets/placement/erginus.png";
import HCL from "../assets/placement/HCL.png";
import indSphinx from "../assets/placement/indSphinx.png";
import netSmartz from "../assets/placement/netSmartz.png";
import pernodRicard from "../assets/placement/pernodRicard.png";
import sasvat from "../assets/placement/sasvat.png";
import shipManagement from "../assets/placement/shipManagement.png";
import techMahindra from "../assets/placement/techMahindra.png";
import TOI from "../assets/placement/TOI.png";

const companies = [
  { id: 1, name: "Allengers", image: allengers },
  { id: 2, name: "BlueStar", image: blueStar },
  { id: 3, name: "EClerx", image: eClerx },
  { id: 4, name: "Emicon", image: emicon },
  { id: 5, name: "Erginus", image: erginus },
  { id: 6, name: "HCL", image: HCL },
  { id: 7, name: "IndSphinx", image: indSphinx },
  { id: 8, name: "NetSmartz", image: netSmartz },
  { id: 9, name: "PernodRicard", image: pernodRicard },
  { id: 10, name: "Sasvat", image: sasvat },
  { id: 11, name: "ShipManagement", image: shipManagement },
  { id: 12, name: "TechMahindra", image: techMahindra },
  { id: 13, name: "TOI", image: TOI },
];

const Placement = () => {
  return (
    <section className="relative overflow-hidden bg-red-200 py-16 transition-colors duration-300 dark:bg-slate-800 md:py-20">
      <div className="section-container relative px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 dark:text-cyan-300">
            Placements
          </p>
          <h1 className="mt-4 bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            Our Placement Partners
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Trusted by leading companies across industries.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {companies.map((item, idx) => (
            <div
              key={item.id}
              className="group relative rounded-2xl border border-blue-100 bg-white/90 p-4 backdrop-blur-md transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:bg-white hover:shadow-[0_10px_30px_rgba(59,130,246,0.18)] dark:border-slate-800 dark:bg-slate-900/90 dark:hover:bg-slate-900 dark:hover:shadow-[0_10px_30px_rgba(8,15,30,0.4)]"
            >
              <div
                className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${
                  [
                    "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
                    "from-cyan-500/20 via-sky-500/10 to-blue-500/20",
                    "from-indigo-500/20 via-violet-500/10 to-blue-500/20",
                    "from-blue-500/20 via-cyan-500/10 to-sky-500/20",
                  ][idx % 4]
                } opacity-0 transition duration-300 group-hover:opacity-100`}
              />
              <div className="relative flex h-24 items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-16 w-auto object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="relative mt-3 truncate text-center text-sm font-semibold text-slate-800 dark:text-slate-100">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Placement;
