import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="left-0 h-16 w-full bg-amber-700/60 px-6 py-4 text-center text-black">
      © {new Date().getFullYear()} Meca3 — All rights reserved.
    </footer>
  );
};

export default Footer;
