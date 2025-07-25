import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainMenu from "./MainMenu";
import Notes from "./Notes";
import Body from "./component/Body";
import Profile from "./component/Profile";
import ContactUs from "./component/ContactUs";

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
      {
        path: "/notes/contactUs",
        element: <ContactUs />,
      },
    ],
  },
]);
root.render(<RouterProvider router={router} />);
