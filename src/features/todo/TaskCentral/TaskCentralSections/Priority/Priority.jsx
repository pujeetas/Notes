import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import PriorityModal from "./PriorityModal";

export default function Priority({ detailsList }) {
  const [selected, setSelected] = useState("High");
  const [modalState, setModalState] = useState({ isOpen: false, task: null });

  const priorities = [
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
  ];

  const filteredTasks = detailsList.filter(
    (t) =>
      t.priority?.toLowerCase() === selected.toLowerCase() &&
      t.status !== "done"
  );

  const openModal = (task) => setModalState({ isOpen: true, task });
  const closeModal = () => setModalState({ isOpen: false, task: null });

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center text-xl">
              📌
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Priority Tasks
              </h2>
              <p className="text-gray-500 text-sm">
                Items requiring your attention
              </p>
            </div>
          </div>

          <Link to="/to-do/taskcentral">
            <button className="cursor-pointer p-2 text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </Link>
        </div>

        {/* Priority Toggle */}
        <div className="mt-6 inline-flex bg-white border border-gray-200 rounded-full p-1 shadow-sm">
          {priorities.map((p) => (
            <button
              key={p.value}
              onClick={() => setSelected(p.label)}
              className={`
                px-4 py-1.5 rounded-full text-sm transition
                ${
                  selected === p.label
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Task Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              onClick={() => openModal(task)}
              className="
                bg-white shadow-sm hover:shadow-md cursor-pointer 
                transition rounded-xl p-5 border border-gray-200
              "
            >
              {/* Badge Row */}
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`
                    text-xs font-semibold px-3 py-1 rounded-full
                    uppercase tracking-wide
                    ${task.priority === "high" && "bg-red-100 text-red-700"}
                    ${
                      task.priority === "medium" &&
                      "bg-yellow-100 text-yellow-700"
                    }
                    ${task.priority === "low" && "bg-green-100 text-green-700"}
                  `}
                >
                  {task.priority}
                </span>

                <span
                  className={`
                    text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide
                    ${task.status === "todo" && "bg-gray-100 text-gray-700"}
                    ${task.status === "progress" && "bg-blue-100 text-blue-700"}
                    ${task.status === "done" && "bg-green-100 text-green-700"}
                  `}
                >
                  {task.status}
                </span>
              </div>

              {/* Task Title */}
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {task.title}
              </h3>

              {/* Due Date */}
              <p className="text-sm text-gray-500 flex items-center gap-2">
                📅 {task.dueDate}
              </p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-16 bg-white border border-gray-200 rounded-xl">
            <div className="text-4xl mb-2 opacity-50">🎯</div>
            <h3 className="text-lg font-semibold text-gray-700">
              No Tasks Found
            </h3>
            <p className="text-sm text-gray-500">You're all caught up!</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <PriorityModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        task={modalState.task}
      />
    </div>
  );
}
