import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="py-6 text-center text-slate-500 text-sm border-t">
        © {new Date().getFullYear()} DailyDeck. Built for productivity.
      </footer>
    </div>
  );
};

export default Footer;
