import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { createInquiry } from "../services/api";

const initialInquiry = {
  fullName: "",
  email: "",
  phone: "",
  course: "B.Tech - CSE",
  statement: "",
};

const AdmissionsPage = () => {
  const [formData, setFormData] = useState(initialInquiry);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      const response = await createInquiry(formData);
      setSuccessMessage(response.message);
      setFormData(initialInquiry);
    } catch (error) {
      alert(error?.response?.data?.message || "Failed to submit application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-10">
      <SectionTitle
        title="Apply to Sri Sukhmani Institute"
        subtitle="Admissions are open only for the B.Tech program in ME, EE, CSE and Civil Engineering."
      />

      <section className="store-shell">
        <form onSubmit={handleSubmit} className="grid gap-3 md:col-span-2">
          <h3 className="font-serif text-2xl text-slate-900">
            B.Tech Departments
          </h3>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Full name"
            className="input-field"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="input-field"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone number"
            className="input-field"
          />
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="input-field"
          >
            <option>B.Tech - ME</option>
            <option>B.Tech - EE</option>
            <option>B.Tech - CSE</option>
            <option>B.Tech - Civil Engineering</option>
          </select>
          <textarea
            name="statement"
            value={formData.statement}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Why do you want to join Sri Sukhmani Institute of Engineering & Technology?"
            className="input-field"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="store-primary-btn disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
          {successMessage ? (
            <p className="text-sm text-red-700">{successMessage}</p>
          ) : null}
        </form>
      </section>
    </div>
  );
};

export default AdmissionsPage;
