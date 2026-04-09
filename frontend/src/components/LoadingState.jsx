const LoadingState = ({ text = "Loading..." }) => {
  return (
    <div className="rounded-2xl border border-red-200/25 bg-white/90 p-6 text-center text-slate-700 shadow-[0_10px_30px_rgba(127,29,29,0.08)]">
      <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-red-200/45 border-t-red-600" />
      <p className="mt-3 text-sm">{text}</p>
    </div>
  );
};

export default LoadingState;
