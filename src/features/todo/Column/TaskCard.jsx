export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div
      className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer group"
      onClick={onEdit}
    >
      {/* Header */}
      <div className="flex justify-between">
        <h4 className="font-semibold text-gray-800">{task.title}</h4>

        {/* Hover controls */}
        <div className="opacity-0 group-hover:opacity-100 transition flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            ✏️
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="text-red-500 hover:text-red-700"
          >
            🗑️
          </button>
        </div>
      </div>

      {/* Subtitle */}
      {task.subtitle && (
        <p className="text-sm text-gray-500 mt-1">{task.subtitle}</p>
      )}

      {/* Priority */}
      {task.priority && (
        <span
          className={`
            mt-3 inline-block px-2 py-1 rounded text-xs font-medium
            ${task.priority === "high" && "bg-red-100 text-red-600"}
            ${task.priority === "medium" && "bg-yellow-100 text-yellow-700"}
            ${task.priority === "low" && "bg-green-100 text-green-700"}
          `}
        >
          {task.priority}
        </span>
      )}

      {/* Due Date */}
      {task.dueDate && (
        <p
          className={`text-xs mt-3 px-2 py-1 inline-block rounded 
            ${
              new Date(task.dueDate) < new Date()
                ? "bg-red-100 text-red-600"
                : "bg-gray-100 text-gray-600"
            }
          `}
        >
          Due: {task.dueDate}
        </p>
      )}
    </div>
  );
}
