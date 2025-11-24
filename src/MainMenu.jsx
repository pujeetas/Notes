import { useNavigate } from "react-router-dom";
import Header from "./components/Header";

function MainMenu() {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: "notes",
      name: "Notes",
      description: "Organize your thoughts and ideas",
      icon: "📝",
      path: "/notes",
      color: "text-indigo-500",
    },
    {
      id: "todo",
      name: "To-Do List",
      description: "Manage your daily tasks efficiently",
      icon: "✅",
      path: "/to-do",
      color: "text-green-500",
    },
    {
      id: "calendar",
      name: "Calendar",
      description: "Schedule events and appointments",
      icon: "📅",
      path: "/calendar",
      color: "text-blue-500",
    },
    {
      id: "reminders",
      name: "Reminders",
      description: "Set timely alerts for important tasks",
      icon: "🔔",
      path: "/reminders",
      color: "text-red-500",
    },
    {
      id: "focus",
      name: "Focus Timer",
      description: "Boost productivity with timed sessions",
      icon: "⏱️",
      path: "/focus-timer",
      color: "text-orange-500",
    },
    {
      id: "news",
      name: "TechBuzz",
      description: "Your daily dose of tech",
      icon: "📰",
      path: "/tech-buzz",
      color: "text-lime-500",
    },
  ];

  const handleCardClick = (path) => navigate(path);

  return (
    <div>
      <Header />

      <div className="min-h-screen bg-gray-50 px-4 py-12 flex flex-col items-center">
        {/* Title */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">
            DailyDeck
          </h1>
          <p className="text-lg sm:text-xl text-slate-500">
            Your all-in-one productivity companion
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.path)}
              className="
                group
                bg-white border border-gray-200 rounded-xl p-6 shadow-sm
                hover:shadow-md cursor-pointer transition
                flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className={`text-5xl mb-4 ${item.color}`}>{item.icon}</div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-slate-800 mb-1">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-snug">
                {item.description}
              </p>

              {/* CTA */}
              <span
                className={`
                  mt-3 text-sm font-medium opacity-0 
                  group-hover:opacity-100 transition
                  ${item.color}
                `}
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
