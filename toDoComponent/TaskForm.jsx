import "./AddTask/AddTaskStyle.css";

const TaskForm = ({
  isAddModalOpen,
  taskForm,
  setTaskForm,
  modalFooter,
  isEditModalOpen,
  onClose,
  handleCreateTask,
  handleCreateSubtask,
  subTaskText,
  setSubTaskText,
}) => {
  function handleOnSubmit(e) {
    if (!taskForm.status) {
      e.preventDefault();
    } else {
      handleCreateTask();
    }
  }
  const handleCheckbox = (event, id) => {
    const checked = event.target.checked;
    setTaskForm((prev) => ({
      ...prev,
      subTask: prev.subTask.map((s) => {
        return s.id === id ? { ...s, complete: checked } : s;
      }),
    }));
  };

  const handleSubTaskDelete = (id) => {
    const updatedSubtask = taskForm.subTask.filter((prev) => prev.id !== id);
    setTaskForm((prev) => ({
      ...prev,
      subTask: updatedSubtask,
    }));
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className={`modal-overlay ${
        isAddModalOpen || isEditModalOpen ? "active" : ""
      }`}
    >
      <div className="modal">
        <div className="modal-header">
          <h2>{isAddModalOpen ? "Create Task" : "Edit Task"}</h2>
          <button onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label>Task Title *</label>
            <input
              type="text"
              placeholder="e.g., Design UI presentation"
              value={taskForm.title}
              onChange={(e) =>
                setTaskForm((prevDetails) => ({
                  ...prevDetails,
                  title: e.target.value,
                }))
              }
            />
          </div>
          <div className="form-group">
            <label>Subtitle</label>
            <textarea
              value={taskForm.subtitle}
              onChange={(e) =>
                setTaskForm((prevDetails) => ({
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
              value={taskForm.description}
              onChange={(e) =>
                setTaskForm((prevDetails) => ({
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
                value={taskForm.category}
                onChange={(e) =>
                  setTaskForm((prevDetails) => ({
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
              <label>Status*</label>
              <select
                required
                value={taskForm.status}
                onChange={(e) =>
                  setTaskForm((prev) => ({ ...prev, status: e.target.value }))
                }
              >
                <option value="">Select...</option>
                <option value="todo">To-do</option>
                <option value="progress">In Progress</option>
                <option value="done">Completed</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Due Date</label>
            <input
              type="date"
              onChange={(e) =>
                setTaskForm((prev) => ({ ...prev, dueDate: e.target.value }))
              }
            />
          </div>

          <div className="form-group">
            <label>Priority</label>
            <div className="priority-options">
              <label>
                <input
                  type="radio"
                  name="priority"
                  value="low"
                  checked={taskForm.priority === "low"}
                  onChange={(e) =>
                    setTaskForm((prev) => ({
                      ...prev,
                      priority: e.target.value,
                    }))
                  }
                />
                Low
              </label>
              <label>
                <input
                  type="radio"
                  name="priority"
                  value="medium"
                  checked={taskForm.priority === "medium"}
                  onChange={(e) =>
                    setTaskForm((prev) => ({
                      ...prev,
                      priority: e.target.value,
                    }))
                  }
                />
                Medium
              </label>
              <label>
                <input
                  type="radio"
                  name="priority"
                  value="high"
                  checked={taskForm.priority === "high"}
                  onChange={(e) =>
                    setTaskForm((prev) => ({
                      ...prev,
                      priority: e.target.value,
                    }))
                  }
                />{" "}
                High
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Set Reminder</label>
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
              <input
                type="text"
                placeholder="Add subtask..."
                value={subTaskText}
                onChange={(e) => setSubTaskText(e.target.value)}
              />
              <button type="button" onClick={handleCreateSubtask}>
                Add
              </button>
            </div>

            <div className="subtasks-list">
              {taskForm.subTask.map((sub) => (
                <div key={sub.id} className="subtask-item">
                  <input
                    type="checkbox"
                    checked={sub.complete}
                    value={sub.id}
                    onChange={(e) => handleCheckbox(e, sub.id)}
                  />
                  <span>{sub.text}</span>
                  <button onClick={() => handleSubTaskDelete(sub.id)}>×</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {modalFooter}
      </div>
    </form>
  );
};

export default TaskForm;
