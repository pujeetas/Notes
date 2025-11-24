import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainMenu from "./MainMenu";
import Notes from "./src/features/notes/Notes";
import DashboardRouter from "./src/features/todo/Dashboard/DashboardRouter";
import TaskCentralRouter from "./src/features/todo/TaskCentral/TaskCentralRouter";
import TaskCentral from "./src/features/todo/TaskCentral/TaskCentral";
import { useState } from "react";
import Completed from "./src/features/todo/TaskCentral/TaskCentralSections/Completed/Completed";
import Priority from "./src/features/todo/TaskCentral/TaskCentralSections/Priority/Priority";
import TodayTask from "./src/features/todo/TaskCentral/TaskCentralSections/Today/Today";
import "./styles.css";
import OverDue from "./src/features/todo/TaskCentral/TaskCentralSections/Overdue/OverDue";
import SignupPage from "./SignupPage";

const Dashboard = lazy(() => import("./src/features/todo/Dashboard/Dashboard"));

//const Notes = lazy(() => import("./src/features/notes/Notes"));

function Main() {
  const [detailsList, setDetailsList] = useState(() => {
    const data = localStorage.getItem("list");
    return data ? JSON.parse(data) : [];
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignupPage />,
    },
    {
      path: "/main",
      element: <MainMenu />,
    },
    {
      path: "/notes",
      element: (
        <Suspense fallback={<h1>Loading</h1>}>
          <Notes />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: <Notes />,
        },
      ],
    },
    {
      path: "/to-do",
      element: <DashboardRouter />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<h1>Loading....</h1>}>
              <Dashboard
                detailsList={detailsList}
                setDetailsList={setDetailsList}
              />
            </Suspense>
          ),
        },
        {
          path: "taskcentral",
          element: <TaskCentralRouter />,
          children: [
            {
              index: true,
              element: <TaskCentral detailsList={detailsList} />,
            },
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
            {
              path: "today",
              element: <TodayTask detailsList={detailsList} />,
            },
            {
              path: "overdue",
              element: <OverDue detailsList={detailsList} />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
