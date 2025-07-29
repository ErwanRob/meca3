import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="left-0 flex h-16 w-full items-center justify-center border-t border-gray-200 bg-white px-6 py-4 text-center text-black shadow-xl shadow-black backdrop-blur-lg backdrop-filter">
      <p className="text-sm">
        © {new Date().getFullYear()} Meca3 — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
