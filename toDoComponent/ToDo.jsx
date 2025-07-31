import {
  BellOutlined,
  HomeOutlined,
  LineChartOutlined,
  MenuOutlined,
  MoonOutlined,
  PlusOutlined,
  SearchOutlined,
  TagsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddTask from "./AddTask";
import DeleteTask from "./DeleteTask";
import "./ToDOStyle.css";
import EditTask from "./EditTask";

const ToDO = () => {
  const options = { day: "2-digit", month: "long", year: "numeric" };
  const date = new Date().toLocaleDateString("en-GB", options);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempDetailsList, setTempDetailsList] = useState([]);
  const [detailsList, setDetailsList] = useState(() => {
    const data = localStorage.getItem("list");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    setTempDetailsList([...detailsList]);
    const json = JSON.stringify(detailsList);
    localStorage.setItem("list", json);
  }, [detailsList]);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-icon">
          <Link to={"/"}>
            <MenuOutlined />
          </Link>
        </div>
        <div className="sidebar-icon active">
          <HomeOutlined />
        </div>
        <div className="sidebar-icon">
          <LineChartOutlined />
        </div>
        <div className="sidebar-icon">
          <TagsOutlined />
        </div>
        <div className="sidebar-icon">
          <MoonOutlined />
        </div>
      </div>

      {isModalOpen && (
        <AddTask
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setDetailsList={setDetailsList}
          detailsList={detailsList}
        />
      )}

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="todo-header">
          <div className="welcome-text">Welcome👋</div>
          <div className="header-right">
            <div className="search-icon">
              <SearchOutlined />
            </div>
            <div className="notification-icon">
              <BellOutlined />
            </div>
            <div className="date-display">{date}</div>
            <div className="user-avatar">
              <UserOutlined />
            </div>
          </div>
        </div>

        {/* Board Content */}
        <div className="board-content">
          {/* To Do Column */}
          <div className="column">
            <div className="column-header">
              <div className="column-title">
                To-do ({tempDetailsList.length})
              </div>
              <div
                className="add-card-btn"
                onClick={() => setIsModalOpen(true)}
              >
                <PlusOutlined />
              </div>
            </div>

            {[...tempDetailsList].map((task, index) => (
              <div key={index} className="card fade-in">
                <div className="del-edit-container">
                  <div className="card-title">{task.title}</div>

                  <div className="edit-del-btn">
                    <EditTask />
                    <DeleteTask
                      id={task.id}
                      tempDetailsList={tempDetailsList}
                      setDetailsList={setDetailsList}
                      detailsList={detailsList}
                    />
                  </div>
                </div>
                <div className="card-subtitle">{task.subtitle}</div>
                <div className="card-progress">
                  <div className="progress-label">
                    <span className="progress-text">Progress</span>
                    <span className="progress-value">7/10</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill orange"
                      style={{ width: "70%" }}
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
          </div>

          {/* In Progress Column */}
          <div className="column">
            <div className="column-header">
              <div className="column-title">In Progress (2)</div>
              <div className="add-card-btn">
                <PlusOutlined />
              </div>
            </div>

            <div className="card fade-in">
              <div className="card-title">Create Wireframe for android</div>
              <div className="card-subtitle">LMS android app project</div>
              <div className="card-progress">
                <div className="progress-label">
                  <span className="progress-text">Progress</span>
                  <span className="progress-value">4/10</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill blue"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
              <div className="card-footer">
                <div className="card-date overdue">28 Jan 2024</div>
                <div className="card-meta">
                  <div className="meta-item">
                    <div className="meta-icon"></div>
                    <span>3</span>
                  </div>
                  <div className="meta-item">
                    <div className="meta-icon"></div>
                    <span>2</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card fade-in">
              <div className="card-title">Create brand guidelines</div>
              <div className="card-subtitle">RMLA branding project</div>
              <div className="card-progress">
                <div className="progress-label">
                  <span className="progress-text">Progress</span>
                  <span className="progress-value">7/10</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill blue"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="card-footer">
                <div className="card-date normal">31 Jan 2024</div>
                <div className="card-meta">
                  <div className="meta-item">
                    <div className="meta-icon"></div>
                    <span>0</span>
                  </div>
                  <div className="meta-item">
                    <div className="meta-icon"></div>
                    <span>2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Done Column */}
          <div className="column">
            <div className="column-header">
              <div className="column-title">Done</div>
              <div className="add-card-btn">
                <PlusOutlined />
              </div>
            </div>

            <div className="card fade-in">
              <div className="card-title">Launch product promotion</div>
              <div className="card-subtitle">people campaign</div>
              <div className="card-progress">
                <div className="progress-label">
                  <span className="progress-text">Progress</span>
                  <span className="progress-value">10/10</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill green"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div className="card-footer">
                <div className="card-date normal">04 Dec 2024</div>
                <div className="card-meta">
                  <div className="meta-item">
                    <div className="meta-icon"></div>
                    <span>1</span>
                  </div>
                  <div className="meta-item">
                    <div className="meta-icon"></div>
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="drag-area">Drag your task here.....</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDO;
