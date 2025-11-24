import React from "react";

const ScreenshotSection = () => {
  return (
    <div>
      <section className="px-8 py-24 bg-slate-50  border-t border-slate-200 animate-fadeUp">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">
          A quick look inside
        </h2>

        <p className="text-center text-slate-600 mb-12">
          Clean, modern UI built to keep you productive.
        </p>

        <div className="flex justify-center">
          <div className="w-full max-w-5xl mx-auto rounded-xl shadow-lg bg-white overflow-hidden">
            <img
              src="/dashboard.png"
              alt="App Screenshot"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScreenshotSection;
