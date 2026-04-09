import { useState } from "react";
import LoadingState from "../components/LoadingState";
import SectionTitle from "../components/SectionTitle";
import useAsync from "../hooks/useAsync";
import { createStudentQuery, fetchStoreItems } from "../services/api";

const initialQueryForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const StudentStorePage = () => {
  const { data: items = [], loading } = useAsync(fetchStoreItems);
  const [queryForm, setQueryForm] = useState(initialQueryForm);
  const [isSubmittingQuery, setIsSubmittingQuery] = useState(false);
  const [querySuccessMessage, setQuerySuccessMessage] = useState("");

  const handleQueryChange = (event) => {
    setQueryForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleQuerySubmit = async (event) => {
    event.preventDefault();
    setIsSubmittingQuery(true);
    setQuerySuccessMessage("");

    try {
      const response = await createStudentQuery(queryForm);
      setQuerySuccessMessage(response.message);
      setQueryForm(initialQueryForm);
    } catch (error) {
      alert(error?.response?.data?.message || "Failed to submit student query");
    } finally {
      setIsSubmittingQuery(false);
    }
  };

  return (
    <div className="space-y-10">
      <SectionTitle
        title="Student Access"
        subtitle="This section is read-only for students."
      />

      <section className="store-shell">
        <h3 className="font-serif text-2xl text-slate-900">
          Submit Student Query
        </h3>
        <h1>Queries that solved first:</h1>

        <form
          onSubmit={handleQuerySubmit}
          className="mt-5 grid gap-3 md:grid-cols-2"
        >
          <input
            name="name"
            value={queryForm.name}
            onChange={handleQueryChange}
            required
            placeholder="Your name"
            className="input-field"
          />
          <input
            name="email"
            type="email"
            value={queryForm.email}
            onChange={handleQueryChange}
            required
            placeholder="Your email"
            className="input-field"
          />
          <input
            name="subject"
            value={queryForm.subject}
            onChange={handleQueryChange}
            required
            placeholder="Subject"
            className="input-field md:col-span-2"
          />
          <textarea
            name="message"
            value={queryForm.message}
            onChange={handleQueryChange}
            required
            rows="4"
            placeholder="Write your query"
            className="input-field md:col-span-2"
          />
          <button
            type="submit"
            disabled={isSubmittingQuery}
            className="store-primary-btn disabled:opacity-70"
          >
            {isSubmittingQuery ? "Submitting..." : "Submit Query"}
          </button>
          {querySuccessMessage ? (
            <p className="text-sm text-red-700 md:col-span-2">
              {querySuccessMessage}
            </p>
          ) : null}
        </form>
      </section>

      <section>
        {loading ? (
          <LoadingState text="Loading store updates" />
        ) : items.length === 0 ? (
          <p className="store-shell text-slate-700">
            No updates available yet.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((item) => (
              <article key={item._id} className="store-card">
                <div className="mb-3 flex flex-wrap gap-2 text-xs">
                  <span className="store-chip">{item.department}</span>
                  <span className="store-chip">{item.type}</span>
                </div>
                <h4 className="font-serif text-2xl text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-rose-400">{item.description}</p>
                <div className="mt-3 flex justify-between text-xs text-green-700">
                  <span>Updated by: {item.updatedBy}</span>
                  <span>{new Date(item.updatedAt).toLocaleDateString()}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default StudentStorePage;
