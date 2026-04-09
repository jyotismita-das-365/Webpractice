import SectionTitle from "../components/SectionTitle";

const facilities = [
  "Department-wise laboratories",
  "Digital library and reading halls",
  "High-speed internet enabled campus",
  "Smart classrooms with AV support",
  "Hostel and transport services",
  "Sports and activity areas",
  "Seminar halls and conference rooms",
  "Training and placement cell",
];

const FacilitiesPage = () => {
  return (
    <div className="space-y-10">
      <SectionTitle
        title="Better Facilities for Better Learning"
        subtitle="Explore modern facilities designed to support academics, comfort and student life."
      />

      <section className="store-shell">
        <div className="grid gap-3 md:grid-cols-2">
          {facilities.map((facility, index) => (
            <div key={facility} className="store-card p-4">
              <p className="text-xs font-semibold text-white">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                {facility}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;
