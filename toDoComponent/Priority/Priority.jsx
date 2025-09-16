import "./Priority.css";
import { useState } from "react";
import PriorityModal from "./PriorityModal";

const Priority = ({ detailsList, setDetailsList }) => {
  const [selectedPriority, setSelectedPriority] = useState("High");
  const [modalState, setModalState] = useState({
    isOpen: false,
    task: null,
  });

  const openModal = (task) => {
    setModalState({
      isOpen: true,
      task: task,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      task: null,
    });
  };

  const priorities = [
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },
  ];

  const handlePriorityClick = (priority) => {
    setSelectedPriority(priority.label);
  };

  // filter tasks based on selected priority
  const filteredTasks = detailsList.filter(
    (task) =>
      task.priority.toLowerCase() === selectedPriority.toLowerCase() &&
      task.status !== "done"
  );
  return (
    <div className="priority-container">
      <div className="priority-section">
        <div className="section-header">
          <div className="header-content">
            <div className="header-icon">
              <span className="pin-icon">📌</span>
            </div>
            <div className="header-text">
              <h2>Priority Tasks</h2>
              <p className="header-subtitle">
                Priority items requiring immediate attention
              </p>
            </div>
          </div>
          <div className="priority-toggle">
            {priorities.map((priority) => (
              <button
                key={priority.value}
                className={`priority-btn ${
                  selectedPriority === priority.label ? "active" : ""
                } ${priority.value}`}
                onClick={() => handlePriorityClick(priority)}
              >
                {priority.label}
              </button>
            ))}
          </div>
        </div>

        <div className="tasks-grid">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task, index) => (
              <div
                key={task.id}
                className={`task-card high-priority-card animate-in-${
                  index % 3
                }`}
              >
                <div className="task-header">
                  <div className="priority-badge high">
                    <span className="priority-dot"></span>
                    <span className="priority-text">
                      {task.priority.toUpperCase()}
                    </span>
                  </div>
                  <div className={`status-badge ${task.statusType || "todo"}`}>
                    {task.status || "TODO"}
                  </div>
                </div>

                <div className="task-body">
                  <h3 className="task-title">{task.title}</h3>
                  <div className="task-meta">
                    <span className="due-date">
                      <span className="date-icon">📅</span>
                      {task.dueDate}
                    </span>
                  </div>
                </div>

                <div className="task-footer">
                  <div className="task-actions">
                    <button
                      className="action-btn view"
                      type="button"
                      onClick={() => openModal(task)}
                    >
                      <span className="btn-icon">👁️</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-icon">🎯</div>
              <h3>No High Priority Tasks</h3>
              <p>All caught up! No urgent tasks at the moment.</p>
            </div>
          )}
        </div>
      </div>
      <PriorityModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        task={modalState.task}
      />
    </div>
  );
};

export default Priority;
