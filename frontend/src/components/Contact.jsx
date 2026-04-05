const Contact = () => {
  return (
    <section className="w-full bg-red-200 px-4 py-10 transition-colors duration-300 dark:bg-slate-800 sm:px-6 lg:px-8">
      <div className="section-container rounded-2xl bg-white/95 p-6 shadow-lg backdrop-blur transition-colors duration-300 dark:bg-slate-950/90 dark:shadow-black/20 sm:p-8 lg:p-10">
        <h1 className="mb-8 text-center text-2xl font-bold text-red-500 dark:text-cyan-300 sm:text-3xl md:text-4xl">
          CONTACT US FOR ANY QUERY
        </h1>

        <form method="POST" className="space-y-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <label
              htmlFor="name"
              className="text-base font-medium text-red-500 dark:text-cyan-300 sm:w-40 sm:text-lg"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="h-11 w-full rounded-md border border-red-200 bg-white px-3 text-sm text-slate-900 outline-none ring-red-400 transition placeholder:text-slate-400 focus:border-red-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 sm:text-base"
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <label
              htmlFor="phone"
              className="text-base font-medium text-red-500 dark:text-cyan-300 sm:w-40 sm:text-lg"
            >
              Phone No
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter Your Phone Number"
              className="h-11 w-full rounded-md border border-red-200 bg-white px-3 text-sm text-slate-900 outline-none ring-red-400 transition placeholder:text-slate-400 focus:border-red-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 sm:text-base"
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
            <label
              htmlFor="description"
              className="text-base font-medium text-red-500 dark:text-cyan-300 sm:w-40 sm:pt-2 sm:text-lg"
            >
              Your Query
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              placeholder="Write your query..."
              className="w-full rounded-md border border-red-200 bg-white p-3 text-sm text-slate-900 outline-none ring-red-400 transition placeholder:text-slate-400 focus:border-red-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 sm:text-base"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus:ring-cyan-300 sm:text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
