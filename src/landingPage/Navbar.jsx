import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-bold text-slate-900">DailyDeck</div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/signin")}
            className="cursor-pointer px-4 py-2 text-slate-700 hover:text-black hover:bg-gray-100 rounded-lg transition"
          >
            Log in
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="cursor-pointer px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-black transition"
          >
            Sign up
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
