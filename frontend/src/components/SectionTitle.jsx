const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="space-y-2">
      <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="max-w-2xl text-slate-300">{subtitle}</p> : null}
    </div>
  );
};

export default SectionTitle;
