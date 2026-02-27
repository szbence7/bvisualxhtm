import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "hsl(0 0% 5%)" }}>
      <Navbar />
      
      <div className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 mb-8 text-sm tracking-wider uppercase transition-colors duration-200"
            style={{ 
              color: "hsl(0 0% 60%)",
              fontFamily: "'Barlow', sans-serif",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(4 75% 55%)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 60%)")}
          >
            <ArrowLeft size={16} />
            Vissza a főoldalra
          </Link>

          <h1 
            className="text-5xl md:text-7xl font-black uppercase text-white mb-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Cookie Tájékoztató
          </h1>

          <div 
            className="prose prose-invert max-w-none"
            style={{ 
              color: "hsl(0 0% 75%)",
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            <p style={{ fontSize: "14px", color: "hsl(0 0% 60%)", marginBottom: "24px" }}>
              Utolsó frissítés: 2026. február 27.
            </p>

            <section className="mb-8">
              <h2 
                className="text-3xl font-bold uppercase mb-4"
                style={{ 
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: "hsl(4 75% 55%)",
                }}
              >
                Mi az a cookie (süti)?
              </h2>
              <p className="mb-4 leading-relaxed">
                A cookie-k (sütik) kis szöveges fájlok, amelyeket a weboldal az Ön böngészőjében tárol, 
                amikor meglátogatja az oldalt. Ezek segítenek a weboldalnak megjegyezni az Ön beállításait 
                és preferenciáit, valamint bizonyos funkciókat működtetni.
              </p>
            </section>

            <section className="mb-8">
              <h2 
                className="text-3xl font-bold uppercase mb-4"
                style={{ 
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: "hsl(4 75% 55%)",
                }}
              >
                Milyen sütiket használunk?
              </h2>
              
              <div className="mb-6">
                <h3 
                  className="text-xl font-bold uppercase mb-3"
                  style={{ 
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "hsl(0 0% 85%)",
                  }}
                >
                  1. Feltétlenül szükséges sütik
                </h3>
                <p className="mb-2 leading-relaxed">
                  Ezek a sütik elengedhetetlenek a weboldal megfelelő működéséhez. 
                  Ezek nélkül a weboldal nem tudna megfelelően működni.
                </p>
                <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginTop: "12px" }}>
                  <li className="mb-2">
                    <strong>harmath-klima-cookie-consent</strong>: Tárolja az Ön cookie preferenciáit (1 év)
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 
                  className="text-xl font-bold uppercase mb-3"
                  style={{ 
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "hsl(0 0% 85%)",
                  }}
                >
                  2. Funkcionális sütik
                </h3>
                <p className="mb-2 leading-relaxed">
                  Ezek a sütik lehetővé teszik, hogy a weboldal megjegyezze az Ön választásait 
                  (például nyelv, régió) és személyre szabottabb funkciókat biztosítson.
                </p>
              </div>

              <div className="mb-6">
                <h3 
                  className="text-xl font-bold uppercase mb-3"
                  style={{ 
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "hsl(0 0% 85%)",
                  }}
                >
                  3. Statisztikai sütik
                </h3>
                <p className="mb-2 leading-relaxed">
                  Ezek a sütik segítenek megérteni, hogyan használják a látogatók a weboldalt, 
                  például mely oldalak a legnépszerűbbek, vagy hol tapasztalnak technikai problémákat.
                </p>
                <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginTop: "12px" }}>
                  <li className="mb-2">
                    Ezek a sütik csak az Ön kifejezett hozzájárulásával kerülnek alkalmazásra.
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 
                  className="text-xl font-bold uppercase mb-3"
                  style={{ 
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "hsl(0 0% 85%)",
                  }}
                >
                  4. Marketing sütik
                </h3>
                <p className="mb-2 leading-relaxed">
                  Ezek a sütik az Ön online tevékenységének nyomon követésére szolgálnak, 
                  hogy releváns hirdetéseket jeleníthessünk meg az Ön számára.
                </p>
                <ul style={{ listStyleType: "disc", paddingLeft: "24px", marginTop: "12px" }}>
                  <li className="mb-2">
                    Ezek a sütik csak az Ön kifejezett hozzájárulásával kerülnek alkalmazásra.
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 
                className="text-3xl font-bold uppercase mb-4"
                style={{ 
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: "hsl(4 75% 55%)",
                }}
              >
                Hogyan kezelheti a sütiket?
              </h2>
              <p className="mb-4 leading-relaxed">
                A legtöbb böngésző automatikusan elfogadja a sütiket, de Ön módosíthatja 
                a böngésző beállításait, hogy elutasítsa vagy törölje a sütiket. 
                Kérjük, vegye figyelembe, hogy bizonyos funkciók nem működnek megfelelően, 
                ha letiltja a sütiket.
              </p>
              <p className="mb-4 leading-relaxed">
                A cookie beállításokat a böngésző menüjében tudja módosítani:
              </p>
              <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
                <li className="mb-2">Chrome: Beállítások → Adatvédelem és biztonság → Sütik</li>
                <li className="mb-2">Firefox: Beállítások → Adatvédelem és biztonság → Sütik és oldaladatok</li>
                <li className="mb-2">Safari: Beállítások → Adatvédelem → Sütik és webhelyadatok</li>
                <li className="mb-2">Edge: Beállítások → Sütik és webhelyadatok</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 
                className="text-3xl font-bold uppercase mb-4"
                style={{ 
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: "hsl(4 75% 55%)",
                }}
              >
                Kapcsolatfelvétel
              </h2>
              <p className="mb-4 leading-relaxed">
                Ha kérdése van a cookie-kkal kapcsolatban, kérjük, vegye fel velünk a kapcsolatot:
              </p>
              <div 
                className="p-6 rounded-lg"
                style={{ 
                  background: "hsl(0 0% 9%)",
                  border: "1px solid hsl(0 0% 18%)",
                }}
              >
                <p className="mb-2"><strong>Harmath-Klíma Kft.</strong></p>
                <p className="mb-2">E-mail: harmathklima@gmail.com</p>
                <p className="mb-2">Telefon: +36 30 950 88 88</p>
                <p className="mb-2">Székhely: 1202 Budapest, Pusztakamarás utca 26.</p>
                <p>Adószám: 32716584-2-43</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 
                className="text-3xl font-bold uppercase mb-4"
                style={{ 
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: "hsl(4 75% 55%)",
                }}
              >
                További információ
              </h2>
              <p className="mb-4 leading-relaxed">
                Az adatkezeléssel kapcsolatos részletes információkért olvassa el{" "}
                <Link 
                  to="/adatkezelesi-tajekoztato"
                  style={{ 
                    color: "hsl(4 75% 55%)", 
                    textDecoration: "underline",
                  }}
                >
                  Adatkezelési Tájékoztatónkat
                </Link>.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
