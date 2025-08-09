import { useState } from "react";
import TaskForm from "../TaskForm";
import "./AddTaskStyle.css";

const AddTask = ({
  isAddModalOpen,
  setIsAddModalOpen,
  setDetailsList,
  taskForm,
  setTaskForm,
}) => {
  const [subTaskText, setSubTaskText] = useState("");

  function handleCreateTask() {
    const newTaskId = {
      ...taskForm,
      id: Date.now(),
    };
    setDetailsList((prevItems) => [...prevItems, newTaskId]);
    setIsAddModalOpen(false);
  }
  function handleCreateSubtask() {
    const newSubtask = {
      id: Date.now(),
      text: subTaskText,
      complete: false,
    };
    setTaskForm((prev) => ({
      ...prev,
      subTask: [...prev.subTask, newSubtask],
    }));
    setSubTaskText("");
  }

  return (
    <div className={`modal-overlay ${isAddModalOpen ? "active" : ""}`}>
      <div className="modal">
        <TaskForm
          taskForm={taskForm}
          setTaskForm={setTaskForm}
          isAddModalOpen={isAddModalOpen}
          setIsAddModalOpen={setIsAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          handleCreateTask={handleCreateTask}
          subTaskText={subTaskText}
          setSubTaskText={setSubTaskText}
          handleCreateSubtask={handleCreateSubtask}
          modalFooter={
            <div className="modal-footer">
              <button type="reset" onClick={() => setIsAddModalOpen(false)}>
                Cancel
              </button>
              <button type="submit">Create Task</button>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default AddTask;
