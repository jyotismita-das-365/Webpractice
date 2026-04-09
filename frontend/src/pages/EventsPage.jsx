import { useState } from "react";
import EventCard from "../components/EventCard";
import LoadingState from "../components/LoadingState";
import SectionTitle from "../components/SectionTitle";
import { useAuth } from "../context/AuthContext";
import useAsync from "../hooks/useAsync";
import { createEvent, fetchEvents } from "../services/api";

const initialEvent = {
  title: "",
  date: "",
  location: "",
  description: "",
  category: "CSE",
};

const EventsPage = () => {
  const { user } = useAuth();
  const canManageEvents = user?.role === "teacher";
  const { data: events = [], loading, run, setData } = useAsync(fetchEvents);
  const [formData, setFormData] = useState(initialEvent);
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const newEvent = await createEvent(formData);
      setData((prev) => [newEvent, ...(prev || [])]);
      setFormData(initialEvent);
    } catch (error) {
      alert(error?.response?.data?.message || "Failed to create event");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-10">
      <SectionTitle
        title="Department events and workshops"
        subtitle="Track technical activities for ME, EE, CSE and Civil Engineering departments."
      />

      {canManageEvents ? (
        <section className="store-shell">
          <h3 className="font-serif text-2xl text-slate-900">Add New Event</h3>
          <form
            onSubmit={handleSubmit}
            className="mt-5 grid gap-3 md:grid-cols-2"
          >
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Event title"
              className="input-field"
            />
            <input
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              placeholder="Date (e.g. 25 Aug 2026)"
              className="input-field"
            />
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Location"
              className="input-field"
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="input-field"
            >
              <option>ME</option>
              <option>EE</option>
              <option>CSE</option>
              <option>Civil Engineering</option>
              <option>General</option>
            </select>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Event description"
              className="input-field md:col-span-2"
              rows="4"
            />
            <button
              type="submit"
              disabled={isSaving}
              className="store-primary-btn disabled:opacity-70"
            >
              {isSaving ? "Saving..." : "Create Event"}
            </button>
            <button
              type="button"
              onClick={() => run()}
              className="store-secondary-btn"
            >
              Refresh List
            </button>
          </form>
        </section>
      ) : null}

      <section>
        {loading ? (
          <LoadingState text="Loading events" />
        ) : events.length === 0 ? (
          <p className="store-shell text-slate-700">
            No events yet. Add the first one.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default EventsPage;
