import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronsRight } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import LoadingState from "../components/LoadingState";
import useAsync from "../hooks/useAsync";
import { fetchStats } from "../services/api";
import { departments } from "../data/departments";
import banner1 from "../assets/banner/banner1.png";
import banner2 from "../assets/banner/banner2.png";
import banner3 from "../assets/banner/banner3.png";

const facilitiesPreview = [
  {
    title: "Modern Labs",
    description:
      "Hands-on mechanical, electrical and computing labs designed for practical learning.",
  },
  {
    title: "Library & Digital Access",
    description:
      "A focused reading environment with academic books, references, and online resources.",
  },
  {
    title: "Campus Support",
    description:
      "Mentorship, placement guidance, and student support for career-ready growth.",
  },
];

const HomePage = () => {
  const { data: stats, loading } = useAsync(fetchStats);
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  const banners = [banner1, banner2, banner3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveBannerIndex((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [banners.length]);

  return (
    <div className="space-y-16">
      <section className="home-banner-card overflow-hidden rounded-3xl border">
        <div className="relative h-55 sm:h-75 lg:h-95">
          {banners.map((banner, index) => (
            <img
              key={banner}
              src={banner}
              alt={`Sri Sukhmani Institute campus banner ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                activeBannerIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-10">
            <div className="max-w-3xl space-y-3 sm:space-y-4 text-white">
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold leading-snug text-amber-100 drop-shadow-lg">
                Build your future with engineering excellence
              </h1>
              <p className="max-w-2xl text-sm sm:text-base lg:text-lg font-light text-red-100/90 leading-relaxed">
                Explore admissions, departments, placements, and vibrant student
                life—all in one place.
              </p>
              <div className="flex gap-2">
                {banners.map((banner, index) => (
                  <span
                    key={`${banner}-dot`}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      activeBannerIndex === index ? "bg-red-300" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-hero-panel grid items-center gap-8 rounded-3xl border p-6 backdrop-blur md:grid-cols-2 md:p-10">
        <div className="space-y-5">
          <h2 className="home-title font-serif text-4xl leading-tight sm:text-5xl">
            Welcome to SSIET
          </h2>
          <p className="home-copy max-w-xl">
            Sri Sukhmani Institute of Engineering & Technology is committed to
            practical learning, strong fundamentals, and career-focused
            engineering education.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/about"
              className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-500"
            >
              Know More
            </Link>
            <Link
              to="/admissions"
              className="rounded-full border border-red-300/45 bg-red-100 px-6 py-3 text-sm font-semibold text-red-900 transition hover:bg-red-200"
            >
              Admissions
            </Link>
          </div>
        </div>

        <div className="home-stat-panel rounded-3xl border p-6">
          <p className="home-accent mb-4 text-sm uppercase tracking-[0.18em]">
            Campus at a glance
          </p>
          {loading ? (
            <LoadingState text="Loading live campus stats" />
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <StatCard label="Students" value={stats?.students || 0} />
              <StatCard label="Faculty" value={stats?.faculty || 0} />
              <StatCard label="Clubs" value={stats?.clubs || 0} />
              <StatCard label="Placement %" value={stats?.placements || 0} />
            </div>
          )}
        </div>
      </section>

      <section className="space-y-6">
        <SectionTitle
          title="Facilities"
          subtitle="Campus resources that support daily learning and long-term growth."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {facilitiesPreview.map((facility) => (
            <article
              key={facility.title}
              className="home-dept-card rounded-2xl border p-5"
            >
              <h3 className="font-serif text-2xl text-white">
                {facility.title}
              </h3>
              <p className="home-copy mt-2 text-sm">{facility.description}</p>
            </article>
          ))}
        </div>
        <Link
          to="/facilities"
          className="inline-flex items-center gap-2 rounded-full border border-red-300/45 bg-red-100 px-5 py-2 text-sm font-semibold text-red-900"
        >
          View All Facilities
          <ChevronsRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="space-y-6">
        <SectionTitle
          title="Departments"
          subtitle="Each branch offers practical learning, expert guidance and a clear career path."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {departments.map((item) => (
            <div
              key={item.code}
              className="home-dept-card overflow-hidden rounded-2xl border"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
              />
              <div className="space-y-2 p-5">
                <h3 className="font-serif text-2xl text-white">{item.name}</h3>
                <p className="home-soft text-sm font-medium text-amber-100/90">
                  HOD: {item.hod}
                </p>
                <p className="home-copy mt-2 text-sm">{item.text}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link
                    to="/department"
                    className="rounded-full border border-red-300/45 bg-red-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-red-800"
                  >
                    View Details
                  </Link>
                  <a
                    href={item.syllabus}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-red-300/45 bg-red-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-red-900 hover:bg-red-200"
                  >
                    Syllabus
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-hero-panel rounded-3xl border p-6 md:p-10">
        <SectionTitle
          title="Contact"
          subtitle="Have a question about admissions, departments, or campus life? Reach out to us."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-500"
          >
            Contact Us
          </Link>
          <Link
            to="/events"
            className="rounded-full border border-red-300/45 bg-red-100 px-6 py-3 text-sm font-semibold text-red-900 transition hover:bg-red-200"
          >
            View Events
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
