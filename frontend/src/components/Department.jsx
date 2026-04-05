import { useNavigate } from "react-router-dom";
import cse from "../assets/department/cse_dept.jpg";
import civil from "../assets/department/civil_dept.jpg";
import mechanical from "../assets/department/me_dept.jpg";
import electrical from "../assets/department/ee_dept.jpg";

const Department = () => {
  const navigate = useNavigate();

  const departmentInfo = [
    {
      id: 1,
      name: "CSE",
      image: cse,
      hod: "Mrs. Ranju Marwaha",
      tag: "Work with computer",
    },
    {
      id: 2,
      name: "Civil",
      image: civil,
      hod: "Gunjan Morya",
      tag: "Work with stone",
    },
    {
      id: 3,
      name: "Mechanical",
      image: mechanical,
      hod: "Jyotismita Das",
      tag: "Work with machine",
    },
    {
      id: 4,
      name: "Electrical",
      image: electrical,
      hod: "Khushneet Kaur",
      tag: "Work with ampere",
    },
  ];

  const handleViewDetails = (dept) => {
    navigate(`/department/${dept.name.toLowerCase()}`, { state: dept });
  };

  return (
    <section className="bg-red-200 px-6 py-12 transition-colors duration-300 dark:bg-slate-800">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
            Explore Departments
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Choose a branch and bright your future.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departmentInfo.map((dept) => (
            <article
              key={dept.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-slate-950 dark:shadow-black/20"
            >
              <div className="relative">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-950/80 dark:text-slate-200">
                  {dept.tag}
                </span>
              </div>

              <div className="p-4 space-y-3">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  {dept.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  HOD:{" "}
                  <span className="font-medium text-slate-800 dark:text-slate-100">
                    {dept.hod}
                  </span>
                </p>

                <div className="pt-2 flex gap-2">
                  <button
                    onClick={() => handleViewDetails(dept)}
                    className="flex-1 rounded-lg bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700"
                  >
                    View Details
                  </button>
                  <button className="rounded-lg border border-slate-300 px-3 py-2 text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
                    Syllabus
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Department;
