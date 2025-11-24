import { useState } from "react";
import { X } from "lucide-react";

export default function TagManagerModal({ open, tags, onDelete, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[360px] p-5 rounded-md shadow-lg">
        <h2 className="text-sm font-semibold text-gray-800 mb-4">
          Manage Tags
        </h2>

        <ul className="space-y-2 max-h-[250px] overflow-auto">
          {tags.map((t) => (
            <li
              key={t.id}
              className="flex justify-between items-center border p-2 rounded-md"
            >
              <span className="text-sm">{t.label}</span>
              <button
                onClick={() => onDelete(t.id)}
                className="text-red-600 hover:text-red-800"
              >
                <X size={14} />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="text-sm px-3 py-1 border rounded-md hover:bg-gray-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
