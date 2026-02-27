"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { label: "Kezdőlap", href: "#home" },
    { label: "Szolgáltatások", href: "#services" },
    { label: "Portfólió", href: "#portfolio-work" },
    { label: "Rólunk", href: "#about" },
    { label: "Kapcsolat", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
      {/* Background Layer */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ease-out ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: "linear-gradient(180deg, hsl(0 0% 0% / 0.85) 0%, transparent 100%)" }}
      />
      
      {/* Content Layer */}
      <div className="relative z-10 flex items-center gap-3">
        {/* Logo */}
        <div className="relative w-12 h-12">
          <img src="/src/assets/navlogo.png" alt="B VISUAL × HTM Logo" className="w-full h-full object-contain" />
        </div>
        <div>
          <p className="text-white font-bold text-sm tracking-wider leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>B VISUAL × HTM</p>
        </div>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-10 relative z-10">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="nav-link text-sm tracking-widest font-medium uppercase"
              style={{ color: "hsl(0 0% 85%)", fontFamily: "'Barlow', sans-serif" }}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <button className="md:hidden text-white relative z-10" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 flex flex-col gap-6 px-8 py-8"
          style={{ background: "hsl(0 0% 6% / 0.98)" }}>
          {links.map((link) => (
            <a key={link.label} href={link.href}
              className="text-white text-lg tracking-widest uppercase font-medium"
              onClick={() => setOpen(false)}
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
