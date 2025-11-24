import { useNavigate } from "react-router-dom";
import Header from "./src/components/Header";

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
      path: "/to-do",
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
      color: "#00ee00",
    },
  ];

  const handleCardClick = (path) => navigate(path);

  return (
    <div>
      <Header />

      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-12">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">
            DailyDeck
          </h1>
          <p className="text-lg sm:text-xl text-slate-500">
            Your all-in-one productivity companion
          </p>
        </div>

        {/* Menu Cards */}
        <div className="grid w-full max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-2">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.path)}
              className="
                group bg-white border border-slate-200 rounded-xl 
                p-6 shadow-sm hover:shadow-md 
                cursor-pointer transition-all
                flex flex-col items-center text-center
              "
            >
              {/* ICON */}
              <div className="text-5xl mb-4">{item.icon}</div>

              {/* NAME */}
              <h3 className="text-xl font-semibold text-slate-900 mb-1">
                {item.name}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-500 text-sm leading-snug">
                {item.description}
              </p>

              {/* Arrow */}
              <span
                className="mt-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all"
                style={{ color: item.color }}
              >
                Explore →
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
