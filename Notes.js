import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import "./NotesStyle.css";
const Notes = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Notes;
