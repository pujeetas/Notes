import { Link } from "react-router-dom";
import "./CompletedStyle.css";

const Completed = ({ detailsList }) => {
  console.log(detailsList);
  const filteredTask = detailsList.filter((task) => task.status === "done");
  return (
    <div className="completed-modal-overlay">
      <div className="completed-modal-container">
        <div className="completed-modal-content">
          {/* Modal Header */}
          <div className="completed-modal-header">
            <div className="completed-modal-title-section">
              <div className="completed-modal-icon">
                <span className="modal-checkmark">✓</span>
              </div>
              <div className="completed-modal-title-text">
                <h2>Completed Tasks</h2>
                <p className="completed-modal-subtitle">
                  Your achievements and finished work
                </p>
              </div>
            </div>
            <Link to={"/toDo/taskCentral"}>
              <button className="completed-modal-close">×</button>
            </Link>
          </div>

          {/* Modal Body */}
          {filteredTask.map((task) => (
            <div key={task.id} className="completed-modal-body">
              {/* Completed Task Items */}
              <div className="completed-task-item">
                <div className="completed-task-check">
                  <span className="task-check-icon">✓</span>
                </div>
                <div className="completed-task-content">
                  <h4 className="completed-task-title">{task.title}</h4>
                  <div className="completed-task-meta">
                    <span className="completed-date">
                      Completed{" "}
                      {Math.floor(
                        (new Date() -
                          new Date(
                            filteredTask[0].createdAt.replace(" at ", " ")
                          )) /
                          36e5
                      )}{" "}
                      hour ago
                    </span>
                    {task.priority && (
                      <span className="completed-priority high">
                        {task.priority}
                      </span>
                    )}
                  </div>
                </div>
                <div className="completed-task-actions">
                  <button className="completed-action-btn view">
                    <span>👁️</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Modal Footer */}
          <div className="completed-modal-footer">
            <div className="completed-stats">
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Completed Today</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12</span>
                <span className="stat-label">This Week</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">45</span>
                <span className="stat-label">This Month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;
