import { useState } from "react";

export default function FeatureShowcase() {
  const features = [
    {
      tag: "Focus on what matters",
      title: "Keep your workflow clear and intentional",
      desc: "Organize tasks into Today, Upcoming, or custom filters so you always see the right work at the right time.",
      image: "/featureImages/feature1.png",
    },
    {
      tag: "Plan with confidence",
      title: "Make planning effortless",
      desc: "Visualize tasks in a calendar and create schedules with just a few clicks.",
      image: "/featureImages/feature2.png",
    },
    {
      tag: "Track your progress",
      title: "See how your work evolves",
      desc: "View completed tasks, habits, and productivity trends at a glance.",
      image: "/featureImages/feature3.png",
    },
    {
      tag: "Stay on top",
      title: "Never miss anything important",
      desc: "Set reminders, priorities, and smart labels to keep everything under control.",
      image: "/featureImages/feature4.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="border-t border-slate-200 pt-16">
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          {/* LEFT: Scrollable Text */}
          <div className="flex-1 h-[520px] overflow-y-auto hide-scrollbar pr-8 scroll-smooth space-y-40 pb-24">
            {features.map((f, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className="cursor-pointer"
              >
                {/* TAG */}
                <p className="text-sm font-semibold text-emerald-700 mb-4 tracking-wide">
                  {f.tag}
                </p>

                {/* TITLE */}
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                  {f.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-lg text-slate-600 leading-relaxed max-w-[55ch]">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT: Fixed-height Sticky Image */}
          <div className="flex-1 flex justify-center sticky top-24 h-[520px]">
            <img
              src={features[activeIndex].image}
              alt="Feature illustration"
              className="w-full max-w-xl rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] object-contain transition-all duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
