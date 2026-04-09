import SectionTitle from "../components/SectionTitle";

const AboutPage = () => {
  return (
    <div className="space-y-10">
      <SectionTitle
        title="Sri Sukhmani Institute of Engineering & Technology"
        subtitle="One of the oldest and popular institutions of Punjab, strategically located near Chandigarh."
      />

      <section className="store-shell">
        <p className="text-slate-300">
          Established in 1998, SSIET has become a premium educational institute
          under Sri Sukhmani Group of Institutions, offering quality education
          in Engineering, Computer Application and Management.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl text-white">Vision</h3>
          <p className="mt-3 text-slate-300">
            We envisage professional proficiency, progressive environment and
            global leadership in education and career enhancement.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-white">Mission</h3>
          <p className="mt-3 text-slate-300">
            To mould young pupils into competent and responsible professionals
            by instilling the pledge of service before self.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-white">Core Values</h3>
          <p className="mt-3 text-slate-300">
            SSIET adopts state-of-the-art educational technologies for effective
            teaching, learning, assessment and evaluation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
