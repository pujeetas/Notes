import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function OverDue({ detailsList }) {
  const today = new Date().toISOString().split("T")[0];

  const overdue = detailsList.filter(
    (task) => task.dueDate < today && task.status !== "done"
  );

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center text-xl">
              🗓️
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Overdue Tasks
              </h2>
              <p className="text-sm text-gray-500">{today}</p>
            </div>
          </div>

          <Link to="/to-do/taskcentral">
            <button className="cursor-pointer p-2 rounded-md text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </Link>
        </div>

        {/* List */}
        {overdue.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">
            <div className="text-4xl mb-3 opacity-60">🎉</div>
            <h3 className="text-lg font-medium text-gray-800 mb-1">
              No overdue tasks
            </h3>
            <p className="text-sm text-gray-500">
              Great! Everything is up to date.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {overdue.map((task) => {
              const daysOverdue = Math.floor(
                (new Date() - new Date(task.dueDate)) / (1000 * 60 * 60 * 24)
              );

              return (
                <div
                  key={task.id}
                  className="relative bg-white border border-red-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex items-start gap-4"
                >
                  {/* Red side indicator */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 rounded-l-xl"></div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center text-xl">
                    ⚠️
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-gray-800">
                      {task.title}
                    </h4>

                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
                      <span>⏰ {task.dueDate}</span>
                      <span className="text-red-600 font-medium">
                        {daysOverdue} day(s) overdue
                      </span>
                    </div>

                    {/* Badges */}
                    <div className="flex items-center gap-2 mt-3">
                      {task.priority && (
                        <span
                          className={`
                          text-xs px-3 py-1 rounded-full uppercase font-semibold
                          ${
                            task.priority === "high"
                              ? "bg-red-100 text-red-700"
                              : task.priority === "medium"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-green-100 text-green-700"
                          }
                        `}
                        >
                          {task.priority}
                        </span>
                      )}

                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full uppercase
                          ${
                            task.status === "todo"
                              ? "bg-gray-100 text-gray-700"
                              : "bg-blue-100 text-blue-700"
                          }
                        `}
                      >
                        {task.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
