import { SearchOutlined, UserOutlined, BellOutlined } from "@ant-design/icons";

const Header = () => {
  const options = { day: "2-digit", month: "long", year: "numeric" };
  const date = new Date().toLocaleDateString("en-GB", options);
  return (
    <div className="todo-header">
      <div className="welcome-text">Welcome👋</div>
      <div className="header-right">
        <div className="search-icon">
          <SearchOutlined />
        </div>
        <div className="notification-icon">
          <BellOutlined />
        </div>
        <div className="date-display">{date}</div>
        <div className="user-avatar">
          <UserOutlined />
        </div>
      </div>
    </div>
  );
};

export default Header;
