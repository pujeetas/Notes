import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainMenu from "./MainMenu";
import Notes from "./Notes";
import Body from "./notesComponent/Body";
import ContactUs from "./notesComponent/ContactUs";
import ToDO from "./toDoComponent/ToDo";

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
    element: <ToDO />,
  },
]);
root.render(<RouterProvider router={router} />);
