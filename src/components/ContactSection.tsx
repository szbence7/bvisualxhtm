import { useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: "hsl(0 0% 5%)" }}
    >
      <div className="max-w-2xl mx-auto">
        <p
          className="text-xs tracking-[0.4em] uppercase mb-4"
          style={{ color: "hsl(4 75% 55%)", fontFamily: "'Barlow', sans-serif" }}
        >
          Let's Work Together
        </p>
        <h2
          className="text-5xl md:text-7xl font-black uppercase text-white mb-12"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Get in Touch
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-5 py-4 text-sm outline-none transition-all duration-200 focus:ring-1"
            style={{
              background: "hsl(0 0% 9%)",
              border: "1px solid hsl(0 0% 18%)",
              color: "hsl(0 0% 90%)",
              fontFamily: "'Barlow', sans-serif",
              letterSpacing: "0.05em",
              borderRadius: "2px",
            }}
            onFocus={(e) => (e.target.style.borderColor = "hsl(4 75% 42%)")}
            onBlur={(e) => (e.target.style.borderColor = "hsl(0 0% 18%)")}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-5 py-4 text-sm outline-none transition-all duration-200"
            style={{
              background: "hsl(0 0% 9%)",
              border: "1px solid hsl(0 0% 18%)",
              color: "hsl(0 0% 90%)",
              fontFamily: "'Barlow', sans-serif",
              letterSpacing: "0.05em",
              borderRadius: "2px",
            }}
            onFocus={(e) => (e.target.style.borderColor = "hsl(4 75% 42%)")}
            onBlur={(e) => (e.target.style.borderColor = "hsl(0 0% 18%)")}
          />
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full px-5 py-4 text-sm outline-none resize-none transition-all duration-200"
            style={{
              background: "hsl(0 0% 9%)",
              border: "1px solid hsl(0 0% 18%)",
              color: "hsl(0 0% 90%)",
              fontFamily: "'Barlow', sans-serif",
              letterSpacing: "0.05em",
              borderRadius: "2px",
            }}
            onFocus={(e) => (e.target.style.borderColor = "hsl(4 75% 42%)")}
            onBlur={(e) => (e.target.style.borderColor = "hsl(0 0% 18%)")}
          />
          <button
            className="flex items-center justify-center gap-3 px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase text-white transition-all duration-300 hover:brightness-110 active:scale-95 mt-2"
            style={{
              background: "hsl(4 75% 42%)",
              fontFamily: "'Barlow', sans-serif",
              borderRadius: "2px",
            }}
          >
            <Send size={16} />
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
