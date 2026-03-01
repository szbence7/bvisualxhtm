import { Link } from "react-router-dom";

const Footer = () => (
  <footer
    className="py-8 px-8 flex flex-col md:flex-row items-center justify-between gap-4"
    style={{
      background: "hsl(0 0% 4%)",
      borderTop: "1px solid hsl(0 0% 12%)",
    }}
  >
    <div className="flex flex-col gap-2">
      <p
        className="text-xs tracking-wider"
        style={{ color: "hsl(0 0% 60%)", fontFamily: "'Barlow', sans-serif" }}
      >
        <span style={{ color: "hsl(4 75% 55%)" }}>bvisual × htm</span> | Visual Architects
      </p>
      <p
        className="text-xs tracking-wide"
        style={{ color: "hsl(0 0% 50%)", fontFamily: "'Barlow', sans-serif" }}
      >
        📸🎥 Cinematic storytelling & Tech
      </p>
      <p
        className="text-xs tracking-widest uppercase"
        style={{ color: "hsl(0 0% 40%)", fontFamily: "'Barlow', sans-serif" }}
      >
        © 2025 B Visual × HTM. Minden jog fenntartva.
      </p>
    </div>
    <div className="flex-1 flex justify-center">
      <p
        className="text-xs tracking-wide"
        style={{ color: "hsl(0 0% 50%)", fontFamily: "'Barlow', sans-serif" }}
      >
        Made by{" "}
        <a
          href="https://bencecodes.hu/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-200"
          style={{ color: "hsl(4 75% 55%)" }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.textDecoration = "underline")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.textDecoration = "none")}
        >
          benceCodes;
        </a>
      </p>
    </div>
    <div className="flex flex-col gap-4 items-end">
      <div className="flex gap-6">
        {[
          { label: "Instagram", href: "https://www.instagram.com/b_visual_" },
          { label: "YouTube", href: "#" },
          { label: "TikTok", href: "#" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            {...(href !== "#" && { target: "_blank", rel: "noopener noreferrer" })}
            className="text-xs tracking-widest uppercase transition-colors duration-200"
            style={{ color: "hsl(0 0% 40%)", fontFamily: "'Barlow', sans-serif" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "hsl(4 75% 55%)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "hsl(0 0% 40%)")}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="flex gap-4">
        <Link
          to="/cookie-tajekoztato"
          className="text-xs tracking-widest uppercase transition-colors duration-200"
          style={{ color: "hsl(0 0% 40%)", fontFamily: "'Barlow', sans-serif" }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "hsl(4 75% 55%)")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "hsl(0 0% 40%)")}
        >
          Cookie Tájékoztató
        </Link>
        <Link
          to="/adatkezelesi-tajekoztato"
          className="text-xs tracking-widest uppercase transition-colors duration-200"
          style={{ color: "hsl(0 0% 40%)", fontFamily: "'Barlow', sans-serif" }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "hsl(4 75% 55%)")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "hsl(0 0% 40%)")}
        >
          Adatkezelési Tájékoztató
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
