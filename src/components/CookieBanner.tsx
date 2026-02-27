import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Összes elfogadása"
      declineButtonText="Elutasítás"
      enableDeclineButton
      cookieName="harmath-klima-cookie-consent"
      style={{
        background: "hsl(0 0% 9%)",
        borderTop: "1px solid hsl(0 0% 18%)",
        padding: "20px 24px",
        alignItems: "center",
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.5)",
      }}
      buttonStyle={{
        background: "hsl(4 75% 42%)",
        color: "white",
        fontSize: "13px",
        fontWeight: "700",
        padding: "12px 28px",
        borderRadius: "6px",
        fontFamily: "'Barlow', sans-serif",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "hsl(0 0% 60%)",
        fontSize: "13px",
        fontWeight: "600",
        padding: "12px 28px",
        borderRadius: "6px",
        fontFamily: "'Barlow', sans-serif",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        border: "1px solid hsl(0 0% 25%)",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      contentStyle={{
        flex: "1 0 300px",
        margin: "0 20px 0 0",
      }}
      buttonWrapperClasses="flex gap-3 items-center"
    >
      <div style={{ 
        color: "hsl(0 0% 85%)", 
        fontFamily: "'Barlow', sans-serif",
        fontSize: "14px",
        lineHeight: "1.6",
      }}>
        <p style={{ marginBottom: "8px" }}>
          Ez a weboldal sütiket (cookie-kat) használ a jobb felhasználói élmény érdekében, 
          valamint statisztikai és marketing célokra.
        </p>
        <p style={{ fontSize: "13px", color: "hsl(0 0% 65%)" }}>
          További információ:{" "}
          <Link 
            to="/cookie-tajekoztato" 
            style={{ 
              color: "hsl(4 75% 55%)", 
              textDecoration: "underline",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(4 75% 65%)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(4 75% 55%)")}
          >
            Cookie Tájékoztató
          </Link>
          {" · "}
          <Link 
            to="/adatkezelesi-tajekoztato" 
            style={{ 
              color: "hsl(4 75% 55%)", 
              textDecoration: "underline",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(4 75% 65%)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(4 75% 55%)")}
          >
            Adatkezelési Tájékoztató
          </Link>
        </p>
      </div>
    </CookieConsent>
  );
};

export default CookieBanner;
