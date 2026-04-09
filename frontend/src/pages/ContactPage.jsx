import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { createContact } from "../services/api";

const initialContact = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactPage = () => {
  const [formData, setFormData] = useState(initialContact);
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage("");

    try {
      const response = await createContact(formData);
      setSuccessMessage(response.message);
      setFormData(initialContact);
    } catch (error) {
      alert(error?.response?.data?.message || "Failed to send your message");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="space-y-10">
      <SectionTitle
        title="CONTACT US FOR ANY QUERY"
        subtitle="Have a question? Send us your details and our team will respond quickly."
      />

      <section className="store-shell grid gap-6 md:grid-cols-2">
        <div className="space-y-4 text-slate-700">
          <h3 className="font-serif text-2xl text-white">Campus Office</h3>
          <p className="text-white">123 Innovation Avenue, Knowledge City, India</p>
          <p className="text-white">Email: ssiet@edu.com</p>
          <p className="text-white">Phone: +91 86996 09193</p>
          <div className="rounded-2xl border border-red-300/35 bg-red-100/70 p-4 text-sm text-red-800">
            Office Hours: Monday to Friday, 9:00 AM - 3:00 PM
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-3">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="input-field"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email"
            className="input-field"
          />
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject"
            className="input-field"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Message"
            className="input-field"
          />
          <button
            type="submit"
            disabled={isSending}
            className="store-primary-btn disabled:opacity-70"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
          {successMessage ? (
            <p className="text-sm text-red-700">{successMessage}</p>
          ) : null}
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
