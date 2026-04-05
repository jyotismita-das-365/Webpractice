const facilities = [
  {
    title: "Well Experienced Teachers",
    description:
      "Dedicated faculty with strong academic knowledge and real-world experience.",
    color: "from-black to-slate-500 dark:from-green-600 dark:to-emerald-500",
  },
  {
    title: "High Technology Labs",
    description:
      "Modern labs with updated equipment for hands-on practical learning.",
    color: "from-black to-slate-500 dark:from-green-600 dark:to-emerald-500",
  },
  {
    title: "Hostel Facilities",
    description:
      "Comfortable and secure hostel rooms with essential student-friendly amenities.",
    color: "from-black to-slate-500 dark:from-green-600 dark:to-emerald-500",
  },
  {
    title: "Wi-Fi Enabled Campus",
    description:
      "Fast and reliable internet access available across the entire campus.",
    color: "from-black to-slate-500 dark:from-green-600 dark:to-emerald-500",
  },
  {
    title: "Library Resources",
    description:
      "A rich collection of books, journals, and digital study materials.",
    color: "from-black to-slate-500 dark:from-green-600 dark:to-emerald-500",
  },
  {
    title: "Smart Classrooms",
    description:
      "Interactive learning spaces with projectors and modern teaching tools.",
    color: "from-black to-slate-500 dark:from-green-600 dark:to-emerald-500",
  },
  {
    title: "Sports Complex",
    description:
      "Indoor and outdoor sports facilities for fitness and recreation.",
    color: "from-black to-slate-500 dark:from-green-600 dark:to-emerald-500",
  },
  {
    title: "Cafeteria",
    description: "Hygienic and affordable food options for students and staff.",
    color: "from-black to-slate-500 dark:from-green-600 dark:to-emerald-500",
  },
];

const Facilities = () => {
  return (
    <section className="min-h-screen bg-red-200 px-4 py-12 transition-colors duration-300 dark:bg-slate-800 sm:px-6 lg:px-8">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl lg:text-5xl">
            Better Facilities for Better Learning
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
            Explore the modern facilities designed to support academics,
            comfort, and student life.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-lg font-bold text-white shadow-md transition group-hover:scale-105`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
