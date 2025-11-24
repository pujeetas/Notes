import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="w-full px-8 pt-20 pb-16 flex flex-col md:flex-row items-center gap-12 relative">
        {/* Left Illustration */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="/heroIllustration.png"
            alt="Productivity"
            className="w-full max-w-md md:max-w-xl object-contain animate-float mx-64"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 text-center md:text-left relative animate-fadeUp">
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/40 blur-xl -z-10 rounded-xl"></div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Your <span className="font-extrabold">all-in-one workspace</span>
            <br />
            for <span className="font-extrabold">notes</span>,
            <br />
            <span className="font-extrabold">tasks</span>, and
            <br />
            everyday <span className="font-extrabold">productivity</span>.
          </h1>

          <p className="text-lg text-slate-600 mt-5 max-w-lg">
            Capture ideas, stay organized, and manage your day — all in a clean,
            modern interface designed for{" "}
            <span className="font-semibold text-slate-800">focus</span> and{" "}
            <span className="font-semibold text-slate-800">clarity</span>.
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-3 bg-slate-900 text-white rounded-lg text-lg hover:bg-black transition"
            >
              Get Started
            </button>

            <button
              onClick={() => navigate("/signin")}
              className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg text-lg hover:bg-slate-100 transition"
            >
              Log in
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
