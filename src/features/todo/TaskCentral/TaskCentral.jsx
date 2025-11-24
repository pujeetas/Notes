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
      accent: "bg-yellow-400",
      count: highPriorityTasks.length,
      link: "/to-do/taskcentral/priority",
      messages: highPriorityTasks.length
        ? [`You have ${highPriorityTasks.length} priority task(s).`]
        : ["You're all clear! No priority tasks."],
    },
    {
      title: "Today's Tasks",
      icon: "🗓️",
      accent: "bg-red-400",
      count: todayTask.length,
      link: "/to-do/taskcentral/today",
      messages: todayTask.length
        ? [`${todayTask.length} task(s) scheduled for today.`]
        : ["No tasks for today — enjoy the calm."],
    },
    {
      title: "Overdue",
      icon: "📅",
      accent: "bg-blue-400",
      count: overdue.length,
      link: "/to-do/taskcentral/overdue",
      messages: overdue.length
        ? [`${overdue.length} overdue task(s).`]
        : ["No overdue tasks — great!"],
    },
    {
      title: "Completed Tasks",
      icon: "✅",
      accent: "bg-green-400",
      count: completedTasks.length,
      link: "/to-do/taskcentral/completed",
      messages: completedTasks.length
        ? [`You completed ${completedTasks.length} task(s)!`]
        : ["No completed tasks yet — keep going!"],
    },
  ];

  const Card = ({ card }) => {
    const Wrapper = card.link ? Link : "div";

    return (
      <Wrapper to={card.link} className="block no-underline">
        <div
          className="
          relative overflow-hidden bg-white rounded-2xl 
          shadow-sm hover:shadow-md transition p-5
        "
        >
          {/* Soft top accent bar */}
          <div
            className={`
            absolute top-0 left-0 right-0 h-1.5
            ${card.accent || "bg-indigo-400"}
          `}
          />

          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {/* Icon bubble */}
              <div
                className="
              w-10 h-10 rounded-xl flex items-center justify-center 
              bg-gray-100 text-2xl
            "
              >
                {card.icon}
              </div>

              <h2 className="text-lg font-semibold text-gray-900">
                {card.title}
              </h2>
            </div>

            {/* Count bubble */}
            <span
              className="
            text-sm font-medium bg-gray-100 text-gray-800 
            px-3 py-1 rounded-full
          "
            >
              {card.count}
            </span>
          </div>

          {/* Body */}
          <div className="text-gray-600 text-sm leading-relaxed">
            {card.messages.map((msg, i) => (
              <p key={i}>{msg}</p>
            ))}
          </div>
        </div>
      </Wrapper>
    );
  };

  return (
    <div className="min-h-screen px-8 py-10 bg-gray-50">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Task Central</h1>
        <p className="text-gray-500 mt-1">Overview of your task activity</p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 max-w-5xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {cards.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>
    </div>
  );
};

export default TaskCentral;
