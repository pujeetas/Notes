import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainMenu from "./MainMenu";
//import Notes from "./Notes";
import Body from "./notesComponent/Body";
import ContactUs from "./notesComponent/ContactUs";
//import Dashboard from "./toDoComponent/Dashboard";
import DashboardRouter from "./toDoComponent/DashboardRouter";
import Priority from "./toDoComponent/Priority";
import TaskCentralRouter from "./toDoComponent/TaskCentralRouter";
import TaskCentral from "./toDoComponent/TaskCentral";

const Dashboard = lazy(() => import("./toDoComponent/Dashboard"));

const Notes = lazy(() => import("./Notes"));

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
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
    path: "/toDo",
    element: <DashboardRouter />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "taskCentral",
        element: <TaskCentralRouter />,
        children: [
          {
            index: true,
            element: <TaskCentral />,
          },
          {
            path: "priority",
            element: <Priority />,
          },
        ],
      },
    ],
  },
]);
root.render(<RouterProvider router={router} />);
