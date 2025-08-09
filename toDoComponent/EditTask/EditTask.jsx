import TaskForm from "../TaskForm";
import "../DashboardStyle.css";
import { useState } from "react";

const EditTask = ({
  isEditModalOpen,
  setIsEditModalOpen,
  taskForm,
  setTaskForm,
  detailsList,
  setDetailsList,
}) => {
  const [subTaskText, setSubTaskText] = useState("");

  const handleEditTask = () => {
    const taskUpdated = detailsList.map((task) => {
      return task.id === taskForm.id ? { ...task, ...taskForm } : task;
    });
    setDetailsList(taskUpdated);
    setIsEditModalOpen(false);
  };
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
    <div className={`modal-overlay ${isEditModalOpen ? "active" : ""}`}>
      <TaskForm
        isEditModalOpen={isEditModalOpen}
        setIsAddModalOpen={setIsEditModalOpen}
        taskForm={taskForm}
        subTaskText={subTaskText}
        setSubTaskText={setSubTaskText}
        setTaskForm={setTaskForm}
        handleCreateSubtask={handleCreateSubtask}
        onClose={() => setIsEditModalOpen(false)}
        modalFooter={
          <div className="modal-footer">
            <button onClick={() => setIsEditModalOpen(false)}>Cancel</button>
            <button onClick={handleEditTask}>Edit Task</button>
          </div>
        }
      />
    </div>
  );
};

export default EditTask;
