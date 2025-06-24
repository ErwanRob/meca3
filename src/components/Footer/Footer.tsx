import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="left-0 h-16 w-full bg-gray-800 px-6 py-4 text-center text-white">
      © {new Date().getFullYear()} Meca3 — All rights reserved.
    </footer>
  );
};

export default Footer;
