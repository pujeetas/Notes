import { Link, useLocation } from "react-router-dom";
import {
  MenuOutlined,
  HomeOutlined,
  LineChartOutlined,
  TagsOutlined,
} from "@ant-design/icons";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: <MenuOutlined />, path: "/main" },
    { icon: <HomeOutlined />, path: "/to-do" },
    { icon: <LineChartOutlined />, path: "/analytics" },
    { icon: <TagsOutlined />, path: "/to-do/taskcentral" },
  ];

  return (
    <aside
      className="
        w-16 
        flex flex-col items-center gap-8 
        py-6 
        border-r border-slate-200 
        bg-white
      "
    >
      {menuItems.map((item, idx) => {
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={idx}
            to={item.path}
            className="relative w-8 h-8 flex items-center justify-center"
          >
            {/* Active Highlight Bar */}
            {isActive && (
              <span
                className="
                absolute -left-3 top-1/2 -translate-y-1/2 
                h-8 w-1 
                bg-blue-500 rounded-full
              "
              />
            )}

            {/* Icon */}
            <div
              className={`
                w-8 h-8 flex items-center justify-center 
                rounded-md text-xl 
                transition-all
                ${
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }
              `}
            >
              {item.icon}
            </div>
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
