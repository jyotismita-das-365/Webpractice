const EventCard = ({ event }) => {
  return (
    <article className="group rounded-2xl border border-red-200/25 bg-white p-5 transition hover:-translate-y-1 hover:border-red-300/55 hover:shadow-[0_16px_30px_rgba(127,29,29,0.12)]">
      <div className="mb-3 inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-red-900">
        {event.category}
      </div>
      <h3 className="font-serif text-2xl text-slate-900">{event.title}</h3>
      <p className="mt-2 text-sm text-slate-700">{event.description}</p>
      <div className="mt-4 flex flex-wrap gap-3 text-xs text-red-700/90">
        <span className="rounded-full border border-red-300/35 bg-red-50 px-3 py-1">
          {event.date}
        </span>
        <span className="rounded-full border border-red-300/35 bg-red-50 px-3 py-1">
          {event.location}
        </span>
      </div>
    </article>
  );
};

export default EventCard;
