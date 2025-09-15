import "./Priority.css";

const Priority = ({ detailsList }) => {
  const highPriorityTasks =
    detailsList?.filter((item) => item.priority === "high") || [];

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
                High priority items requiring immediate attention
              </p>
            </div>
          </div>
          <div className="task-count-wrapper">
            <span className="task-count">{highPriorityTasks.length}</span>
            <span className="count-label">tasks</span>
          </div>
        </div>

        <div className="tasks-grid">
          {highPriorityTasks.length > 0 ? (
            highPriorityTasks.map((task, index) => (
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
                    <button className="action-btn view">
                      <span className="btn-icon">👁️</span>
                    </button>
                    <button className="action-btn edit">
                      <span className="btn-icon">✏️</span>
                    </button>
                    <button className="action-btn complete">
                      <span className="btn-icon">✓</span>
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
    </div>
  );
};

export default Priority;
