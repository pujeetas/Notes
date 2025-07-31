import { DeleteFilled } from "@ant-design/icons";
import "./ToDOStyle.css";

const DeleteTask = ({ setDetailsList, detailsList, id }) => {
  function handleDeleteTask(id) {
    const updatedList = detailsList.filter((task) => task.id !== id);
    setDetailsList(updatedList);
  }
  return (
    <div>
      <button className="delete-btn" onClick={() => handleDeleteTask(id)}>
        <DeleteFilled />
      </button>
    </div>
  );
};

export default DeleteTask;
