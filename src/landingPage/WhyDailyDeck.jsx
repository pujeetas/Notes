import React from "react";

const WhyDailyDeck = () => {
  return (
    <div>
      {" "}
      <section className="px-8 pt-10 pb-20 max-w-4xl mx-auto text-center animate-fadeUp">
        {/* Accent Line */}
        <div className="h-1 w-14 bg-slate-900 mx-auto mb-4 rounded-full"></div>

        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Why DailyDeck?
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Because your notes, tasks, and ideas shouldn’t live in different
          places. DailyDeck brings everything together into one clean,
          distraction-free workspace designed to help you stay organized, think
          clearly, and move with purpose.
        </p>

        <p className="text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
          No clutter. No complexity. Just a calm, modern environment built for
          real productivity.
        </p>
      </section>
    </div>
  );
};

export default WhyDailyDeck;
