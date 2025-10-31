import { X } from "lucide-react";
import { Link } from "react-router-dom";

const OverDueTask = ({ detailsList }) => {
  const today = new Date().toISOString().split("T")[0];
  const overdue = detailsList.filter(
    (t) => t.dueDate < today && t.status !== "done"
  );

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-[12px] flex items-center justify-center">
      <div className="relative bg-[#2a2a2a] rounded-2xl max-w-[700px] w-[90%] max-h-[85vh] overflow-hidden border border-red-500/20 shadow-[0_25px_50px_rgba(0,0,0,0.6),0_0_0_1px_rgba(59,130,246,0.1),0_0_20px_rgba(59,130,246,0.1)] animate-slideUp">
        {/* Top Gradient Border */}
        <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-red-500 to-red-800"></div>

        <div className="flex flex-col h-full">
          {/* Modal Header */}
          <div className="flex justify-between items-start px-8 pt-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-800 rounded-lg flex items-center justify-center shadow-[0_8px_20px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]">
                <span className="text-[20px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  🗓️
                </span>
              </div>
              <div>
                <h2 className="text-white text-2xl font-bold tracking-tight mb-1">
                  Overdue Tasks
                </h2>
                <p className="text-gray-400 text-sm font-normal">{today}</p>
              </div>
            </div>
            <Link to={"/to-do/taskcentral"}>
              <button className="bg-white/10 border border-white/20 rounded-xl text-gray-400 text-2xl p-2 transition-all hover:bg-white/15 hover:text-white hover:-translate-y-0.5">
                <X />
              </button>
            </Link>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto max-h-[450px]">
            <div className="border-b border-white/6">
              {overdue.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center gap-4 px-8 py-4 border-b border-white/4 bg-transparent hover:bg-white/4 relative"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 className="text-white text-sm font-medium">
                        {task.title}
                      </h4>
                      <div className="flex gap-1">
                        {task.priority && (
                          <span className="text-red-300 bg-red-500/15 border border-red-500/30 px-1.5 py-0.5 rounded text-xs font-bold uppercase">
                            {task.priority}
                          </span>
                        )}
                        <span className="text-gray-300 bg-gray-600/15 border border-gray-400/30 px-1.5 py-0.5 rounded text-xs font-bold uppercase">
                          {task.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-5 flex-wrap items-center text-gray-400 text-xs">
                      <span className="flex items-center gap-1">
                        ⏰ {task.dueDate}
                      </span>
                      <span className="flex items-center gap-1">
                        {Math.floor(
                          (new Date() - new Date(task.dueDate)) /
                            (1000 * 60 * 60 * 24)
                        )}{" "}
                        days overdue
                      </span>
                    </div>
                  </div>

                  {/* Urgent Indicator */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-8 py-8 border-t border-white/10 flex justify-end gap-3"></div>
        </div>
      </div>
    </div>
  );
};

export default OverDueTask;
