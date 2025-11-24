import { Link } from "react-router-dom";
import { X } from "lucide-react";

const Completed = ({ detailsList }) => {
  const filteredTask = detailsList.filter((task) => task.status === "done");

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-xl">
              ✓
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Completed Tasks
              </h2>
              <p className="text-sm text-gray-500">
                Your achievements and finished work
              </p>
            </div>
          </div>

          <Link to="/to-do/taskcentral">
            <button className="cursor-pointer p-2 rounded-md text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </Link>
        </div>

        {/* Task List */}
        <div className="space-y-5">
          {filteredTask.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">
              <div className="text-4xl mb-3 opacity-60">📭</div>
              <h3 className="text-lg font-medium text-gray-800 mb-1">
                No completed tasks yet
              </h3>
              <p className="text-sm text-gray-500">
                You haven't finished any tasks recently.
              </p>
            </div>
          ) : (
            filteredTask.map((task) => {
              const hoursAgo = Math.floor(
                (new Date() - new Date(task.createdAt.replace(" at ", " "))) /
                  36e5
              );

              return (
                <div
                  key={task.id}
                  className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex items-start gap-4"
                >
                  {/* Check Icon */}
                  <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-xl">
                    ✓
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-gray-800">
                      {task.title}
                    </h4>

                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="text-sm text-gray-500">
                        Completed {hoursAgo} hour ago
                      </span>

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
                    </div>
                  </div>

                  {/* View Button */}
                  <div>
                    <button className="text-gray-400 hover:text-gray-600 text-xl">
                      👁️
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Stats Section */}
        {filteredTask.length > 0 && (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { number: 3, label: "Completed Today" },
              { number: 12, label: "This Week" },
              { number: 45, label: "This Month" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm text-center"
              >
                <div className="text-3xl font-bold text-gray-800">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Completed;
