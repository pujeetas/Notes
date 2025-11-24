export default function PriorityModal({ isOpen, onClose, task }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl w-full max-w-md shadow-lg p-6 animate-fade-in"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Task Details</h2>
          <button
            onClick={onClose}
            className="cursor-pointer text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-500">Title</label>
            <p className="mt-1 text-gray-800">{task?.title}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">
              Priority
            </label>
            <span
              className={`
                mt-1 inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase 
                ${task?.priority === "high" && "bg-red-100 text-red-700"}
                ${
                  task?.priority === "medium" && "bg-yellow-100 text-yellow-700"
                }
                ${task?.priority === "low" && "bg-green-100 text-green-700"}
              `}
            >
              {task?.priority}
            </span>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">Status</label>
            <span
              className={`
                mt-1 inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase
                ${task?.status === "todo" && "bg-gray-100 text-gray-700"}
                ${task?.status === "progress" && "bg-blue-100 text-blue-700"}
                ${task?.status === "done" && "bg-green-100 text-green-700"}
              `}
            >
              {task?.status}
            </span>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-500">
              Due Date
            </label>
            <p className="mt-1 text-gray-800">{task?.dueDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
