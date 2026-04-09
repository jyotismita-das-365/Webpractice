import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import LoadingState from "../components/LoadingState";
import useAsync from "../hooks/useAsync";
import {
  createStoreItem,
  deleteStoreItem,
  fetchStoreItems,
  updateStoreItem,
} from "../services/api";

const initialForm = {
  title: "",
  department: "CSE",
  type: "Notice",
  description: "",
  updatedBy: "Teacher",
};

const TeacherHostPage = () => {
  const {
    data: items = [],
    loading,
    run,
    setData,
    error,
  } = useAsync(fetchStoreItems);
  const [formData, setFormData] = useState(initialForm);
  const [editingId, setEditingId] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormData(initialForm);
    setEditingId("");
  };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setFormData({
      title: item.title,
      department: item.department,
      type: item.type,
      description: item.description,
      updatedBy: item.updatedBy,
    });
  };

  const handleDelete = async (id) => {
    const shouldDelete = window.confirm("Delete this store item?");
    if (!shouldDelete) return;

    try {
      await deleteStoreItem(id);
      setData((prev) => (prev || []).filter((item) => item._id !== id));
    } catch (error) {
      alert(error?.response?.data?.message || "Delete failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      if (editingId) {
        const updated = await updateStoreItem(editingId, formData);
        setData((prev) =>
          (prev || []).map((item) => (item._id === editingId ? updated : item)),
        );
      } else {
        const created = await createStoreItem(formData);
        setData((prev) => [created, ...(prev || [])]);
      }
      resetForm();
    } catch (error) {
      alert(error?.response?.data?.message || "Save failed");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-10">
      {error && (
        <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800">
          <p className="font-semibold">Error loading store items</p>
          <p>{error.message || "Failed to load store items"}</p>
        </div>
      )}

      <SectionTitle
        title="Teacher Access"
        subtitle="Teachers can create, update and delete announcements/resources."
      />

      <section className="store-shell">
        <h3 className="font-serif text-2xl text-red-700">
          {editingId ? "Edit Store Item" : "Create Store Item"}
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          Publish updates for ME, EE, CSE and Civil Engineering students.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-5 grid gap-3 md:grid-cols-2"
        >
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Title"
            className="input-field"
          />
          <input
            name="updatedBy"
            value={formData.updatedBy}
            onChange={handleChange}
            required
            placeholder="Updated by"
            className="input-field"
          />
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="input-field"
          >
            <option>ME</option>
            <option>EE</option>
            <option>CSE</option>
            <option>Civil Engineering</option>
          </select>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="input-field"
          >
            <option>Notice</option>
            <option>Assignment</option>
            <option>Lab Update</option>
            <option>Exam Update</option>
          </select>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Description"
            className="input-field md:col-span-2"
          />
          <button
            type="submit"
            disabled={isSaving}
            className="store-primary-btn disabled:opacity-70"
          >
            {isSaving ? "Saving..." : editingId ? "Update Item" : "Create Item"}
          </button>
          <button
            type="button"
            onClick={editingId ? resetForm : run}
            className="store-secondary-btn"
          >
            {editingId ? "Cancel Edit" : "Refresh List"}
          </button>
        </form>
      </section>

      <section>
        {loading ? (
          <LoadingState text="Loading store items" />
        ) : items.length === 0 ? (
          <p className="store-shell text-slate-700">No store items yet.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((item) => (
              <article key={item._id} className="store-card">
                <div className="mb-3 flex flex-wrap gap-2 text-xs">
                  <span className="store-chip">{item.department}</span>
                  <span className="store-chip">{item.type}</span>
                </div>
                <h4 className="font-serif text-2xl text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-slate-300">
                  {item.description}
                </p>
                <p className="mt-3 text-sm text-white">
                  Updated by: {item.updatedBy}
                </p>
                <div className="mt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => handleEdit(item)}
                    className="rounded-lg border border-red-300/45 bg-green-500 px-4 py-2 text-xs font-semibold uppercase text-white transition hover:bg-green-700"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(item._id)}
                    className="rounded-lg border border-red-300/45 px-4 py-2 text-xs font-semibold uppercase text-white transition hover:bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default TeacherHostPage;
