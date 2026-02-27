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
    <div className="flex flex-col gap-4 items-end">
      <div className="flex gap-6">
        {["Instagram", "YouTube", "TikTok"].map((s) => (
          <a
            key={s}
            href="#"
            className="text-xs tracking-widest uppercase transition-colors duration-200"
            style={{ color: "hsl(0 0% 40%)", fontFamily: "'Barlow', sans-serif" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "hsl(4 75% 55%)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "hsl(0 0% 40%)")}
          >
            {s}
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
