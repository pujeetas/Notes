import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainMenu from "./MainMenu";
import Body from "./notesComponent/Body";
import ContactUs from "./notesComponent/ContactUs";
import DashboardRouter from "./toDoComponent/DashboardRouter";
import TaskCentralRouter from "./toDoComponent/TaskCentralRouter";
import TaskCentral from "./toDoComponent/TaskCentral";
import { useState } from "react";
import Completed from "./toDoComponent/Completed";
import Priority from "./toDoComponent/Priority/Priority";
import TodayTask from "./toDoComponent/TodayTask/TodayTask";
import Login from "./Login";
import "./styles.css";
import OverDueTask from "./toDoComponent/OverDueTask";

const Dashboard = lazy(() => import("./toDoComponent/Dashboard"));

const Notes = lazy(() => import("./notesComponent/Notes"));

function Main() {
  const [detailsList, setDetailsList] = useState(() => {
    const data = localStorage.getItem("list");
    return data ? JSON.parse(data) : [];
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
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
          element: <Body />,
        },
        {
          path: "/notes/contactUs",
          element: <ContactUs />,
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
              element: <OverDueTask detailsList={detailsList} />,
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
