const AboutUs = () => {
  return (
    <section className="relative overflow-hidden bg-red-100 px-4 py-16 transition-colors duration-300 dark:bg-slate-400 sm:px-6 lg:px-12">
      {/* Decore section */}
      <div className="relative mx-auto max-w-6xl">
        <div className="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-2xl backdrop-blur-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/80 sm:p-10">
          <div className="mb-8 text-center">
            <h2 className="mt-4 text-3xl font-extrabold text-red-600 dark:text-emerald-200 sm:text-5xl">
              About Us
            </h2>
          </div>

          <p className="mx-auto mb-10 max-w-4xl text-center text-base leading-relaxed text-gray-700 dark:text-slate-300 sm:text-lg">
            Sri Sukhmani Institute of Engineering & Technology is one of the
            oldest and most popular Institutions of Punjab. The institute is
            strategically located on Delhi-Chandigarh highway, just 10 minutes
            drive from Chandigarh.
          </p>

          <p className="mx-auto mb-10 max-w-4xl text-center text-base leading-relaxed text-gray-700 dark:text-slate-300 sm:text-lg">
            Established in 1998, SSIET has become a
            premium Educational Institute. The Institute, a venture of Sri
            Sukhmani Group of Institutions, caters to offer best education in
            the fields of Engineering, Computer Application & Management.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border border-blue-200 bg-slate-200 p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-900 dark:bg-slate-700">
              <div className="mb-3 text-3xl">🌟</div>
              <h3 className="mb-3 text-xl font-bold text-pink-900 dark:text-emerald-500">
                Vision
              </h3>
              <p className="leading-relaxed text-gray-700 dark:text-slate-300">
                We envisage Professional proficiency, Progressive environment
                and Global Leadership in Education and Career Enhancement.
              </p>
            </div>

            <div className="group rounded-2xl border border-blue-200 bg-slate-200 p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-900 dark:bg-slate-700">
              <div className="mb-3 text-3xl">🎯</div>
              <h3 className="mb-3 text-xl font-bold text-pink-900 dark:text-emerald-500">
                Mission
              </h3>
              <p className="leading-relaxed text-gray-700 dark:text-slate-300">
                To mould young pupils into competent and responsible
                professionals by instilling the pledge of "Service before Self".
              </p>
            </div>

            <div className="group rounded-2xl border border-blue-200 bg-slate-200 p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-900 dark:bg-slate-700">
              <div className="mb-3 text-3xl">💡</div>
              <h3 className="mb-3 text-xl font-bold text-pink-900 dark:text-emerald-500">
                Core Values
              </h3>
              <p className="leading-relaxed text-gray-700 dark:text-slate-300">
                In addition to the classroom teachings, SSIET strives to add
                state-of-the-art education technologies every year for the
                benefit of the faculty and students for effective teaching,
                learning, assessment and evaluation to make them future-ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
