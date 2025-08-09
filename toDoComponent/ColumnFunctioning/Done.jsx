import { EditFilled } from "@ant-design/icons";
import DeleteTask from "../DeleteTask/DeleteTask";

const Done = ({ detailsList, setDetailsList, handleEditClick }) => {
  const options = { day: "2-digit", month: "long", year: "numeric" };
  const date = new Date().toLocaleDateString("en-GB", options);
  return (
    <>
      {[...detailsList]
        .filter((task) => task.status === "done")
        .map((task, index) => (
          <div key={index} className="card fade-in">
            <div className="del-edit-container">
              <div className="card-title">{task.title}</div>

              <div className="edit-del-btn">
                <EditFilled
                  className="edit-btn"
                  onClick={() => handleEditClick(task.id)}
                />

                <DeleteTask
                  id={task.id}
                  setDetailsList={setDetailsList}
                  detailsList={detailsList}
                />
              </div>
            </div>
            <div className="card-subtitle">{task.subtitle}</div>
            <div className="card-progress">
              <div className="progress-label">
                <span className="progress-text">Progress</span>
                <span className="progress-value">
                  {task.subTask.filter((item) => item.complete).length}/
                  {task.subTask.length}
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill orange"
                  style={{
                    width:
                      (task.subTask.filter((item) => item.complete).length /
                        task.subTask.length) *
                        100 +
                      "%",
                  }}
                ></div>
              </div>
            </div>
            <div className="card-footer">
              <div className="card-date normal">{date}</div>
              <div className="card-meta">
                <div className="meta-item">
                  <div className="meta-icon"></div>
                  <span>2</span>
                </div>
                <div className="meta-item">
                  <div className="meta-icon"></div>
                  <span>1</span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Done;
