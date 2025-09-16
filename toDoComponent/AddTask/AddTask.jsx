import { useState } from "react";
import TaskForm from "../TaskForm";
import "./AddTaskStyle.css";
import { v4 as uuidv4 } from "uuid";

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
      id: uuidv4(),
      createdAt: new Date().toLocaleTimeString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setDetailsList((prevItems) => [...prevItems, newTaskId]);
    setIsAddModalOpen(false);
  }
  function handleCreateSubtask() {
    const newSubtask = {
      id: uuidv4(),
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
