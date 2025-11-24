import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Today({ detailsList = [] }) {
  const today = new Date();
  const isoDate = (str) => new Date(str).toISOString().slice(0, 10);

  const todays = detailsList.filter(
    (task) => task.dueDate === isoDate(today) && task.status !== "done"
  );

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl">
              📅
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Today's Tasks
              </h2>
              <p className="text-sm text-gray-500">{today.toDateString()}</p>
            </div>
          </div>

          <Link to="/to-do/taskcentral">
            <button className="cursor-pointer p-2 rounded-md text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </Link>
        </div>

        {/* Body */}
        <div className="grid gap-6">
          {todays.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">
              <div className="text-4xl mb-3 opacity-60">😌</div>
              <h3 className="text-lg font-medium text-gray-800 mb-1">
                No tasks for today
              </h3>
              <p className="text-sm text-gray-500">
                You have no pending tasks scheduled for today.
              </p>
            </div>
          ) : (
            todays.map((task) => (
              <article
                key={task.id}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
              >
                <header className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-gray-800 truncate">
                      {task.title}
                    </h3>
                    {task.subtitle && (
                      <p className="text-sm text-gray-500 mt-1 truncate">
                        {task.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="flex-shrink-0 flex flex-col items-end gap-2">
                    {/* Priority badge */}
                    {task.priority && (
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full uppercase ${
                          task.priority === "high"
                            ? "bg-red-100 text-red-700"
                            : task.priority === "medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {task.priority}
                      </span>
                    )}

                    {/* Status badge */}
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        task.status === "todo"
                          ? "bg-gray-100 text-gray-700"
                          : task.status === "progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {task.status}
                    </span>
                  </div>
                </header>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-3">
                    <span>⏰</span>
                    <span>{task.dueDate}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Placeholder for quick actions (edit/view) */}
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-600"
                      aria-label="View task"
                    >
                      👁️
                    </button>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
