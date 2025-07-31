import { useNavigate } from "react-router-dom";

function MainMenu() {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: "notes",
      name: "Notes",
      description: "Organize your thoughts and ideas",
      icon: "📝",
      path: "/notes",
      color: "#667eea",
    },
    {
      id: "todo",
      name: "To-Do List",
      description: "Manage your daily tasks efficiently",
      icon: "✅",
      path: "/todo",
      color: "#48bb78",
    },
    {
      id: "calendar",
      name: "Calendar",
      description: "Schedule events and appointments",
      icon: "📅",
      path: "/calendar",
      color: "#4299e1",
    },
    {
      id: "reminders",
      name: "Reminders",
      description: "Set timely alerts for important tasks",
      icon: "🔔",
      path: "/reminders",
      color: "#f56565",
    },
    {
      id: "focus",
      name: "Focus Timer",
      description: "Boost productivity with timed sessions",
      icon: "⏱️",
      path: "/focus-timer",
      color: "#ed8936",
    },
    {
      id: "news",
      name: "TechBuzz",
      description: "Your daily dose of tech",
      icon: "📰",
      path: "/tech-buzz",
      color: "#00ee00ff",
    },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="main-menu-container">
      <div className="menu-header">
        <h1 className="app-title">TaskNest </h1>
        <p className="app-subtitle">Your all-in-one productivity companion</p>
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="menu-card"
            onClick={() => handleCardClick(item.path)}
            style={{ "--card-color": item.color }}
          >
            <div className="card-icon-container">
              <span className="card-icon">{item.icon}</span>
            </div>
            <div className="card-content">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-description">{item.description}</p>
            </div>
            <div className="card-arrow">→</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainMenu;
