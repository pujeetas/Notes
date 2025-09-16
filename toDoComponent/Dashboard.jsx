import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import AddTask from "./AddTask/AddTask";
import Done from "./ColumnFunctioning/Done";
import InProgress from "./ColumnFunctioning/InProgress";
import Todo from "./ColumnFunctioning/Todo";
import "./DashboardStyle.css";
import EditTask from "./EditTask/EditTask";

const Dashboard = ({ detailsList, setDetailsList }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [taskForm, setTaskForm] = useState({
    id: "",
    title: "",
    subtitle: "",
    createdAt: "",
    description: "",
    category: "",
    status: "",
    dueDate: "",
    priority: "",
    subTask: [],
  });

  //setting list items in local storage
  useEffect(() => {
    const json = JSON.stringify(detailsList);
    localStorage.setItem("list", json);
  }, [detailsList]);

  const handleEditClick = (id) => {
    const taskToEdit = detailsList.find((task) => task.id === id);
    if (taskToEdit) {
      setTaskForm(taskToEdit);
      setIsEditModalOpen(true);
    }
  };

  function handleCreateBtn() {
    setTaskForm({
      id: "",
      title: "",
      createdAt: "",
      subtitle: "",
      description: "",
      category: "",
      status: "",
      dueDate: "",
      priority: "",
      subTask: [],
    });
    setIsAddModalOpen(true);
  }

  return (
    <div className="dashboard-container">
      {isAddModalOpen && (
        <AddTask
          isAddModalOpen={isAddModalOpen}
          setIsAddModalOpen={setIsAddModalOpen}
          setDetailsList={setDetailsList}
          detailsList={detailsList}
          taskForm={taskForm}
          setTaskForm={setTaskForm}
        />
      )}
      {isEditModalOpen && (
        <EditTask
          isEditModalOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          taskForm={taskForm}
          setTaskForm={setTaskForm}
          detailsList={detailsList}
          setDetailsList={setDetailsList}
        />
      )}
      {/* Main Content */}
      <div className="main-content">
        {/* Board Content */}
        <div className="board-content">
          {/* To Do Column */}
          <div className="column">
            <div className="column-header">
              <div className="column-title">
                To-do (
                {detailsList.filter((task) => task.status === "todo").length})
              </div>
              <div className="add-card-btn" onClick={handleCreateBtn}>
                <PlusOutlined style={{ color: "white" }} />
              </div>
            </div>
            <Todo
              detailsList={detailsList}
              setDetailsList={setDetailsList}
              handleEditClick={handleEditClick}
            />
          </div>

          {/* In Progress Column */}
          <div className="column">
            <div className="column-header">
              <div className="column-title">
                In Progress (
                {
                  detailsList.filter((task) => task.status === "progress")
                    .length
                }
                )
              </div>
              <div className="add-card-btn " onClick={handleCreateBtn}>
                <PlusOutlined style={{ color: "white" }} />
              </div>
            </div>
            <InProgress
              setDetailsList={setDetailsList}
              detailsList={detailsList}
              handleEditClick={handleEditClick}
            />
          </div>

          {/* Done Column */}
          <div className="column">
            <div className="column-header">
              <div className="column-title">
                Done (
                {detailsList.filter((task) => task.status === "done").length})
              </div>
              <div className="add-card-btn" onClick={handleCreateBtn}>
                <PlusOutlined style={{ color: "white" }} />
              </div>
            </div>
            <Done
              detailsList={detailsList}
              setDetailsList={setDetailsList}
              handleEditClick={handleEditClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
