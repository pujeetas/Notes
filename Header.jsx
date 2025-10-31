import {
  BellOutlined,
  LogoutOutlined,
  MoonOutlined,
  SearchOutlined,
  SunOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import useUserStore from "./hooks/useUserStore";
import useTheme from "./hooks/useTheme";

const Header = () => {
  const options = { day: "2-digit", month: "long", year: "numeric" };
  const date = new Date().toLocaleDateString("en-GB", options);

  const newUser = useUserStore((state) => state.newUser);
  const addUser = useUserStore((state) => state.addUser);
  const removeUser = useUserStore((state) => state.removeUser);

  const navigate = useNavigate();

  const isDark = useTheme((state) => state.isDark);
  const toggleDark = useTheme((state) => state.toggleDark);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log("Profile update error:", error));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        addUser({
          name: user.displayName,
          email: user.email,
        });
      } else {
        removeUser();
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-between items-center px-5 py-5 border-b border-gray-200 dark:border-gray-700 z-[100] bg-gray-50 dark:bg-gray-800">
      {/* Welcome Text */}
      <div className="text-[1.5rem] font-semibold text-gray-900 dark:text-gray-100">
        Welcome {newUser?.name}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Search */}
        <div className="relative flex items-center group">
          <input
            type="text"
            placeholder="Search..."
            className="absolute right-full -translate-x-2 w-0 opacity-0 py-2 px-3 border border-gray-600 dark:border-gray-500 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300 group-hover:w-[200px] group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <SearchOutlined className="text-gray-900 dark:text-gray-100 text-xl cursor-pointer transition-colors duration-200 hover:text-blue-500" />
        </div>

        {/* Notifications */}
        <div className="text-gray-900 dark:text-gray-100 text-xl cursor-pointer transition-transform duration-200 hover:scale-110 hover:rotate-3">
          <BellOutlined />
        </div>

        {/* Date */}
        <div className="text-gray-800 dark:text-gray-200 text-sm font-medium whitespace-nowrap">
          {date}
        </div>

        {/* User Icon */}
        <div className="cursor-pointer p-1 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 hover:rounded-md hover:text-gray-800 dark:hover:text-gray-200">
          <UserOutlined />
        </div>

        {/* Dark Mode Toggle */}
        <div
          onClick={toggleDark}
          className="cursor-pointer p-1 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 hover:rounded-md hover:text-gray-800 dark:hover:text-gray-200"
        >
          {isDark ? <SunOutlined /> : <MoonOutlined />}
        </div>

        {/* Logout */}
        <div
          onClick={handleSignOut}
          className="cursor-pointer p-1 text-gray-900 dark:text-gray-100 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 hover:rounded-md hover:text-gray-800 dark:hover:text-gray-200"
        >
          <LogoutOutlined />
        </div>
      </div>
    </div>
  );
};

export default Header;
