export default function DeleteNotes({ show, onClose, onConfirm }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg shadow-lg w-80 text-center">
        <p className="mb-5 text-gray-800">Delete this note?</p>

        <div className="flex justify-center gap-3">
          <button
            onClick={onClose}
            className="px-3 py-1 bg-gray-200 rounded-md"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-3 py-1 bg-red-600 text-white rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
