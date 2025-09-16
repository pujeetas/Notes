import { Link } from "react-router-dom";
import "./TaskCentralStyle.css";

const TaskCentral = ({ detailsList }) => {
  const highPriorityTasks =
    detailsList?.filter(
      (item) => item.priority !== "" && item.status !== "done"
    ) || [];
  const completedTask = detailsList.filter((item) => item.status === "done");

  console.log(highPriorityTasks);
  return (
    <div className="task-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Task Central</h1>
        <p className="dashboard-subtitle">Organize your tasks efficiently</p>
      </div>
      <div className="tasks-grid">
        <Link className="tasks-grid-link" to={"/toDo/taskCentral/priority"}>
          <div className="task-section priority-section">
            <div className="section-header">
              <span className="section-icon">📌</span>
              <h2 className="section-title">Priority Tasks</h2>
              <span className="section-count">{highPriorityTasks.length}</span>
            </div>
            <div className="task-content">
              <p className="task-placeholder">
                🔥 You’re all clear! See your top priorities here.
              </p>
              <p className="add-task-hint">
                See your most important tasks here
              </p>
            </div>
          </div>
        </Link>

        <Link className="tasks-grid-link" to={"/toDo/taskCentral/today"}>
          <div className="task-section today-section">
            <div className="section-header">
              <span className="section-icon">🗓️</span>
              <h2 className="section-title">Today's Tasks</h2>
              <span className="section-count">0</span>
            </div>
            <div className="task-content">
              <p className="task-placeholder">No tasks for today</p>
              <p className="add-task-hint">Plan your day effectively</p>
            </div>
          </div>
        </Link>

        <div className="task-section upcoming-section">
          <div className="section-header">
            <span className="section-icon">📅</span>
            <h2 className="section-title">Upcoming (Next 7 Days)</h2>
            <span className="section-count">0</span>
          </div>
          <div className="task-content">
            <p className="task-placeholder">No upcoming tasks</p>
            <p className="add-task-hint">Stay ahead with your planning</p>
          </div>
        </div>

        <Link to={"/toDo/taskCentral/completed"} className="tasks-grid-link">
          <div className="task-section completed-section">
            <div className="section-header">
              <span className="section-icon">✅</span>
              <h2 className="section-title">Completed Tasks</h2>
              <span className="section-count">{completedTask.length}</span>
            </div>
            <div className="task-content">
              <p className="task-placeholder">No completed tasks yet</p>
              <p className="add-task-hint">
                Your achievements will appear here
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TaskCentral;
