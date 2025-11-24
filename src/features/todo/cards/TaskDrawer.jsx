import { useState } from "react";

export default function TaskDrawer({
  open,
  onClose,
  taskForm,
  setTaskForm,
  onSubmit,
  mode = "add", // "add" or "edit"
}) {
  return (
    <div
      className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity
      ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Drawer Panel */}
      <div
        className={`
        fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl
        transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
        overflow-y-auto p-6
      `}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            {mode === "add" ? "Create Task" : "Edit Task"}
          </h2>
          <button
            className="text-gray-500 hover:text-gray-800 text-2xl"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={taskForm.title}
              onChange={(e) =>
                setTaskForm({ ...taskForm, title: e.target.value })
              }
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Subtitle */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Subtitle
            </label>
            <input
              type="text"
              value={taskForm.subtitle}
              onChange={(e) =>
                setTaskForm({ ...taskForm, subtitle: e.target.value })
              }
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={taskForm.description}
              onChange={(e) =>
                setTaskForm({ ...taskForm, description: e.target.value })
              }
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
              rows="4"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Priority
            </label>
            <select
              value={taskForm.priority}
              onChange={(e) =>
                setTaskForm({ ...taskForm, priority: e.target.value })
              }
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select...</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="text-sm font-medium text-gray-700">Status</label>
            <select
              value={taskForm.status}
              onChange={(e) =>
                setTaskForm({ ...taskForm, status: e.target.value })
              }
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select...</option>
              <option value="todo">To-do</option>
              <option value="progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          {/* Due Date */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Due Date
            </label>
            <input
              type="date"
              value={taskForm.dueDate}
              onChange={(e) =>
                setTaskForm({ ...taskForm, dueDate: e.target.value })
              }
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Subtasks */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Subtasks
            </label>

            <SubtaskSection taskForm={taskForm} setTaskForm={setTaskForm} />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="cursor-pointer px-4 py-2 rounded-md border border-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={onSubmit}
            className="cursor-pointer px-4 py-2 rounded-md bg-indigo-600 text-white"
          >
            {mode === "add" ? "Create" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

// Subtask Section Component
function SubtaskSection({ taskForm, setTaskForm }) {
  const [text, setText] = useState("");

  const add = () => {
    if (!text.trim()) return;
    const newSubtask = {
      id: crypto.randomUUID(),
      text,
      complete: false,
    };
    setTaskForm({ ...taskForm, subTask: [...taskForm.subTask, newSubtask] });
    setText("");
  };

  const remove = (id) => {
    setTaskForm({
      ...taskForm,
      subTask: taskForm.subTask.filter((s) => s.id !== id),
    });
  };

  return (
    <div className="mt-2 space-y-2">
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Add subtask..."
        />
        <button
          onClick={add}
          className="cursor-pointer px-3 py-2 bg-indigo-600 text-white rounded-md"
        >
          Add
        </button>
      </div>

      {/* Subtask List */}
      <div className="space-y-1">
        {taskForm.subTask.map((s) => (
          <div
            key={s.id}
            className="flex justify-between items-center bg-gray-100 rounded px-3 py-2"
          >
            <span className="text-sm">{s.text}</span>
            <button
              onClick={() => remove(s.id)}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
