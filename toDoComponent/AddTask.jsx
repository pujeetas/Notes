import { use, useState } from "react";

import "./AddTaskStyle.css";
const AddTask = ({
  isModalOpen,
  setIsModalOpen,
  setDetailsList,
  detailsList,
}) => {
  const [localDetailsList, setLocalDetailsList] = useState({
    id: Date.now(),
    title: "",
    subtitle: "",
    description: "",
    category: "",
  });
  function handleCreateTask() {
    setDetailsList((prevItems) => [
      ...prevItems,
      {
        ...localDetailsList,
      },
    ]);
    console.log(detailsList.category);

    setIsModalOpen(false);
  }
  return (
    <div className={`modal-overlay ${isModalOpen ? "active" : ""}`}>
      <div className="modal">
        <div className="modal-header">
          <h2>Create New Task</h2>
          <button onClick={() => setIsModalOpen(false)}>×</button>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label>Task Title *</label>
            <input
              type="text"
              placeholder="e.g., Design UI presentation"
              value={localDetailsList.title}
              onChange={(e) =>
                setLocalDetailsList((prevDetails) => ({
                  ...prevDetails,
                  title: e.target.value,
                }))
              }
            />
          </div>
          <div className="form-group">
            <label>Subtitle</label>
            <textarea
              value={localDetailsList.subtitle}
              onChange={(e) =>
                setLocalDetailsList((prevDetails) => ({
                  ...prevDetails,
                  subtitle: e.target.value,
                }))
              }
            ></textarea>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              placeholder="Add notes..."
              value={localDetailsList.description}
              onChange={(e) =>
                setLocalDetailsList((prevDetails) => ({
                  ...prevDetails,
                  description: e.target.value,
                }))
              }
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category</label>
              <select
                value={localDetailsList.category}
                onChange={(e) =>
                  setLocalDetailsList((prevDetails) => ({
                    ...prevDetails,
                    category: e.target.value,
                  }))
                }
              >
                <option value="">Select...</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
              </select>
            </div>

            <div className="form-group">
              <label>Status</label>
              <select>
                <option value="todo">To-do</option>
                <option value="progress">In Progress</option>
                <option value="done">Completed</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Due Date</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Priority</label>
            <div className="priority-options">
              <label>
                <input type="radio" name="priority" value="low" /> Low
              </label>
              <label>
                <input
                  type="radio"
                  name="priority"
                  value="medium"
                  defaultChecked
                />{" "}
                Medium
              </label>
              <label>
                <input type="radio" name="priority" value="high" /> High
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>
              <input type="checkbox" /> Set Reminder
            </label>
            <div className="reminder-inputs">
              <input type="date" />
              <input type="time" />
            </div>
          </div>

          <div className="form-group">
            <label>Attachments</label>
            <input type="file" multiple />
            <input type="url" placeholder="Add link..." />
          </div>

          <div className="subtasks-section">
            <h3>Subtasks</h3>
            <div className="subtask-input-group">
              <input type="text" placeholder="Add subtask..." />
              <button type="button">Add</button>
            </div>
            <div className="subtasks-list">
              <div className="subtask-item">
                <input type="checkbox" />
                <span>Sample subtask</span>
                <button>×</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          <button onClick={handleCreateTask}>Create Task</button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
