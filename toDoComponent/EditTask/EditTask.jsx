import TaskForm from "../TaskForm";
import "../DashboardStyle.css";

const EditTask = ({
  isEditModalOpen,
  setIsEditModalOpen,
  taskForm,
  setTaskForm,
  detailsList,
  setDetailsList,
}) => {
  const handleEditTask = () => {
    const taskUpdated = detailsList.map((task) => {
      return task.id === taskForm.id ? { ...task, ...taskForm } : task;
    });
    setDetailsList(taskUpdated);
    setIsEditModalOpen(false);
  };

  return (
    <div className={`modal-overlay ${isEditModalOpen ? "active" : ""}`}>
      <TaskForm
        isEditModalOpen={isEditModalOpen}
        setIsAddModalOpen={setIsEditModalOpen}
        taskForm={taskForm}
        setTaskForm={setTaskForm}
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
