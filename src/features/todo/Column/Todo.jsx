import TaskCard from "./TaskCard";

export default function Todo({ detailsList, handleEditClick, setDetailsList }) {
  const tasks = detailsList.filter((t) => t.status === "todo");

  const handleDelete = (id) => {
    setDetailsList((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={() => handleEditClick(task.id)}
          onDelete={() => handleDelete(task.id)}
        />
      ))}
    </div>
  );
}
