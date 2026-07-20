import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] text-center py-8 border-t border-[#171717]">
      <div className="flex flex-col items-center justify-center gap-1.5 px-4">
        {/* Brand Name */}
        <h3 className="text-sm font-bold text-[#baff39] tracking-wide select-none">
          SkyMart
        </h3>

        {/* Copyright & Tech Stack Info */}
        <p className="text-[10px] sm:text-xs text-[#525252] font-medium tracking-tight">
          © 2026 SkyMart • Built with React + Redux + TanStack Query
        </p>
      </div>
    </footer>
  );
};

export default Footer;
