import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainMenu from "./MainMenu";
import Notes from "./Notes";
import Body from "./notesComponent/Body";
import ContactUs from "./notesComponent/ContactUs";
import Dashboard from "./toDoComponent/Dashboard";
import DashboardRouter from "./toDoComponent/DashboardRouter";
import TaskCentral from "./toDoComponent/TaskCentral";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu />,
  },
  {
    path: "/notes",
    element: <Notes />,
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
        element: <Dashboard />,
      },
      {
        path: "taskCentral",
        element: <TaskCentral />,
      },
    ],
  },
]);
root.render(<RouterProvider router={router} />);
