import {
  BellOutlined,
  LogoutOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import useUserStore from "../hooks/useUserStore";

const Header = () => {
  const newUser = useUserStore((state) => state.newUser);

  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="w-full border-b border-slate-200 bg-white px-6 py-4 flex justify-between items-center">
      {/* Left Side: Greeting */}
      <div className="text-xl font-semibold text-slate-900">
        Welcome {newUser?.name || "User"}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="
              w-40 sm:w-48
              py-2 pl-9 pr-3
              border border-slate-300 rounded-lg
              bg-slate-50
              text-slate-700
              placeholder:text-slate-400
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition
            "
          />
          <SearchOutlined className="absolute top-1/2 -translate-y-1/2 left-3 text-slate-500 text-sm" />
        </div>

        {/* Notifications */}
        <button className="text-slate-700 hover:text-blue-600 transition cursor-pointer">
          <BellOutlined className="text-lg" />
        </button>

        {/* Date */}
        <div className="text-sm text-slate-600 hidden sm:block">{today}</div>

        {/* User Profile */}
        <button className="text-slate-700 hover:text-blue-600 transition cursor-pointer">
          <UserOutlined className="text-lg" />
        </button>

        {/* Logout */}
        <button className="text-slate-700 hover:text-blue-600 transition cursor-pointer">
          <LogoutOutlined className="text-lg" />
        </button>
      </div>
    </header>
  );
};

export default Header;
