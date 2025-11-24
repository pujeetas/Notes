// DashboardTailwind.jsx
import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Done from "../Column/Done";
import InProgress from "../Column/InProgress";
import Todo from "../Column/Todo";
import TaskDrawer from "../cards/TaskDrawer";

export default function Dashboard({ detailsList, setDetailsList }) {
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
  function handleCreateTask() {
    const newTask = {
      ...taskForm,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    setDetailsList((prev) => [newTask, ...prev]);
    setIsAddModalOpen(false);
  }
  function handleUpdateTask() {
    setDetailsList((prev) =>
      prev.map((task) => (task.id === taskForm.id ? taskForm : task))
    );
    setIsEditModalOpen(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex">
      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-transparent">
          <div>
            <h1 className="text-2xl font-semibold">Tasks</h1>
            <p className="text-sm text-slate-600">
              Manage your work — clean & focused
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center bg-white/6 px-3 py-2 rounded-lg backdrop-blur-sm">
              <input
                className="bg-transparent outline-none text-sm text-slate-100 placeholder-slate-400"
                placeholder="Search tasks..."
              />
            </div>

            <button
              onClick={handleCreateBtn}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 transition text-white px-4 py-2 rounded-full shadow-lg"
            >
              <PlusOutlined />
              Add Task
            </button>
          </div>
        </header>

        {/* Board */}
        <main className="flex-1 overflow-auto p-6">
          <TaskDrawer
            open={isAddModalOpen}
            mode="add"
            onClose={() => setIsAddModalOpen(false)}
            taskForm={taskForm}
            setTaskForm={setTaskForm}
            onSubmit={handleCreateTask}
          />

          <TaskDrawer
            open={isEditModalOpen}
            mode="edit"
            onClose={() => setIsEditModalOpen(false)}
            taskForm={taskForm}
            setTaskForm={setTaskForm}
            onSubmit={handleUpdateTask}
          />

          <div className="space-y-6">
            {/* Filters bar (simple) */}
            <div className="flex items-center gap-4">
              <button className="text-xs px-3 py-1 rounded-full bg-white/6">
                All
              </button>
              <button className="text-xs px-3 py-1 rounded-full bg-white/6">
                Today
              </button>
              <button className="text-xs px-3 py-1 rounded-full bg-white/6">
                Priority
              </button>
              <button className="text-xs px-3 py-1 rounded-full bg-white/6">
                Overdue
              </button>
            </div>

            {/* Columns */}
            <div className="flex gap-6 overflow-x-auto pb-6">
              {/* Column: To-do (red accent) */}
              <section className="flex-shrink-0 w-[340px] bg-white shadow-sm rounded-xl p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-400 inline-block" />
                    To-do (
                    {detailsList.filter((t) => t.status === "todo").length})
                  </h3>
                  <button
                    onClick={handleCreateBtn}
                    className="p-1 rounded-md text-slate-200 hover:bg-white/10"
                    aria-label="Add to todo"
                  >
                    <PlusOutlined />
                  </button>
                </div>
                <div className="space-y-4">
                  <Todo
                    detailsList={detailsList}
                    setDetailsList={setDetailsList}
                    handleEditClick={handleEditClick}
                  />
                </div>
              </section>

              {/* Column: In Progress (blue accent) */}
              <section className="flex-shrink-0 w-[340px] bg-white shadow-sm rounded-xl p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400 inline-block" />
                    In Progress (
                    {detailsList.filter((t) => t.status === "progress").length})
                  </h3>
                  <button
                    onClick={handleCreateBtn}
                    className="p-1 rounded-md text-slate-200 hover:bg-white/10"
                    aria-label="Add to in-progress"
                  >
                    <PlusOutlined />
                  </button>
                </div>
                <div className="space-y-4">
                  <InProgress
                    setDetailsList={setDetailsList}
                    detailsList={detailsList}
                    handleEditClick={handleEditClick}
                  />
                </div>
              </section>

              {/* Column: Done (green accent) */}
              <section className="flex-shrink-0 w-[340px] bg-white shadow-sm rounded-xl p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    Done (
                    {detailsList.filter((t) => t.status === "done").length})
                  </h3>
                  <button
                    onClick={handleCreateBtn}
                    className="p-1 rounded-md text-slate-200 hover:bg-white/10"
                    aria-label="Add to done"
                  >
                    <PlusOutlined />
                  </button>
                </div>
                <div className="space-y-4">
                  <Done
                    detailsList={detailsList}
                    setDetailsList={setDetailsList}
                    handleEditClick={handleEditClick}
                  />
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
