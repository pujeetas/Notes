import React, { useState } from "react";

export default function TagCreateModal({ open, onClose, onCreate }) {
  const [label, setLabel] = useState("");

  if (!open) return null;

  const handleCreate = () => {
    if (!label.trim()) return;
    onCreate(label.trim());
    setLabel("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[320px] p-5 rounded-md shadow-lg">
        <h2 className="text-sm font-semibold text-gray-800 mb-4">
          Create New Tag
        </h2>

        <input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="w-full border px-3 py-2 text-sm rounded-md outline-none"
          placeholder="Tag name..."
        />

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="text-sm px-3 py-1 border rounded-md text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleCreate}
            className="text-sm px-3 py-1 bg-slate-900 text-white rounded-md"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
