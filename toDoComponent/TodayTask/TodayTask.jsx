import { X } from "lucide-react";
import { Link } from "react-router-dom";
import "./TodayTaskStyle.css";

const TodayTask = ({ detailsList }) => {
  console.log(detailsList);
  const today = new Date();
  const isoDate = (str) => new Date(str).toISOString().slice(0, 10);

  return (
    <div className="today-modal-overlay">
      <div className="today-modal-container">
        <div className="today-modal-content">
          {/* Modal Header */}
          <div className="today-modal-header">
            <div className="today-modal-title-section">
              <div className="today-modal-icon">
                <span className="today-icon">📅</span>
              </div>
              <div className="today-modal-title-text">
                <h2>Today's Tasks</h2>
                <p className="today-modal-subtitle">{today.toDateString()}</p>
              </div>
            </div>
            <Link to={"/to-do/taskcentral"}>
              <button className="today-modal-close">
                <X />
              </button>
            </Link>
          </div>

          {/* Modal Body */}
          <div className="today-modal-body">
            <div className="today-section">
              {detailsList
                .filter(
                  (task) =>
                    task.dueDate === isoDate(today) && task.status !== "done"
                )
                .map((task) => (
                  <div key={task.id} className="today-task-item urgent">
                    <div className="task-main-content">
                      <div className="task-header">
                        <h4 className="task-title">{task.title}</h4>
                        <div className="task-badges">
                          {task.priority && (
                            <span className="priority-badge high">
                              {task.priority}
                            </span>
                          )}
                          <span className="status-badge todo">
                            {task.status}
                          </span>
                        </div>
                      </div>
                      <div className="task-details">
                        <span className="task-time">⏰ {task.dueDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Modal Footer */}
          <div className="today-modal-footer">
            <div className="footer-actions"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayTask;
