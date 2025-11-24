import { useState } from "react";
import TagCreateModal from "../sidebar/TagCreateModal";
export default function NotesList({
  notes,
  activeId,
  onSelect,
  onNew,
  onDelete,
  onAddTag, // NEW PROP
}) {
  const [openTagModal, setOpenTagModal] = useState(false);
  const [activeTagNoteId, setActiveTagNoteId] = useState(null);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-gray-700">Notes</h3>

        <button
          onClick={onNew}
          className="text-sm bg-slate-900 text-white px-3 py-1 rounded-md"
        >
          New
        </button>
      </div>

      {/* Notes List */}
      <div className="space-y-2 max-h-[70vh] overflow-auto">
        {notes.length === 0 ? (
          <div className="text-sm text-gray-500">No notes yet</div>
        ) : (
          notes.map((n) => (
            <div
              key={n.id}
              onClick={() => onSelect(n.id)}
              className={`p-3 rounded-md border cursor-pointer ${
                activeId === n.id
                  ? "bg-gray-100 border-gray-300"
                  : "hover:bg-gray-100 border-transparent"
              }`}
            >
              <div className="text-sm font-medium text-gray-800">
                {n.title || "Untitled"}
              </div>

              <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                {n.body || "No content..."}
              </div>

              {/* TAG CHIPS */}
              <div className="flex gap-2 ">
                <div className="flex flex-wrap gap-2 mt-3">
                  {n.tags?.length > 0 &&
                    n.tags.map((t) => (
                      <span
                        key={t.id}
                        className="text-[10px] bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full"
                      >
                        {t.label}
                      </span>
                    ))}

                  {/* + Tag button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTagNoteId(n.id), setOpenTagModal(true);
                    }}
                    className="cursor-pointer text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full hover:bg-blue-200"
                  >
                    + Tag
                  </button>
                </div>

                {/* Delete */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(n.id);
                  }}
                  className="cursor-pointer text-xs text-red-600 mt-2 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
        <TagCreateModal
          open={openTagModal}
          onClose={() => setOpenTagModal(false)}
          onCreate={(label) => {
            onAddTag(activeTagNoteId, label);
            setOpenTagModal(false);
          }}
        />
      </div>
    </div>
  );
}
