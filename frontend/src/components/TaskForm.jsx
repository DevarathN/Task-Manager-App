import React, { useEffect, useState } from "react";
import { createTask, updateTask } from "../services/api";
import "./Taskform.css";

export default function TaskForm({
  onTaskAdded,
  editingTask,
  setEditingTask,
  setTaskFormOpen,
}) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
  });

  useEffect(() => {
    if (editingTask) {
      setForm({
        title: editingTask.title || "",
        description: editingTask.description || "",
        status: editingTask.status || "",
      });
    } else {
      setForm({ title: "", description: "", status: "" });
    }
  }, [editingTask]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title) return alert("Title cannot be empty!");
    if (!form.status) return alert("Please select a status");

    if (editingTask) {
      await updateTask(editingTask._id, form);
      setEditingTask(null);
    } else {
      await createTask(form);
    }

    setForm({ title: "", description: "", status: "" });
    setTaskFormOpen(false);
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="taskform">
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
      />
      <input
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="">Select Status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button type="submit">
          {editingTask ? "Update Task" : "Add Task"}
        </button>
        {editingTask && (
          <button
            type="button"
            onClick={() => {
              setEditingTask(null);
              setTaskFormOpen(false);
            }}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
