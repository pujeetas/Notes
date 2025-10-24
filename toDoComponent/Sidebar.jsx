import { Link } from "react-router-dom";
import {
  MenuOutlined,
  HomeOutlined,
  LineChartOutlined,
  TagsOutlined,
  MoonOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icon">
        <Link to={"/main"}>
          <MenuOutlined style={{ color: "white" }} />
        </Link>
      </div>
      <div className="sidebar-icon">
        <Link to={"/to-do"}>
          <HomeOutlined style={{ color: "white" }} />
        </Link>
      </div>
      <div className="sidebar-icon">
        <LineChartOutlined style={{ color: "white" }} />
      </div>
      <div className="sidebar-icon">
        <Link to={"/to-do/taskcentral"}>
          <TagsOutlined style={{ color: "white" }} />
        </Link>
      </div>
      <div className="sidebar-icon">
        <MoonOutlined style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default Sidebar;
