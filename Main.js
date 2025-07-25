import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainMenu from "./MainMenu";
import Notes from "./Notes";
import Body from "./component/Body";
import Profile from "./component/Profile";

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
        path: "/notes/profile",
        element: <Profile />,
      },
    ],
  },
  // add more routes...
]);
root.render(<RouterProvider router={router} />);
