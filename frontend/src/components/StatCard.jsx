const StatCard = ({ label, value }) => {
  return (
    <div className="rounded-2xl border border-red-200/25 bg-white/90 p-5 shadow-[0_20px_50px_rgba(127,29,29,0.08)] backdrop-blur">
      <p className="text-3xl font-bold text-slate-900">{value}</p>
      <p className="mt-1 text-sm uppercase tracking-[0.15em] text-red-700/85">
        {label}
      </p>
    </div>
  );
};

export default StatCard;
