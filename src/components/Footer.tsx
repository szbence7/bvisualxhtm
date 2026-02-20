const Footer = () => (
  <footer
    className="py-8 px-8 flex flex-col md:flex-row items-center justify-between gap-4"
    style={{
      background: "hsl(0 0% 4%)",
      borderTop: "1px solid hsl(0 0% 12%)",
    }}
  >
    <p
      className="text-xs tracking-widest uppercase"
      style={{ color: "hsl(0 0% 40%)", fontFamily: "'Barlow', sans-serif" }}
    >
      © 2025 B Visual × HTM. All rights reserved.
    </p>
    <div className="flex gap-6">
      {["Instagram", "YouTube", "Twitter"].map((s) => (
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
  </footer>
);

export default Footer;
