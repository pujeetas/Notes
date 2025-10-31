import { useNavigate } from "react-router-dom";
import Header from "./Header";
import useTheme from "./hooks/useTheme";

function MainMenu() {
  const navigate = useNavigate();

  const isDark = useTheme((state) => state.isDark);

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
      color: "#00ee00ff",
    },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Header />
      <div
        className={`relative flex flex-col items-center justify-center ${
          isDark ? "bg-gradient-to-br from-gray-900 to-gray-800" : "bg-gray-50"
        } px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16`}
      >
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M10 0L0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>\')',
          }}
        />

        {/* Header */}
        <div
          className={`text-center ${
            isDark ? "text-white" : "text-gray-900"
          } mb-12 sm:mb-10`}
        >
          <h1 className="text-[2.5rem] sm:text-[3.5rem] font-bold drop-shadow-md mb-2">
            TaskNest
          </h1>
          <p className="text-lg sm:text-xl font-light opacity-90">
            Your all-in-one productivity companion
          </p>
        </div>

        {/* Menu Grid */}
        <div className="animate-cardSlideIn grid w-full max-w-[1200px] gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.path)}
              style={{ "--card-color": item.color }}
              className={`group relative flex flex-col items-center text-center border rounded-2xl p-6 sm:p-8 min-h-[180px] sm:min-h-[200px] cursor-pointer overflow-hidden shadow-lg transition-all duration-500 ease-out
                ${
                  isDark
                    ? "bg-gray-700 border-gray-600 hover:bg-gray-600 hover:shadow-2xl"
                    : "bg-white border-gray-200 hover:bg-gray-100 hover:shadow-2xl"
                }
              `}
            >
              {/* Top color bar */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-[var(--card-color)] scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100" />

              {/* Icon */}
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                {item.icon}
              </div>

              {/* Title & Description */}
              <div>
                <h3
                  className={`text-xl sm:text-2xl font-semibold mb-1 ${
                    isDark ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="absolute top-6 right-6 text-lg text-[var(--card-color)] opacity-0 font-bold transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:opacity-100">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
