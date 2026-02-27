import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
            Adatkezelési Tájékoztató
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
                1. Adatkezelő adatai
              </h2>
              <div 
                className="p-6 rounded-lg mb-4"
                style={{ 
                  background: "hsl(0 0% 9%)",
                  border: "1px solid hsl(0 0% 18%)",
                }}
              >
                <p className="mb-2"><strong>Cégnév:</strong> Harmath-Klíma Korlátolt Felelősségű Társaság</p>
                <p className="mb-2"><strong>Rövidített név:</strong> Harmath-Klíma Kft.</p>
                <p className="mb-2"><strong>Székhely:</strong> 1202 Budapest, Pusztakamarás utca 26.</p>
                <p className="mb-2"><strong>Adószám:</strong> 32716584-2-43</p>
                <p className="mb-2"><strong>Cégjegyzékszám:</strong> 01-09-364982</p>
                <p className="mb-2"><strong>Alapítás éve:</strong> 2024</p>
                <p className="mb-2"><strong>Főtevékenység:</strong> Elektromos háztartási cikk nagykereskedelme (TEÁOR: 4643)</p>
                <p className="mb-2"><strong>E-mail:</strong> harmathklima@gmail.com</p>
                <p className="mb-2"><strong>Telefon:</strong> +36 30 950 88 88</p>
                <p className="mb-2"><strong>Weboldal:</strong> bvisualxhtm.com</p>
              </div>
              <p className="leading-relaxed">
                A Harmath-Klíma Kft. (a továbbiakban: Adatkezelő) magára nézve kötelezőnek ismeri el 
                jelen jogi közlemény tartalmát. Kötelezettséget vállal arra, hogy tevékenységével 
                kapcsolatos minden adatkezelés megfelel a jelen szabályzatban és a hatályos 
                nemzeti jogszabályokban, valamint az Európai Unió jogi aktusaiban meghatározott 
                elvárásoknak.
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
                2. Alkalmazandó jogszabályok
              </h2>
              <p className="mb-4 leading-relaxed">
                Az adatkezelés az alábbi jogszabályok alapján történik:
              </p>
              <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
                <li className="mb-2">
                  Az Európai Parlament és a Tanács (EU) 2016/679 rendelete (2016. április 27.) 
                  – General Data Protection Regulation (GDPR)
                </li>
                <li className="mb-2">
                  2011. évi CXII. törvény – az információs önrendelkezési jogról és az információszabadságról (Infotv.)
                </li>
                <li className="mb-2">
                  2001. évi CVIII. törvény – az elektronikus kereskedelmi szolgáltatások, 
                  valamint az információs társadalommal összefüggő szolgáltatások egyes kérdéseiről (Elkertv.)
                </li>
                <li className="mb-2">
                  2008. évi XLVIII. törvény – a gazdasági reklámtevékenység alapvető feltételeiről 
                  és egyes korlátairól (Grtv.)
                </li>
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
                3. Kapcsolatfelvételi űrlap adatkezelése (Web3Forms)
              </h2>
              
              <div className="mb-6">
                <h3 
                  className="text-xl font-bold uppercase mb-3"
                  style={{ 
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "hsl(0 0% 85%)",
                  }}
                >
                  Kezelt adatok köre
                </h3>
                <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
                  <li className="mb-2">Név</li>
                  <li className="mb-2">E-mail cím</li>
                  <li className="mb-2">Telefonszám (opcionális)</li>
                  <li className="mb-2">Üzenet tartalma</li>
                  <li className="mb-2">IP cím (automatikusan naplózva)</li>
                  <li className="mb-2">Időbélyeg (üzenet küldésének időpontja)</li>
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
                  Adatkezelés célja
                </h3>
                <p className="leading-relaxed">
                  Az érintett által megadott személyes adatok kezelése kapcsolatfelvétel, 
                  ajánlatkérés, érdeklődés, panaszkezelés céljából történik. Az adatkezelés 
                  célja az érintett által küldött üzenet megválaszolása, a vele való kapcsolattartás.
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
                  Adatkezelés jogalapja
                </h3>
                <p className="leading-relaxed">
                  Az adatkezelés jogalapja a GDPR 6. cikk (1) bekezdés a) pontja alapján 
                  az érintett önkéntes hozzájárulása. A hozzájárulás megadása az űrlap 
                  elküldésével történik.
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
                  Adatok tárolásának időtartama
                </h3>
                <p className="leading-relaxed">
                  Az adatok tárolásának időtartama: az érintett kérésének teljesítéséig, 
                  de maximum a megkeresést követő 2 évig. Az érintett bármikor kérheti 
                  adatainak törlését.
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
                  Adatfeldolgozó
                </h3>
                <div 
                  className="p-4 rounded-lg"
                  style={{ 
                    background: "hsl(0 0% 9%)",
                    border: "1px solid hsl(0 0% 18%)",
                  }}
                >
                  <p className="mb-2"><strong>Szolgáltató:</strong> Web3Forms</p>
                  <p className="mb-2"><strong>Weboldal:</strong> https://web3forms.com</p>
                  <p className="leading-relaxed">
                    A Web3Forms szolgáltatás kezeli az űrlap adatokat, és e-mailben továbbítja 
                    azokat az Adatkezelő részére. A Web3Forms adatvédelmi irányelvei elérhetők 
                    a szolgáltató weboldalán.
                  </p>
                </div>
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
                4. Cookie-k (sütik) használata
              </h2>
              <p className="mb-4 leading-relaxed">
                Weboldalunk sütiket (cookie-kat) használ a felhasználói élmény javítása, 
                valamint statisztikai és marketing célokra. A sütikkel kapcsolatos részletes 
                információkat a{" "}
                <Link 
                  to="/cookie-tajekoztato"
                  style={{ 
                    color: "hsl(4 75% 55%)", 
                    textDecoration: "underline",
                  }}
                >
                  Cookie Tájékoztatónkban
                </Link>
                {" "}találja.
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
                5. Az érintettek jogai
              </h2>
              
              <div className="mb-6">
                <h3 
                  className="text-xl font-bold uppercase mb-3"
                  style={{ 
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "hsl(0 0% 85%)",
                  }}
                >
                  Hozzáférési jog
                </h3>
                <p className="leading-relaxed">
                  Ön jogosult arra, hogy az Adatkezelőtől visszajelzést kapjon arra vonatkozóan, 
                  hogy személyes adatainak kezelése folyamatban van-e, és ha ilyen adatkezelés 
                  folyamatban van, jogosult arra, hogy a személyes adatokhoz és információkhoz 
                  hozzáférést kapjon.
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
                  Helyesbítéshez való jog
                </h3>
                <p className="leading-relaxed">
                  Ön jogosult arra, hogy kérésére az Adatkezelő indokolatlan késedelem nélkül 
                  helyesbítse a rá vonatkozó pontatlan személyes adatokat.
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
                  Törléshez való jog („elfeledtetéshez való jog")
                </h3>
                <p className="leading-relaxed">
                  Ön jogosult arra, hogy kérésére az Adatkezelő indokolatlan késedelem nélkül 
                  törölje a rá vonatkozó személyes adatokat.
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
                  Adatkezelés korlátozásához való jog
                </h3>
                <p className="leading-relaxed">
                  Ön jogosult arra, hogy kérésére az Adatkezelő korlátozza az adatkezelést.
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
                  Adathordozhatósághoz való jog
                </h3>
                <p className="leading-relaxed">
                  Ön jogosult arra, hogy a rá vonatkozó, általa az Adatkezelő rendelkezésére 
                  bocsátott személyes adatokat tagolt, széles körben használt, géppel olvasható 
                  formátumban megkapja.
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
                  Tiltakozáshoz való jog
                </h3>
                <p className="leading-relaxed">
                  Ön jogosult arra, hogy a saját helyzetével kapcsolatos okokból bármikor 
                  tiltakozzon személyes adatainak kezelése ellen.
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
                  Visszavonáshoz való jog
                </h3>
                <p className="leading-relaxed">
                  Ön jogosult arra, hogy hozzájárulását bármikor visszavonja. A hozzájárulás 
                  visszavonása nem érinti a hozzájáruláson alapuló, a visszavonás előtti 
                  adatkezelés jogszerűségét.
                </p>
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
                6. Jogérvényesítési lehetőségek
              </h2>
              <p className="mb-4 leading-relaxed">
                Amennyiben Ön úgy érzi, hogy adatkezelőnk megsértette a hatályos adatvédelmi 
                jogszabályok rendelkezéseit, úgy az alábbi jogérvényesítési lehetőségek állnak 
                rendelkezésére:
              </p>

              <div className="mb-6">
                <h3 
                  className="text-xl font-bold uppercase mb-3"
                  style={{ 
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "hsl(0 0% 85%)",
                  }}
                >
                  Panasz az adatkezelőnél
                </h3>
                <p className="leading-relaxed mb-2">
                  Kérjük, jelezze felénk problémáját az alábbi elérhetőségeken:
                </p>
                <div 
                  className="p-4 rounded-lg"
                  style={{ 
                    background: "hsl(0 0% 9%)",
                    border: "1px solid hsl(0 0% 18%)",
                  }}
                >
                  <p className="mb-2">E-mail: harmathklima@gmail.com</p>
                  <p>Telefon: +36 30 950 88 88</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 
                  className="text-xl font-bold uppercase mb-3"
                  style={{ 
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "hsl(0 0% 85%)",
                  }}
                >
                  Panasz a felügyeleti hatóságnál
                </h3>
                <p className="leading-relaxed mb-2">
                  Ön jogosult arra, hogy panaszt tegyen a Nemzeti Adatvédelmi és Információszabadság 
                  Hatóságnál:
                </p>
                <div 
                  className="p-4 rounded-lg"
                  style={{ 
                    background: "hsl(0 0% 9%)",
                    border: "1px solid hsl(0 0% 18%)",
                  }}
                >
                  <p className="mb-2"><strong>Nemzeti Adatvédelmi és Információszabadság Hatóság</strong></p>
                  <p className="mb-2">Székhely: 1055 Budapest, Falk Miksa utca 9-11.</p>
                  <p className="mb-2">Levelezési cím: 1363 Budapest, Pf. 9.</p>
                  <p className="mb-2">Telefon: +36 (1) 391-1400</p>
                  <p className="mb-2">Fax: +36 (1) 391-1410</p>
                  <p className="mb-2">E-mail: ugyfelszolgalat@naih.hu</p>
                  <p>Weboldal: https://naih.hu</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 
                  className="text-xl font-bold uppercase mb-3"
                  style={{ 
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "hsl(0 0% 85%)",
                  }}
                >
                  Bírósági eljárás
                </h3>
                <p className="leading-relaxed">
                  Ön jogosult arra, hogy a jogainak megsértése esetén bírósághoz forduljon. 
                  A per elbírálása a törvényszék hatáskörébe tartozik. A per – az Ön választása 
                  szerint – az Ön lakóhelye vagy tartózkodási helye szerinti törvényszék előtt 
                  is megindítható.
                </p>
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
                7. Adatbiztonság
              </h2>
              <p className="leading-relaxed">
                Az Adatkezelő kijelenti, hogy a személyes adatok kezelésekor gondoskodik az adatok 
                biztonságáról, megteszi azokat a technikai és szervezési intézkedéseket, amelyek 
                a jogszabályok előírásainak megfelelnek. Az Adatkezelő az adatokat megfelelő 
                intézkedésekkel védi a jogosulatlan hozzáférés, megváltoztatás, továbbítás, 
                nyilvánosságra hozatal, törlés vagy megsemmisítés, valamint a véletlen megsemmisülés 
                és sérülés, továbbá az alkalmazott technika megváltozásából fakadó hozzáférhetetlenné 
                válás ellen.
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
                8. Záró rendelkezések
              </h2>
              <p className="mb-4 leading-relaxed">
                Az Adatkezelő fenntartja a jogot, hogy jelen Adatkezelési Tájékoztatót 
                egyoldalúan módosítsa. A módosítás hatályba lépésének időpontja a módosított 
                Adatkezelési Tájékoztató közzétételének időpontja.
              </p>
              <p className="leading-relaxed">
                Jelen Adatkezelési Tájékoztató 2026. február 27. napján lép hatályba.
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
                Kapcsolatfelvétel
              </h2>
              <p className="mb-4 leading-relaxed">
                Ha kérdése van az adatkezeléssel kapcsolatban, kérjük, vegye fel velünk a kapcsolatot:
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
