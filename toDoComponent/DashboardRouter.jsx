import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./DashboardStyle.css";

const DashboardRouter = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardRouter;
