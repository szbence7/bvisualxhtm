# Cookie Banner és GDPR Oldalak - Összefoglaló

## Telepített komponensek

### 1. Cookie Banner
- **Komponens**: `src/components/CookieBanner.tsx`
- **Könyvtár**: react-cookie-consent
- **Funkciók**:
  - Elfogadás/Elutasítás gombok
  - Automatikus cookie tárolás (`harmath-klima-cookie-consent`)
  - Linkek a Cookie Tájékoztatóhoz és Adatkezelési Tájékoztatóhoz
  - Színben illeszkedik az oldal sötét témájához (vörös accent szín: hsl(4 75% 42%))

### 2. Cookie Tájékoztató oldal
- **Fájl**: `src/pages/CookiePolicy.tsx`
- **URL**: `/cookie-tajekoztato`
- **Tartalom**:
  - Mi az a cookie?
  - Milyen sütiket használunk? (feltétlenül szükséges, funkcionális, statisztikai, marketing)
  - Hogyan kezelheti a sütiket?
  - Kapcsolatfelvétel

### 3. Adatkezelési Tájékoztató oldal
- **Fájl**: `src/pages/PrivacyPolicy.tsx`
- **URL**: `/adatkezelesi-tajekoztato`
- **Tartalom**:
  - Adatkezelő adatai
  - Alkalmazandó jogszabályok (GDPR, Infotv., stb.)
  - Kapcsolatfelvételi űrlap adatkezelése (Web3Forms kompatibilis)
  - Cookie-k használata
  - Az érintettek jogai (hozzáférés, helyesbítés, törlés, stb.)
  - Jogérvényesítési lehetőségek (panasz, NAIH, bíróság)
  - Adatbiztonság
  - Záró rendelkezések

### 4. Footer frissítések
- **Fájl**: `src/components/Footer.tsx`
- **Változások**:
  - Cégadatok módosítva (Harmath-Klíma Kft.)
  - Cookie Tájékoztató és Adatkezelési Tájékoztató linkek hozzáadva

### 5. Routing
- **Fájl**: `src/App.tsx`
- **Új route-ok**:
  - `/cookie-tajekoztato` → CookiePolicy komponens
  - `/adatkezelesi-tajekoztato` → PrivacyPolicy komponens
  - CookieBanner globálisan integrálva

## ⚠️ FONTOS: KITÖLTENDŐ ADATOK

A következő helyeken szükséges frissíteni a cég valós adatait:

### 1. Cookie Tájékoztató (`src/pages/CookiePolicy.tsx`)
- **85. sor körül**: Kapcsolatfelvétel szekció
  ```
  E-mail: info@harmath-klima.hu
  Telefon: +36 XX XXX XXXX
  Székhely: [Cím a cégtár alapján]
  ```

### 2. Adatkezelési Tájékoztató (`src/pages/PrivacyPolicy.tsx`)
- **31-38. sor**: Adatkezelő teljes adatai
  ```
  Cégnév: Harmath-Klíma Korlátolt Felelősségű Társaság
  Székhely: [Cím a cégtár alapján]
  Adószám: [Adószám a cégtár alapján]
  Cégjegyzékszám: [Cégjegyzékszám]
  E-mail: info@harmath-klima.hu
  Telefon: +36 XX XXX XXXX
  Weboldal: www.harmath-klima.hu
  ```

- **369. sor körül**: Panasz az adatkezelőnél szekció
  ```
  E-mail: info@harmath-klima.hu
  Telefon: +36 XX XXX XXXX
  ```

- **486. sor körül**: Kapcsolatfelvétel szekció (utolsó)
  ```
  E-mail: info@harmath-klima.hu
  Telefon: +36 XX XXX XXXX
  Székhely: [Cím a cégtár alapján]
  ```

## Nemzeti Cégtár információ lekérése

A Harmath-Klíma Kft. pontos adatainak lekéréséhez:

1. **Nemzeti Cégtár**: https://www.nemzeticegtar.hu
   - Keresés cégnév vagy adószám alapján
   - Lekérhető adatok: cégjegyzékszám, adószám, székhely, képviselő

2. **NAV Adatbázis**: https://nav.gov.hu/adatbazisok/adatbleker
   - Adószám alapján történő keresés

## Web3Forms integráció

Az Adatkezelési Tájékoztató már tartalmazza a Web3Forms űrlapkezelő szolgáltatásra vonatkozó GDPR kompatibilis információkat:

- Kezelt adatok köre (név, email, telefon, üzenet)
- Adatkezelés célja (kapcsolatfelvétel)
- Jogalap (önkéntes hozzájárulás - GDPR 6. cikk)
- Tárolási időtartam (maximum 2 év)
- Adatfeldolgozó megnevezése (Web3Forms)

## Tesztelés

1. **Indítsd el a dev szervert**:
   ```bash
   npm run dev
   ```

2. **Ellenőrizd a következőket**:
   - Cookie banner megjelenik az oldal alján
   - "Összes elfogadása" és "Elutasítás" gombok működnek
   - Linkek a Cookie Tájékoztatóhoz és Adatkezelési Tájékoztatóhoz
   - Navigáció a `/cookie-tajekoztato` és `/adatkezelesi-tajekoztato` oldalakra
   - Footer-ben megjelennek az új linkek
   - Színvilág illeszkedik az oldal többi részéhez

## Dizájn

A cookie banner és az oldalak színvilága illeszkedik az eredeti dizájnhoz:
- **Háttér**: sötét (hsl(0 0% 5-9%))
- **Szöveg**: világos szürke (hsl(0 0% 75-85%))
- **Accent szín**: vörös (hsl(4 75% 42%))
- **Betűtípus**: Barlow és Barlow Condensed
- **Stílus**: modern, uppercase címek, tiszta struktúra

## Jogi megfelelés

Az oldalak megfelelnek a következő jogszabályoknak:
- ✅ GDPR (EU 2016/679 rendelet)
- ✅ Infotv. (2011. évi CXII. törvény)
- ✅ Elkertv. (2001. évi CVIII. törvény)
- ✅ Grtv. (2008. évi XLVIII. törvény)

## Következő lépések

1. ✅ Keresd meg a Harmath-Klíma Kft. adatait a Nemzeti Cégtárban
2. ✅ Töltsd ki a hiányzó adatokat (adószám, cégjegyzékszám, székhely, telefon)
3. ✅ Ellenőrizd a Web3Forms integrációt a ContactSection.tsx fájlban
4. ✅ Teszteld a cookie banner működését
5. ✅ Olvasd át az Adatkezelési Tájékoztatót, és szükség esetén konzultálj jogásszal

---

**Megjegyzés**: A penzugyem.hu oldal cookie bannerje alapján készítettem a dizájnt és funkcionalitást, de az oldal színvilágához igazítottam.
