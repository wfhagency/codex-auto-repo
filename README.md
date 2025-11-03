# Netwise Website - Elementor Kit & Homepage Template

## 📦 Zawartość Pakietu

Kompletny pakiet do zbudowania strony Netwise w WordPress + Elementor z **w pełni edytowalnymi globalnymi stylami**.

```
📁 codex-auto-repo/
├── 📄 README.md (ten plik)
├── 📄 NETWISE_HOMEPAGE_ELEMENTOR_SPEC.md (szczegółowa specyfikacja designu)
├── 📄 ELEMENTOR-SETUP-GUIDE.md (👈 ZACZNIJ TUTAJ - kompletny przewodnik konfiguracji)
├── 📄 elementor-global-settings.json (dane do ręcznej konfiguracji)
├── 📄 elementor-kit-netwise.json (plik konfiguracyjny - dla zaawansowanych)
└── 📄 netwise-custom-styles.css (opcjonalne dodatkowe style CSS)
```

---

## 🚀 Szybki Start

### Krok 1: Zainstaluj WordPress i Wtyczki

**Wymagania:**
- WordPress 6.0+
- PHP 7.4+
- Elementor Pro (licencja)
- CrocoBlock Suite (licencja)
- The Plus Addons for Elementor
- Essential Addons for Elementor

### Krok 2: Otwórz Przewodnik Konfiguracji

**👉 Otwórz plik: [`ELEMENTOR-SETUP-GUIDE.md`](ELEMENTOR-SETUP-GUIDE.md)**

Ten plik zawiera **kompletne instrukcje krok po kroku**, jak:
1. Skonfigurować Global Colors (wszystkie kolory edytowalne w Elementor)
2. Skonfigurować Global Fonts (wszystkie czcionki edytowalne w Elementor)
3. Skonfigurować Theme Style (H1-H6, Body, Links)
4. Stworzyć Button Presety (buttony edytowalne globalnie)
5. Zbudować każdą sekcję Homepage

### Krok 3: Postępuj Zgodnie z Instrukcjami

Przewodnik przeprowadzi Cię przez:
- ✅ Konfigurację 6 globalnych kolorów
- ✅ Konfigurację wszystkich fontów (Montserrat)
- ✅ Stworzenie 3 globalnych buttonów
- ✅ Budowę 13 sekcji Homepage
- ✅ Edycję stylów w panelu Elementor (bez CSS!)

---

## 📖 Opis Plików

### 1. `ELEMENTOR-SETUP-GUIDE.md` ⭐ GŁÓWNY PRZEWODNIK
**Dla kogo:** Każdy, kto będzie budował stronę

**Co zawiera:**
- Krok po kroku konfiguracja WSZYSTKICH globalnych ustawień
- Screenshoty gdzie klikać w panelu Elementor
- Dokładne wartości dla każdego ustawienia
- Instrukcje budowy każdej sekcji
- Rozwiązywanie problemów

**👉 Wszystko w tym pliku jest edytowalne w panelu Elementor!**

### 2. `NETWISE_HOMEPAGE_ELEMENTOR_SPEC.md`
**Dla kogo:** Developerzy i designerzy

**Co zawiera:**
- Kompletna specyfikacja techniczna designu
- Link do Figmy
- Szczegółowy opis każdej sekcji
- Wartości kolorów, fontów, spacing
- Checklistę implementacji (20 faz)

### 3. `elementor-global-settings.json`
**Dla kogo:** Developerzy

**Co zawiera:**
- Dane wszystkich global colors
- Dane wszystkich global fonts
- Wartości dla button styles
- Spacing system
- Shadows i gradients

**Uwaga:** Ten plik to **referencja danych**. Nie importujesz go bezpośrednio - użyj instrukcji z `ELEMENTOR-SETUP-GUIDE.md`, aby wprowadzić te wartości przez panel Elementor.

### 4. `elementor-kit-netwise.json`
**Dla kogo:** Zaawansowani użytkownicy

**Co zawiera:**
- Próba automatycznego exportu konfiguracji
- Custom CSS dla specjalnych efektów

**Uwaga:** Elementor nie ma pełnego API do importu globalnych ustawień, dlatego **zalecamy ręczną konfigurację** według `ELEMENTOR-SETUP-GUIDE.md`.

### 5. `netwise-custom-styles.css`
**Dla kogo:** Opcjonalne

**Co zawiera:**
- Dodatkowe klasy CSS dla zaawansowanych efektów
- Klasy pomocnicze (utility classes)
- Animacje i przejścia

**Jak użyć:**
Skopiuj zawartość do: `Elementor → Custom CSS` lub `Appearance → Customize → Additional CSS`

---

## 🎨 System Designu - Edytowalny w Elementor

### Kolory Globalne
Wszystkie **6 kolorów** są w pełni edytowalne:
- **Primary** - Dark Seashore Night (#1926A0)
- **Secondary** - Thick Green Accent (#7ED321)
- **Text** - Nero Dark (#262525)
- **Background** - Light Purple (#F6F6FE)
- **Pastel** - Pastel Eyeshadow (#DEDEEC)
- **White** - White (#FFFFFF)

**Gdzie edytować:** `Elementor → Site Settings → Global Colors`

### Typografia Globalna
Wszystkie **czcionki** są edytowalne:
- Font Family: **Montserrat** (Google Fonts)
- Weights: 400, 500, 700
- H1-H6 z responsive sizing
- Paragraph styles

**Gdzie edytować:** `Elementor → Site Settings → Global Fonts` i `Theme Style → Typography`

### Globalne Buttony
**3 presety buttonów** jako Global Widgets:
1. **Primary Button** - Biały z cieniem
2. **Secondary Button** - Outline (przezroczysty)
3. **CTA Button Small** - Mały dla headera

**Gdzie edytować:** `Elementor → Saved Templates → Saved Widgets`

---

## 🏗️ Struktura Homepage

Homepage składa się z **13 sekcji**:

1. **Header** (Sticky navigation)
2. **Hero Section** (Full-width z background image)
3. **Problem Cards** (5-column grid)
4. **Solutions Section** (Tabs: Dynamics 365, Power Platform, Copilot)
5. **Solutions Detail Cards** (5-column)
6. **Logo Carousel** (Trusted partners)
7. **Stats Section** (Counters z gradient text)
8. **Testimonials** (Carousel)
9. **Octopus Section** (Custom illustration)
10. **Featured Article** (Elevated card)
11. **Blog Grid** (3-column post grid)
12. **Partnership Section** (Newsletter signup)
13. **Footer** (4-column links)

**Szczegółowe instrukcje budowy:** Zobacz `ELEMENTOR-SETUP-GUIDE.md` sekcja 7-8

---

## ✏️ Jak Edytować Style Po Zbudowaniu?

### Zmiana koloru globalnego:
```
1. Elementor → Site Settings → Global Colors
2. Kliknij kolor (np. "Primary")
3. Zmień wartość HEX
4. Kliknij Update
✅ Wszystkie elementy używające tego koloru zaktualizują się automatycznie!
```

### Zmiana fontu globalnego:
```
1. Elementor → Site Settings → Global Fonts
2. Kliknij font (np. "Primary")
3. Zmień rozmiar / wagę / odstępy
4. Kliknij Update
✅ Wszystkie texty używające tego fontu zaktualizują się automatycznie!
```

### Zmiana stylu buttona:
```
1. Elementor → Saved Templates → Saved Widgets
2. Znajdź button (np. "Primary Button")
3. Kliknij "Edit with Elementor"
4. Zmień kolory / padding / shadow
5. Kliknij Update
✅ Wszystkie instancje tego buttona zaktualizują się automatycznie!
```

---

## 📊 Design System Values

### 🎨 Kolory
```css
Primary:    #1926A0  /* Niebieski */
Accent:     #7ED321  /* Zielony */
Text:       #262525  /* Ciemny szary */
Background: #F6F6FE  /* Jasny fiolet */
Pastel:     #DEDEEC  /* Pastel */
White:      #FFFFFF  /* Biały */
```

### 📐 Spacing
```
Container: 1728px
Content:   1504px
Margins:   112px (Desktop), 40px (Tablet), 20px (Mobile)

Gaps:
- Small:  8px
- Medium: 16px
- Large:  24px
- XL:     32px
- XXL:    40px
- XXXL:   64px
```

### 🔠 Typography
```
Font: Montserrat (Google Fonts)
Weights: 400, 500, 700

H1: 80px / 700 / -4px (Desktop)
H2: 64px / 700 / -3.2px
H3: 48px / 700 / -0.96px
H4: 32px / 700 / -0.64px
H5: 24px / 700 / -0.48px
H6: 20px / 700 / -0.4px

Body: 20px / 500 / -0.8px
```

### 🔘 Border Radius
```
Small:  8px   (Cards, images)
Medium: 16px  (Larger cards)
Large:  40px  (Buttons)
Full:   100px (Pill buttons)
```

---

## 🔧 Instalacja Wtyczek

### Wymagane (Premium):
1. **Elementor Pro** - https://elementor.com/pricing/
2. **CrocoBlock Suite** - https://crocoblock.com/pricing/
   - JetElements
   - JetTabs
   - JetBlocks
   - JetMenu

### Wymagane (Free lub Premium):
3. **The Plus Addons** - https://theplusaddons.com/
4. **Essential Addons** - https://essential-addons.com/elementor/

### Instalacja:
```
1. WordPress Dashboard
2. Plugins → Add New
3. Zainstaluj każdą wtyczkę
4. Aktywuj wszystkie
5. Wprowadź license keys (dla premium)
```

---

## 📱 Responsive Design

Projekt jest **w pełni responsywny** z breakpointami:

```
Desktop Large: 1920px+
Desktop:       1440px - 1919px
Laptop:        1024px - 1439px
Tablet:        768px - 1023px
Mobile:        320px - 767px
```

**Wszystkie ustawienia responsive są edytowalne w panelu Elementor!**

Kliknij ikonę **responsive** (desktop/tablet/mobile) przy każdym kontrolce, aby ustawić różne wartości dla każdego breakpointa.

---

## ⚡ Performance

### Optymalizacja:
- [ ] Użyj WebP format dla obrazów
- [ ] Włącz lazy loading: `Elementor → Settings → Advanced → Lazy Load`
- [ ] Minifikuj CSS/JS: `Elementor → Tools → Regenerate CSS`
- [ ] Użyj caching plugin (WP Rocket, W3 Total Cache)
- [ ] CDN dla Montserrat font

### Target:
- Page Load: < 3s (3G)
- First Contentful Paint: < 1.5s
- Lighthouse Score: > 85

---

## 🐛 Rozwiązywanie Problemów

### Problem: Kolory nie pokazują się
**Rozwiązanie:** Upewnij się, że zapisujesz w `Site Settings → Global Colors`, a nie `Page Settings`

### Problem: Fonty nie ładują się
**Rozwiązanie:**
1. `Elementor → Settings → Advanced → Google Fonts: Enable`
2. `Elementor → Tools → Regenerate CSS`

### Problem: Button nie aktualizuje się globalnie
**Rozwiązanie:** Sprawdź czy button został zapisany jako **Global Widget** (prawy klik → Save as Global)

**Więcej rozwiązań:** Zobacz `ELEMENTOR-SETUP-GUIDE.md` sekcja 12

---

## 📞 Wsparcie

### Dokumentacja:
- **Elementor:** https://elementor.com/help/
- **CrocoBlock:** https://crocoblock.com/knowledge-base/
- **The Plus:** https://theplusaddons.com/docs/
- **Essential Addons:** https://essential-addons.com/elementor/docs/

### Figma Design:
- **Homepage:** https://www.figma.com/design/kEMamUNdFneCwqH6AfFtIw/Netwise-Website?node-id=402-2514&m=dev

---

## 📋 Checklist Implementacji

### Przed rozpoczęciem:
- [ ] WordPress zainstalowany
- [ ] Wszystkie wtyczki zainstalowane i aktywowane
- [ ] License keys wprowadzone
- [ ] Przeczytany: `ELEMENTOR-SETUP-GUIDE.md`

### Konfiguracja (według ELEMENTOR-SETUP-GUIDE.md):
- [ ] Global Colors skonfigurowane (6 kolorów)
- [ ] Global Fonts skonfigurowane (4 fonty)
- [ ] Theme Style ustawiony (H1-H6, Body, Links)
- [ ] 3 Button Presety zapisane jako Global Widgets
- [ ] Container width: 1728px

### Budowa strony:
- [ ] Header template utworzony
- [ ] Footer template utworzony
- [ ] Homepage page utworzona
- [ ] 13 sekcji zbudowanych
- [ ] Wszystkie sekcje używają Global Colors
- [ ] Wszystkie headingi używają Global Typography
- [ ] Wszystkie buttony używają Global Widgets

### Testy:
- [ ] Responsywność przetestowana (Desktop, Tablet, Mobile)
- [ ] Wszystkie linki działają
- [ ] Hover effects działają
- [ ] Formularz newsletter działa
- [ ] Page speed < 3s

### Finalizacja:
- [ ] Obrazy zoptymalizowane (WebP)
- [ ] SEO meta tags dodane
- [ ] Cache włączony
- [ ] Backup utworzony

---

## 🎯 Następne Kroki

1. **Przeczytaj:** `ELEMENTOR-SETUP-GUIDE.md`
2. **Skonfiguruj:** Global Colors i Fonts
3. **Zbuduj:** Homepage według instrukcji
4. **Testuj:** Responsywność i funkcjonalność
5. **Optymalizuj:** Performance i SEO

---

## 📄 Licencja

Ten projekt jest szablonem dla strony Netwise.
Design: Figma (Netwise Website)
Implementacja: WordPress + Elementor Pro

---

## 👨‍💻 Autor

**Utworzone przez:** Claude Code
**Data:** 3 Listopada 2025
**Projekt:** Netwise Website - Homepage Implementation
**Wersja:** 1.0

---

## ❓ FAQ

### Czy muszę znać CSS?
**Nie!** Wszystkie style są edytowalne w panelu Elementor. CSS jest opcjonalny dla zaawansowanych efektów.

### Czy mogę zmienić kolory później?
**Tak!** Wszystkie kolory są globalne. Zmiana w `Global Colors` zaktualizuje całą stronę automatycznie.

### Czy mogę użyć innego fontu niż Montserrat?
**Tak!** Zmień font w `Global Fonts` i cała strona zaktualizuje się automatycznie.

### Czy muszę kupić wszystkie wtyczki premium?
**Tak**, Elementor Pro i CrocoBlock są wymagane dla pełnej funkcjonalności (tabs, carousels, header/footer builder).

### Ile czasu zajmie implementacja?
Przy użyciu `ELEMENTOR-SETUP-GUIDE.md`:
- Konfiguracja: 1-2h
- Budowa Homepage: 4-6h
- Testy i optymalizacja: 1-2h
- **Razem: ~6-10h**

---

**🚀 Powodzenia w budowie strony Netwise!**

Jeśli masz pytania, zobacz `ELEMENTOR-SETUP-GUIDE.md` lub dokumentację wtyczek.
