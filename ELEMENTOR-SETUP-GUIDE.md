# Netwise Elementor - Kompletny Przewodnik Konfiguracji

## 📋 Spis Treści
1. [Instalacja wtyczek](#1-instalacja-wtyczek)
2. [Konfiguracja Global Colors](#2-konfiguracja-global-colors)
3. [Konfiguracja Global Fonts](#3-konfiguracja-global-fonts)
4. [Konfiguracja Theme Style](#4-konfiguracja-theme-style)
5. [Tworzenie Button Presets](#5-tworzenie-button-presets)
6. [Konfiguracja Container Settings](#6-konfiguracja-container-settings)
7. [Budowa Homepage](#7-budowa-homepage)

---

## 1. Instalacja Wtyczek

### Wymagane wtyczki:
```
✓ Elementor Pro
✓ CrocoBlock Suite:
  - JetElements
  - JetTabs
  - JetBlocks
  - JetMenu
✓ The Plus Addons for Elementor
✓ Essential Addons for Elementor
```

### Kroki instalacji:
1. WordPress Dashboard → Plugins → Add New
2. Zainstaluj każdą wtyczkę
3. Aktywuj wszystkie wtyczki
4. Wprowadź license keys dla premium wtyczek

---

## 2. Konfiguracja Global Colors

**Ścieżka:** `Elementor → Site Settings → Global Colors`

### Krok po kroku:

#### 2.1. Ustaw Primary Color
1. Kliknij na **"Primary"** color
2. Zmień nazwę na: **"Primary - Dark Seashore Night"**
3. Ustaw kolor: `#1926A0`
4. Kliknij **"Update"**

#### 2.2. Ustaw Secondary Color
1. Kliknij na **"Secondary"**
2. Zmień nazwę na: **"Accent - Thick Green"**
3. Ustaw kolor: `#7ED321`
4. Kliknij **"Update"**

#### 2.3. Ustaw Text Color
1. Kliknij na **"Text"**
2. Zmień nazwę na: **"Text - Nero"**
3. Ustaw kolor: `#262525`
4. Kliknij **"Update"**

#### 2.4. Ustaw Accent Color
1. Kliknij na **"Accent"**
2. Zmień nazwę na: **"Background - Light Purple"**
3. Ustaw kolor: `#F6F6FE`
4. Kliknij **"Update"**

#### 2.5. Dodaj Custom Colors
Kliknij **"+ Add Color"** i dodaj:

**Color 5:**
- Nazwa: **"Pastel Eyeshadow"**
- Kolor: `#DEDEEC`

**Color 6:**
- Nazwa: **"White"**
- Kolor: `#FFFFFF`

### ✅ Rezultat:
Teraz we wszystkich widgetach Elementor będziesz mógł wybierać te kolory z listy rozwijanej Global Colors.

---

## 3. Konfiguracja Global Fonts

**Ścieżka:** `Elementor → Site Settings → Global Fonts`

### 3.1. Włącz Google Fonts
1. Idź do: `Elementor → Settings → Advanced`
2. Znajdź **"Google Fonts"**
3. Ustaw na **"Enable"**
4. Zapisz

### 3.2. Ustaw Primary Font
**Ścieżka:** `Site Settings → Global Fonts → Primary`

```
Family: Montserrat
Weight: 500 (Medium)
Size: 20px (Desktop), 18px (Mobile)
Line Height: 1.6
Letter Spacing: -0.8px
```

**Jak ustawić:**
1. Kliknij **"Primary"**
2. Font Family → Wybierz **"Montserrat"**
3. Weight → Wybierz **"500"**
4. Size → Desktop: `20`, Unit: `px`
5. Kliknij ikonę **responsywną** i ustaw Mobile: `18px`
6. Line Height → `1.6`, Unit: `em`
7. Letter Spacing → `-0.8`, Unit: `px`
8. Kliknij **"Update"**

### 3.3. Ustaw Secondary Font
**Ścieżka:** `Site Settings → Global Fonts → Secondary`

```
Family: Montserrat
Weight: 700 (Bold)
Size: 20px (Desktop), 18px (Mobile)
Line Height: 1.6
Letter Spacing: -0.8px
```

### 3.4. Ustaw Text Font
**Ścieżka:** `Site Settings → Global Fonts → Text`

```
Family: Montserrat
Weight: 500 (Medium)
Size: 20px (Desktop), 18px (Mobile)
Line Height: 1.6
Letter Spacing: -0.8px
```

### 3.5. Ustaw Accent Font
**Ścieżka:** `Site Settings → Global Fonts → Accent`

```
Family: Montserrat
Weight: 700 (Bold)
Size: 32px (Desktop), 24px (Mobile)
Line Height: 1.5
Letter Spacing: -0.64px
```

---

## 4. Konfiguracja Theme Style

**Ścieżka:** `Elementor → Site Settings → Theme Style`

### 4.1. Typography dla H1-H6

#### H1 (Hero Heading)
```
Font Family: Montserrat
Weight: 700 (Bold)

Desktop:
  Size: 80px
  Line Height: 1.1
  Letter Spacing: -4px

Tablet:
  Size: 56px
  Letter Spacing: -2.8px

Mobile:
  Size: 40px
  Letter Spacing: -2px
```

**Jak ustawić:**
1. Idź do: `Site Settings → Theme Style → Typography → H1`
2. Font Family → `Montserrat`
3. Weight → `700`
4. Size → `80`, Unit: `px`
5. Line Height → `1.1`
6. Letter Spacing → `-4`, Unit: `px`
7. Kliknij ikonę **responsive** (tablet/mobile)
8. Tablet: Size `56px`, Letter Spacing `-2.8px`
9. Mobile: Size `40px`, Letter Spacing `-2px`
10. **Update**

#### H2
```
Desktop: 64px / 700 / 1.3 / -3.2px
Tablet: 48px / -2.4px
Mobile: 40px / -2px
```

#### H3
```
Desktop: 48px / 700 / 1.4 / -0.96px
Tablet: 40px / -0.8px
Mobile: 32px / -0.64px
```

#### H4
```
Desktop: 32px / 700 / 1.5 / -0.64px
Tablet: 28px / -0.56px
Mobile: 24px / -0.48px
```

#### H5
```
Desktop: 24px / 700 / 1.5 / -0.48px
Mobile: 20px / -0.4px
```

#### H6
```
Desktop: 20px / 700 / 1.6 / -0.4px
Mobile: 18px / -0.36px
```

### 4.2. Body Typography

**Ścieżka:** `Site Settings → Theme Style → Typography → Body`

```
Font Family: Montserrat
Weight: 500 (Medium)
Size: 20px (Desktop), 18px (Mobile)
Line Height: 1.6
Letter Spacing: -0.8px
Color: #262525 (Text - Nero)
```

### 4.3. Link Colors

**Ścieżka:** `Site Settings → Theme Style → Typography → Link`

```
Normal State:
  Color: #262525 (Text - Nero)

Hover State:
  Color: #7ED321 (Accent - Thick Green)
```

---

## 5. Tworzenie Button Presets

### 5.1. Primary Button (White)

**Tworzenie Global Widget:**
1. Utwórz nową stronę testową
2. Dodaj **Button Widget**
3. Skonfiguruj według poniższych ustawień
4. Kliknij prawym na widget → **Save as Global**
5. Nazwa: **"Primary Button - White"**

**Ustawienia:**

**Content Tab:**
```
Text: "Get to know more"
Link: #
Size: Custom
```

**Style Tab → Typography:**
```
Font Family: Montserrat
Weight: 700
Size: 24px (Desktop), 18px (Mobile)
Line Height: 1.5
Letter Spacing: -0.48px
```

**Style Tab → Button:**
```
Text Color: #262525 (Text - Nero)
Background Type: Classic
Background Color: #FFFFFF (White)

Border Type: None
Border Radius: 40px
```

**Style Tab → Box Shadow:**
```
Horizontal: -8px
Vertical: 12px
Blur: 31px
Spread: 0px
Color: rgba(0,0,0,0.1)
```

**Advanced Tab → Padding:**
```
Desktop: Top 16px, Right 40px, Bottom 16px, Left 40px
Mobile: Top 12px, Right 32px, Bottom 12px, Left 32px
```

**Style Tab → Hover:**
```
Hover Animation: None (custom)
Background Color: #7ED321 (Accent - Thick Green)
Transition Duration: 0.3s
```

**Advanced Tab → Motion Effects (Hover):**
```
Transform: Translate Y -2px
```

### 5.2. Secondary Button (Outline)

Powtórz proces jak wyżej, ale z tymi ustawieniami:

**Style Tab:**
```
Text Color: #FFFFFF (White)
Background Type: Classic
Background Color: Transparent

Border Type: Solid
Border Width: 2px
Border Color: #FFFFFF (White)
Border Radius: 40px
```

**Hover:**
```
Background Color: #FFFFFF (White)
Text Color: #262525 (Text - Nero)
Border Color: #FFFFFF (White)
```

Zapisz jako: **"Secondary Button - Outline"**

### 5.3. CTA Button Small (Header)

**Style Tab → Typography:**
```
Font Size: 16px
Weight: 700
Text Transform: Uppercase
Letter Spacing: -0.32px
```

**Style Tab → Button:**
```
Text Color: #262525
Background: #FFFFFF
Border Radius: 40px
```

**Box Shadow:**
```
Horizontal: 0px
Vertical: 4px
Blur: 4px
Color: rgba(0,0,0,0.25)
```

**Padding:**
```
Top/Bottom: 16px
Left/Right: 24px
```

Zapisz jako: **"CTA Button Small"**

---

## 6. Konfiguracja Container Settings

**Ścieżka:** `Elementor → Site Settings → Layout → Container`

### 6.1. Default Container Width
```
Content Width: 1728px
Boxed Width: 1728px
```

### 6.2. Content Width dla sekcji
Dla większości sekcji używaj:
```
Width: 1504px (custom)
Padding: 0px 112px (Desktop)
Padding: 0px 40px (Tablet)
Padding: 0px 20px (Mobile)
```

### 6.3. Section Padding Template
Stwórz szablon spacing dla sekcji:

**Desktop:**
```
Padding Top: 80px
Padding Bottom: 80px
```

**Mobile:**
```
Padding Top: 40px
Padding Bottom: 40px
```

---

## 7. Budowa Homepage

### 7.1. Przygotowanie

1. Utwórz nową stronę: `Pages → Add New`
2. Nazwa: **"Homepage"**
3. Kliknij **"Edit with Elementor"**
4. Ustaw Page Settings:
   - Page Layout: **Elementor Canvas** (full width)
   - Hide Title: **Yes**

### 7.2. Struktura sekcji

Homepage składa się z 13 głównych sekcji:

```
1. Header (Template)
2. Hero Section
3. Problem Statement Cards
4. Solutions Section (z tabami)
5. Solutions Detail Cards
6. Logo Carousel
7. Stats Section
8. Testimonials
9. Octopus Section
10. Featured Article
11. Blog Grid
12. Partnership Section
13. Footer (Template)
```

---

## 8. Szczegółowa Konfiguracja Sekcji

### SEKCJA 1: Header

**Typ:** Header Template

**Tworzenie:**
1. `Templates → Theme Builder → Header → Add New`
2. Nazwa: **"Netwise Header"**

**Struktura:**
```
Container (Full Width)
├─ Container (Width: 1504px, Flex Row)
   ├─ Image Widget (Logo)
   │  └─ Width: Auto
   ├─ Nav Menu Widget
   │  └─ Flex: 1 (grow)
   └─ Container (Auto width, Gap 16px)
      ├─ Language Selector
      ├─ Search Icon
      └─ Button Widget (Use Global: "CTA Button Small")
```

**Container Settings:**
```
Layout: Flex
Direction: Row
Justify Content: Space Between
Align Items: Center
Gap: 24px
Padding: 20px 112px
Background: #FFFFFF
Box Shadow: 0px 4px 4px 0px rgba(0,0,0,0.25)
```

**Advanced → Motion Effects:**
```
Sticky: Top
Sticky On: Desktop, Tablet, Mobile
Offset: 0px
```

**Logo Settings:**
```
Width: 149px
Height: Auto
Link URL: / (homepage)
```

**Navigation Menu:**
```
Widget: Nav Menu (Elementor Pro)
Menu: Main Menu
Layout: Horizontal
Pointer: None

Typography:
- Font: Montserrat
- Weight: 700
- Size: 16px
- Transform: Uppercase
- Letter Spacing: -0.32px
- Color: #262525

Padding: 10px (każdy item)
Gap: 24px
```

**Zapisz template jako "Header" i przypisz do całej strony.**

---

### SEKCJA 2: Hero Section

**Container Settings:**
```
Content Width: Full Width
Min Height: 1900px (Desktop), 1200px (Mobile)
Background Type: Classic + Image

Background Image:
- Image: hero-background.jpg
- Position: Center Center
- Attachment: Scroll
- Repeat: No Repeat
- Size: Cover
```

**Background Overlay:**
```
Background Overlay: Yes
Overlay Type: Gradient (opcjonalnie custom z Figma)
Opacity: 30%
Blend Mode: Color Dodge (via custom CSS class)
```

**Content Structure:**
```
Container (Width: 1504px, centered)
├─ Heading Widget (Subtitle)
│  └─ Content: "Business solutions implementation, done right first time."
│  └─ Style:
│      • Font: Montserrat
│      • Weight: 700
│      • Size: 20px
│      • Color: #FFFFFF
│      • Transform: Uppercase
│      • Letter Spacing: -0.4px
│      • Margin Bottom: 40px
│
├─ Heading Widget (Main H1)
│  └─ Content: "We fix <span style='color:#7ED321'>problems</span> slowing your business."
│  └─ Style:
│      • Tag: H1
│      • Font: Montserrat (lub użyj Global: H1)
│      • Weight: 700
│      • Size: 80px (Desktop), 40px (Mobile)
│      • Color: #FFFFFF
│      • Line Height: 1.1
│      • Letter Spacing: -4px
│      • Max Width: 1242px
│      • Margin Top: 0px
│
├─ Text Editor Widget (Subheading)
│  └─ Content: "When your team struggles with outdated tools..."
│  └─ Style:
│      • Font: Montserrat
│      • Weight: 700
│      • Size: 24px
│      • Color: #FFFFFF
│      • Line Height: 1.6
│      • Letter Spacing: -0.96px
│      • Max Width: 814px
│      • Margin Top: 120px
│      • Margin Bottom: 40px
│
└─ Container (Buttons Row)
   ├─ Button Widget → Use Global: "Primary Button - White"
   │  └─ Text: "Get to know more"
   └─ Button Widget → Use Global: "Secondary Button - Outline"
      └─ Text: "Download ebook"
```

**Buttons Container:**
```
Layout: Flex
Direction: Row
Gap: 24px
Wrap: Wrap (mobile)
```

**Padding całej sekcji:**
```
Desktop: Top 178px, Bottom 100px
Mobile: Top 80px, Bottom 60px
```

---

### SEKCJA 3: Problem Statement Cards

**Container Settings:**
```
Content Width: Full Width
Background: #FFFFFF
Padding: 80px 0px (Desktop), 40px 0px (Mobile)
```

**Inner Container:**
```
Width: 1504px
Layout: Grid (Desktop)
Columns: 5 (Desktop), 3 (Tablet), 1 (Mobile)
Column Gap: 32px
Row Gap: 32px
```

**Card 1-5 (Icon Box Widget lub Container):**

Struktura pojedynczej karty:
```
Icon Box Widget
├─ Icon: (wybierz ikonę 40px)
├─ Title: (zostaw puste)
└─ Description:
    "<strong>Too much guessing, not enough selling?</strong> Missing one source of truth about your clients?"
```

**Style karty:**
```
Background: #FFFFFF
Padding: 24px
Border Radius: 8px
Box Shadow: 0px 4px 4px 0px rgba(0,0,0,0.25)

Typography (Description):
- Font: Montserrat
- Size: 20px
- Weight: 500 (bold części przez <strong>)
- Line Height: 1.6
- Letter Spacing: -0.8px
- Color: #262525

Icon:
- Size: 40px
- Color: #1926A0 (Primary)
- Position: Bottom (odwróć Layout na Column + Space Between)
```

**Content kart:**

**Karta 1:**
```
"<strong>Too much guessing, not enough selling?</strong> Missing one source of truth about your clients?"
```

**Karta 2:**
```
"<strong>Want your customers to be happier</strong> and your team to be proud of what they deliver?"
```

**Karta 3:**
```
"<strong>Disconnected data, disconnected customer journeys?</strong> Too many tools, not enough insights?"
```

**Karta 4:**
```
"<strong>Manual tasks take up too much time and energy,</strong> slowing business growth and draining your team's focus?"
```

**Karta 5:**
```
"<strong>No real-time insight into performance or customer needs,</strong> leaving your team reactive and missing opportunities?"
```

---

### SEKCJA 4: Solutions Section (z Tabami)

**Container główny:**
```
Content Width: Full Width
Background: Linear Gradient (kontynuacja z Hero)
Padding: 80px 0px (Desktop), 40px 0px (Mobile)
```

**Inner Container (1504px):**

**Struktura:**
```
Container (Width: 1504px)
├─ Heading Widget (H2)
│  └─ "We deliver <span style='color:#7ED321'>better systems</span>. You get <span style='color:#7ED321'>happier people</span>."
│  └─ Style:
│      • Use Global: H2
│      • Color: #262525
│      • Text Align: Left
│      • Margin Bottom: 40px
│
├─ Text Editor (Description)
│  └─ "We'll take care of your technology so you can focus on your customers..."
│  └─ Style:
│      • Font: Montserrat
│      • Size: 24px
│      • Weight: 500
│      • Color: #262525
│      • Line Height: 1.6
│      • Letter Spacing: -0.96px
│      • Max Width: 1120px
│      • Margin Bottom: 64px
│
└─ JetTabs Widget
   └─ (konfiguracja poniżej)
```

**JetTabs Widget (lub The Plus: Tabs):**

**General Settings:**
```
Tabs Layout: Horizontal
Tabs Position: Top
```

**Tabs (dodaj 3 taby):**
```
Tab 1: "Dynamics 365"
Tab 2: "Power Platform"
Tab 3: "Copilot"
```

**Tab Style:**
```
Tabs Container:
- Background: #DEDEEC
- Border Radius: 100px
- Padding: 8px
- Gap: 16px

Single Tab (Normal):
- Background: Transparent
- Color: #262525
- Padding: 16px 64px (Desktop), 12px 32px (Mobile)
- Border Radius: 100px
- Typography:
  • Font: Montserrat
  • Size: 24px (Desktop), 18px (Mobile)
  • Weight: 700

Single Tab (Active):
- Background: #7ED321
- Color: #262525

Transition: 0.3s
```

**Tab Content (Grid z Product Cards):**

Dla każdego taba dodaj:
```
Container
├─ Layout: Grid
├─ Columns: 6 (Desktop), 3 (Tablet), 2 (Mobile)
├─ Column Gap: 32px
├─ Row Gap: 32px
└─ Cards: 5 produktów + 1 "Next Tab" card
```

**Product Card (pojedyncza):**

Użyj **Icon Box Widget** lub **Container**:
```
Container
├─ Layout: Flex Column
├─ Justify Content: Space Between
├─ Background: #FFFFFF
├─ Padding: 32px
├─ Border Radius: 16px
├─ Min Height: 300px (dostosuj)
│
├─ Icon Widget
│  └─ Size: 40px
│  └─ Color: #1926A0
│  └─ Margin Bottom: Auto
│
├─ Heading Widget (H5)
│  └─ "Dynamics 365 Sales"
│  └─ Font: Montserrat, 20px, Bold
│  └─ Color: #262525
│  └─ Letter Spacing: -0.4px
│  └─ Margin Top: 24px
│
└─ Button/Link Widget
   └─ Text: "MORE"
   └─ Style:
       • Font: 18px, Bold, Uppercase
       • Color: #262525
       • Border Bottom: 2px solid #262525
       • Icon: Arrow Right (24px)
       • Display: Inline Flex
       • Gap: 8px
       • Margin Top: Auto
```

**5 Product Cards dla Tab "Dynamics 365":**
1. Dynamics 365 Sales
2. Dynamics 365 Customer Insights
3. Dynamics 365 Customer Service
4. Dynamics 365 Contact Center
5. Dynamics 365 Field Service

**"Next Tab" Card (6ta karta):**
```
Background: #7ED321 (accent highlight)
Icon: Large illustration (40px lub większy)
Text: "NEXT TAB" (18px, Bold, Uppercase)
Link: Przełącz do następnego taba (JavaScript lub JetTabs settings)
```

Powtórz product cards dla pozostałych 2 tabów (Power Platform, Copilot).

---

## 9. Eksport i Import Szablonów

### 9.1. Eksport Global Settings

Po skonfigurowaniu wszystkich ustawień:

1. **Eksport Global Colors:**
   - Nie ma bezpośredniego exportu, ale są zapisane w bazie danych
   - Możesz użyć pluginu jak "Elementor Custom Skin" do eksportu

2. **Eksport Templates:**
   - `Elementor → Saved Templates`
   - Wybierz template (Header, Footer, etc.)
   - Kliknij **Export**
   - Pobierz JSON file

3. **Eksport całej strony:**
   - Otwórz Homepage w Elementorze
   - Kliknij ikonę `⋮` (menu) → **Export Template**
   - Pobierz JSON

### 9.2. Import na inną stronę

1. **Import Global Settings:**
   - Ręcznie wprowadź kolory i fonty (instrukcje powyżej)

2. **Import Templates:**
   - `Elementor → Saved Templates`
   - Kliknij **Import Templates**
   - Wybierz JSON file
   - Kliknij **Import Now**

3. **Import Homepage:**
   - Utwórz nową stronę
   - Kliknij **Edit with Elementor**
   - Kliknij folder icon → **Import Template**
   - Wybierz JSON file Homepage
   - Kliknij **Insert**

---

## 10. Checklist Konfiguracji

### ✅ Przed rozpoczęciem budowy:
- [ ] Wszystkie wtyczki zainstalowane i aktywowane
- [ ] Google Fonts włączone
- [ ] 6 Global Colors skonfigurowanych
- [ ] 4 Global Fonts skonfigurowanych
- [ ] Theme Style (H1-H6, Body, Links) skonfigurowane
- [ ] 3 Button Presety zapisane jako Global Widgets
- [ ] Container width ustawiony na 1728px
- [ ] Montserrat font zaimportowany z Google Fonts

### ✅ Po zbudowaniu Homepage:
- [ ] Wszystkie sekcje używają Global Colors
- [ ] Wszystkie headingi używają Global Typography
- [ ] Wszystkie buttony używają Global Widgets
- [ ] Responsywność przetestowana (Desktop, Tablet, Mobile)
- [ ] Wszystkie linki działają
- [ ] Hover effects działają
- [ ] Page speed < 3s

---

## 11. Edycja Globalnych Stylów

### Jak edytować kolor globalny:
1. `Elementor → Site Settings → Global Colors`
2. Kliknij na kolor (np. "Primary")
3. Zmień wartość HEX
4. Kliknij **Update**
5. **Wszystkie elementy używające tego koloru zaktualizują się automatycznie**

### Jak edytować globalny font:
1. `Elementor → Site Settings → Global Fonts`
2. Kliknij na font (np. "Primary")
3. Zmień rozmiar, wagę, odstępy
4. Kliknij **Update**
5. **Wszystkie elementy używające tego fontu zaktualizują się automatycznie**

### Jak edytować globalny button:
1. `Elementor → Saved Templates → Saved Widgets`
2. Znajdź button (np. "Primary Button - White")
3. Kliknij **Edit with Elementor**
4. Zmień style
5. Kliknij **Update**
6. **Wszystkie instancje tego buttona zaktualizują się automatycznie**

---

## 12. Najczęstsze Problemy i Rozwiązania

### Problem: Kolory nie pokazują się w dropdownie
**Rozwiązanie:** Upewnij się, że kolory zostały zapisane w `Site Settings → Global Colors`, a nie w `Page Settings`.

### Problem: Fonty nie ładują się
**Rozwiązanie:**
1. Sprawdź czy Google Fonts są włączone: `Elementor → Settings → Advanced → Google Fonts`
2. Wyczyść cache: `Elementor → Tools → Regenerate CSS`

### Problem: Button Global Widget nie aktualizuje się
**Rozwiązanie:**
1. Sprawdź czy button został zapisany jako **Global**, a nie **Local**
2. Prawy klik na button → Sprawdź czy pokazuje opcję "Unlink from Global"

### Problem: Responsive settings nie działają
**Rozwiązanie:**
1. Upewnij się, że klikasz ikonę **responsive** (desktop/tablet/mobile) przed zmianą wartości
2. Zapisz ustawienia dla każdego breakpointa osobno

---

## 13. Wsparcie i Dokumentacja

### Oficjalna dokumentacja:
- **Elementor:** https://elementor.com/help/
- **CrocoBlock:** https://crocoblock.com/knowledge-base/
- **The Plus:** https://theplusaddons.com/docs/
- **Essential Addons:** https://essential-addons.com/elementor/docs/

### Video tutorials:
- Elementor Global Settings: https://www.youtube.com/watch?v=... (wyszukaj "Elementor Global Colors")
- Creating Button Presets: https://www.youtube.com/watch?v=... (wyszukaj "Elementor Global Widgets")

---

**Autor:** Claude Code
**Wersja:** 1.0
**Data:** 3 Listopada 2025
**Projekt:** Netwise Website Homepage
