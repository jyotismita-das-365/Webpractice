import SectionTitle from "../components/SectionTitle";
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
  allengers,
  blueStar,
  eClerx,
  emicon,
  erginus,
  HCL,
  indSphinx,
  netSmartz,
  pernodRicard,
  sasvat,
  shipManagement,
  techMahindra,
  TOI,
];

const PlacementPage = () => {
  return (
    <div className="space-y-10">
      <SectionTitle
        title="Our Placement Partners"
        subtitle="Trusted by leading companies across industries."
      />

      <section className="grid gap-4 sm:grid-cols-3 md:grid-cols-4">
        {[
          { label: "Placement Support", value: "50%" },
          { label: "Recruiting Companies", value: "30+" },
          { label: "Highest Package", value: "4 LPA" },
          { label: "Internship Partners", value: "20+" },
        ].map((stat) => (
          <article key={stat.label} className="store-card text-center">
            <p className="text-3xl font-bold text-green-600">{stat.value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white">
              {stat.label}
            </p>
          </article>
        ))}
      </section>

      <section className="store-shell">
        <h3 className="font-serif text-2xl text-slate-900">Our Recruiters</h3>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {companies.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="rounded-xl border border-red-200/25 bg-white p-3 shadow-[0_8px_20px_rgba(127,29,29,0.08)]"
            >
              <img
                src={logo}
                alt={`Recruiter logo ${index + 1}`}
                className="h-12 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlacementPage;
