import { SearchOutlined, UserOutlined, BellOutlined } from "@ant-design/icons";
import useUserStore from "./useUserStore";
import { LogOut } from "lucide-react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Header = () => {
  const options = { day: "2-digit", month: "long", year: "numeric" };
  const date = new Date().toLocaleDateString("en-GB", options);

  const newUser = useUserStore((state) => state.newUser);
  const addUser = useUserStore((state) => state.addUser);
  const removeUser = useUserStore((state) => state.removeUser);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("Profile update error:", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        addUser({
          name: user.displayName,
          email: user.email,
        });

        // ...
      } else {
        // User is signed out
        removeUser;
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="todo-header">
      <div className="welcome-text">Welcome {newUser?.name}</div>

      <div className="header-right">
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <SearchOutlined className="search-icon" />
        </div>

        <div className="notification-icon">
          <BellOutlined />
        </div>

        <div className="date-display">{date}</div>

        <div className="user-avatar">
          <UserOutlined />
        </div>
        <div className="cursor-pointer" onClick={handleSignOut}>
          <LogOut color="white" size={19} />
        </div>
      </div>
    </div>
  );
};

export default Header;
