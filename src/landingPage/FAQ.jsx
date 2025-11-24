import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className="px-8 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-semibold text-slate-900">
              Is DailyDeck free to use?
            </h3>
            <p className="text-slate-600 mt-2">
              Yes, DailyDeck provides all core features for free. Future premium
              upgrades may unlock additional power-user functionality.
            </p>
          </div>

          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-semibold text-slate-900">
              Do I need an account?
            </h3>
            <p className="text-slate-600 mt-2">
              Yes, creating an account lets you securely access your notes and
              tasks across devices using cloud sync.
            </p>
          </div>

          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-semibold text-slate-900">
              Where is my data stored?
            </h3>
            <p className="text-slate-600 mt-2">
              All your data is securely stored in our cloud backend using
              encrypted storage. Your information remains private and accessible
              only to you.
            </p>
          </div>

          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-semibold text-slate-900">
              Can I use this on mobile?
            </h3>
            <p className="text-slate-600 mt-2">
              Yes, DailyDeck is fully responsive and works smoothly on phones,
              tablets, and desktops.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
