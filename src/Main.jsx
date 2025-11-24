import { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainMenu from "../src/MainMenu";
import Notes from "../src/features/notes/Notes";

import Dashboard from "../src/features/todo/Dashboard/Dashboard";
import DashboardRouter from "../src/features/todo/Dashboard/DashboardRouter";

import TaskCentral from "../src/features/todo/TaskCentral/TaskCentral";
import TaskCentralRouter from "../src/features/todo/TaskCentral/TaskCentralRouter";

import Completed from "../src/features/todo/TaskCentral/TaskCentralSections/Completed/Completed";
import OverDue from "../src/features/todo/TaskCentral/TaskCentralSections/Overdue/OverDueTask";
import Priority from "../src/features/todo/TaskCentral/TaskCentralSections/Priority/Priority";
import TodayTask from "../src/features/todo/TaskCentral/TaskCentralSections/Today/Today";

import SignupPage from "../src/SignupPage";

import "../styles.css";

function Main() {
  const [detailsList, setDetailsList] = useState(() => {
    const data = localStorage.getItem("list");
    return data ? JSON.parse(data) : [];
  });

  const router = createBrowserRouter([
    { path: "/", element: <SignupPage /> },
    { path: "/main", element: <MainMenu /> },

    { path: "/notes", element: <Notes /> },

    {
      path: "/to-do",
      element: <DashboardRouter />,
      children: [
        {
          index: true,
          element: (
            <Dashboard
              detailsList={detailsList}
              setDetailsList={setDetailsList}
            />
          ),
        },
        {
          path: "taskcentral",
          element: <TaskCentralRouter />,
          children: [
            { index: true, element: <TaskCentral detailsList={detailsList} /> },
            {
              path: "priority",
              element: (
                <Priority
                  detailsList={detailsList}
                  setDetailsList={setDetailsList}
                />
              ),
            },
            {
              path: "completed",
              element: <Completed detailsList={detailsList} />,
            },
            { path: "today", element: <TodayTask detailsList={detailsList} /> },
            { path: "overdue", element: <OverDue detailsList={detailsList} /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
