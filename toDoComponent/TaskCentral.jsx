import { Link } from "react-router-dom";

const TaskCentral = ({ detailsList }) => {
  const highPriorityTasks =
    detailsList?.filter((t) => t.priority && t.status !== "done") || [];
  const completedTasks = detailsList?.filter((t) => t.status === "done") || [];

  const today = new Date().toISOString().split("T")[0];
  const todayTask = detailsList.filter(
    (t) => t.dueDate === today && t.status !== "done"
  );

  const overdue = detailsList.filter(
    (t) => t.dueDate < today && t.status !== "done"
  );

  const cards = [
    {
      title: "Priority Tasks",
      icon: "📌",
      colors: {
        from: "rgba(255, 193, 7, 0.1)",
        to: "rgba(255, 235, 59, 0.1)",
        text: "#ffc107",
      },
      count: highPriorityTasks.length,
      link: "/to-do/taskcentral/priority",
      messages: highPriorityTasks.length
        ? [
            `🚨 Heads up! You’ve got ${highPriorityTasks.length} priority task${
              highPriorityTasks.length > 1 ? "s" : ""
            } waiting!`,
          ]
        : [
            "✅ All clear! No urgent tasks right now 🎉",
            "Your top priorities will show up here when they pop up ✨",
          ],
    },
    {
      title: "Today's Tasks",
      icon: "🗓️",
      colors: {
        from: "rgba(255, 99, 71, 0.1)",
        to: "rgba(255, 140, 105, 0.1)",
        text: "#FF6347",
      },
      count: todayTask.length,
      link: "/to-do/taskcentral/today",
      messages: todayTask.length
        ? [
            `🔥 Hey! You’ve got ${todayTask.length} task${
              todayTask.length > 1 ? "s" : ""
            } lined up for today!`,
          ]
        : ["😌 No tasks today", "Enjoy the calm… or plan something fun!"],
    },
    {
      title: "Overdue",
      icon: "📅",
      colors: {
        from: "rgba(70, 130, 180, 0.1)",
        to: "rgba(100, 149, 237, 0.1)",
        text: "#4682B4",
      },
      count: overdue.length,
      link: "/to-do/taskcentral/overdue",

      messages: overdue.length
        ? [
            `Heads up! You’ve got ${overdue.length} task${
              overdue.length > 1 ? "s" : ""
            } waiting for you 🚀`,
          ]
        : ["All clear! No tasks today 🎉", "Time to chill… or plan ahead 😉"],
    },
    {
      title: "Completed Tasks",
      icon: "✅",
      colors: {
        from: "rgba(144, 238, 144, 0.1)",
        to: "rgba(152, 251, 152, 0.1)",
        text: "#90EE90",
      },
      count: completedTasks.length,
      link: "/to-do/taskcentral/completed",
      messages: completedTasks.length
        ? [
            `🎉 Woohoo! You’ve completed ${completedTasks.length} task${
              completedTasks.length > 1 ? "s" : ""
            }! Click to check them out 🚀`,
          ]
        : [
            "No completed tasks yet 😅",
            "Don’t worry, your achievements will appear here soon ✨",
          ],
    },
  ];

  const TaskCard = ({ card }) => {
    const CardWrapper = card.link ? Link : "div";
    return (
      <CardWrapper
        to={card.link}
        className="no-underline w-full h-full col-span-1 row-span-1"
      >
        <div
          className="relative flex flex-col p-8 h-full rounded-2xl border border-white/30 shadow-xl backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl animate-fadeInUp"
          style={{
            background: `linear-gradient(to bottom right, ${card.colors.from}, ${card.colors.to})`,
          }}
        >
          <div className="flex items-center mb-6 shrink-0">
            <span
              className={`text-2xl mr-3`}
              style={{ color: card.colors.text }}
            >
              {card.icon}
            </span>
            <h2 className="text-white text-lg font-semibold flex-1 m-0">
              {card.title}
            </h2>
            <span className="bg-white/10 text-gray-400 text-sm px-3 py-1.5 rounded-full font-medium">
              {card.count}
            </span>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center text-center text-white italic">
            {card.messages.map((msg, i) => (
              <p
                key={i}
                className={`text-${i === 0 ? "base" : "sm"} leading-6 mt-${
                  i > 0 ? 4 : 0
                } opacity-${i > 0 ? "70" : "100"}`}
              >
                {msg}
              </p>
            ))}
          </div>
        </div>
      </CardWrapper>
    );
  };

  return (
    <div className="min-h-screen px-8 py-8 lg:px-16 bg-gradient-to-br from-[#232526] to-[#414345] font-sans">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2.5 drop-shadow-md">
          Task Central
        </h1>
        <p className="text-white/80 text-base lg:text-lg font-light">
          Organize your tasks efficiently
        </p>
      </div>

      <div className="grid gap-5 max-w-3xl mx-auto grid-cols-2 sm:grid-cols-1">
        {cards.map((card, i) => (
          <TaskCard key={i} card={card} />
        ))}
      </div>
    </div>
  );
};

export default TaskCentral;
