import SectionTitle from "../components/SectionTitle";
import { departments } from "../data/departments";

const DepartmentPage = () => {
  return (
    <div className="space-y-10">
      <SectionTitle
        title="Explore Departments"
        subtitle="Choose a branch and bright your future."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {departments.map((dept) => (
          <article key={dept.name} className="store-card overflow-hidden">
            <img
              src={dept.image}
              alt={dept.name}
              className="h-40 w-full rounded-xl object-cover"
            />
            <h3 className="mt-4 font-serif text-xl text-white">{dept.name}</h3>
            <p className="mt-1 text-sm text-white">HOD: {dept.hod}</p>
            <p className="mt-2 text-sm text-white">{dept.text}</p>
            <div className="mt-4 flex gap-2">
              <button type="button" className="store-secondary-btn">
                View Details
              </button>
              <a
                href={dept.syllabus}
                target="_blank"
                rel="noreferrer"
                className="store-secondary-btn inline-flex"
              >
                Syllabus
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default DepartmentPage;
