import { DeleteFilled } from "@ant-design/icons";
import "../DashboardStyle.css";

const DeleteTask = ({ setDetailsList, detailsList, id }) => {
  function handleDeleteTask(id) {
    const updatedList = detailsList.filter((task) => task.id !== id);
    setDetailsList(updatedList);
  }
  return (
    <DeleteFilled className="delete-btn" onClick={() => handleDeleteTask(id)} />
  );
};

export default DeleteTask;
