import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio-work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{ background: "linear-gradient(180deg, hsl(0 0% 0% / 0.85) 0%, transparent 100%)" }}>
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="1.5" opacity="0.9"/>
            <circle cx="24" cy="24" r="8" stroke="white" strokeWidth="1.5" opacity="0.9"/>
            <line x1="24" y1="4" x2="24" y2="16" stroke="white" strokeWidth="1.5"/>
            <line x1="24" y1="32" x2="24" y2="44" stroke="white" strokeWidth="1.5"/>
            <line x1="4" y1="24" x2="16" y2="24" stroke="white" strokeWidth="1.5"/>
            <line x1="32" y1="24" x2="44" y2="24" stroke="white" strokeWidth="1.5"/>
            <line x1="8.7" y1="8.7" x2="16.97" y2="16.97" stroke="white" strokeWidth="1.5"/>
            <line x1="31.03" y1="31.03" x2="39.3" y2="39.3" stroke="white" strokeWidth="1.5"/>
            <line x1="39.3" y1="8.7" x2="31.03" y2="16.97" stroke="white" strokeWidth="1.5"/>
            <line x1="16.97" y1="31.03" x2="8.7" y2="39.3" stroke="white" strokeWidth="1.5"/>
            <circle cx="30" cy="18" r="2" fill="hsl(4 75% 55%)" />
          </svg>
        </div>
        <div>
          <p className="text-white font-bold text-sm tracking-wider leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>B VISUAL</p>
          <p className="text-white text-sm tracking-wider leading-tight opacity-80" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>× HTM</p>
        </div>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-10">
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
      <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
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
