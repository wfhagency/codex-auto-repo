# Blog Migration - Lewiatan

Folder zawiera pliki CSV z postami Lewiatan przygotowane do importu na staging.

## 📁 Struktura plików

```
blog-migration/
├── README.md                           # Ten plik
├── clean_csv_urls.py                   # Skrypt do czyszczenia URLi
│
├── Lewiatan-Produkcja.csv             # Oryginał z produkcji (stage URLe)
├── Lewiatan-Stage.csv                 # Oryginał ze stage
│
├── Lewiatan-Produkcja-cleaned.csv     # ✅ GOTOWY DO IMPORTU
└── Lewiatan-Stage-cleaned.csv         # ✅ GOTOWY DO IMPORTU
```

## 🎯 Co zostało zrobione?

### 1. **Podmiana URLi**
Wszystkie URLe ze stage zostały zamienione na produkcyjne:

- **Stare (stage):** `netwiseglobal71867.e.wpstage.net`
- **Nowe (produkcja):** `netwiseglobal.com`

### 2. **Obsługa Elementora**
Skrypt obsługuje dane Elementora w formacie JSON wewnątrz CSV, w tym:
- URLe do obrazków w tle (`background_image`)
- URLe mobilne (`background_image_mobile`)
- Featured images
- Wszystkie inne zasoby multimedialne

### 3. **Zachowanie struktury**
- Wszystkie metadane WordPress zachowane
- Pełna zawartość Elementora nieruszona (tylko URLe podmienione)
- Struktura CSV gotowa do importu przez "WP All Import"

## 📊 Statystyki

- **Przetworzonych postów:** 2 (po 1 w każdym pliku)
- **Podmienione URLe:** 5 w pliku Produkcja, 0 w pliku Stage
- **Formaty URLi:** Regular HTTP/HTTPS, JSON-escaped (\\/), URL-encoded

## 🚀 Jak importować?

### Opcja 1: WP All Import (Zalecana)
1. Zaloguj się na staging: `wfhagency.com/netwise/wp-admin`
2. Przejdź do: **All Import > New Import**
3. Wybierz plik: `Lewiatan-Produkcja-cleaned.csv`
4. Mapuj kolumny zgodnie z dokumentacją WP All Import
5. Upewnij się, że:
   - Pole `_elementor_data` mapuje się na meta `_elementor_data`
   - `_elementor_edit_mode` = `builder`
   - Wszystkie obrazki są poprawnie mapowane

### Opcja 2: WP Export All (Import)
1. Zainstaluj plugin WP Export All
2. Wybierz **Import**
3. Wgraj plik `Lewiatan-Produkcja-cleaned.csv`
4. Plugin automatycznie rozpozna kolumny

## 🔧 Ponowne uruchomienie skryptu

Jeśli potrzebujesz przetworzyć nowe pliki CSV:

```bash
cd blog-migration
python3 clean_csv_urls.py
```

Skrypt automatycznie:
- Znajdzie pliki `Lewiatan-*.csv` w głównym katalogu
- Zamieni wszystkie URLe stage na produkcyjne
- Zapisze oczyszczone pliki z sufiksem `-cleaned.csv`

### Dostosowanie URLi

Edytuj zmienne w pliku `clean_csv_urls.py`:

```python
OLD_DOMAIN = 'netwiseglobal71867.e.wpstage.net'
NEW_DOMAIN = 'netwiseglobal.com'
```

## 📝 Uwagi

### Aktualna liczba postów
W chwili obecnej pliki zawierają tylko **po 1 poście testowym**.

User wspomniał o **200 postach (100 PL + 100 EN)** - jeśli pojawią się większe eksporty, skrypt automatycznie je przetworzy.

### Slugi URL
Posty mają slugi zgodne z produkcją dzięki poprawionemu `.htaccess`:
- Przykład: `https://wfhagency.com/netwise/implementation-of-an-application-for-3200-lewiatan-holding-s-a-stores-in-9-days/`

### Obrazki Elementora
Wszystkie URLe do obrazków w:
- Background images
- Featured images
- Mobile images
- Inline images w treści

...zostały automatycznie zaktualizowane na produkcyjne URLe.

## ⚠️ Potencjalne problemy

### 1. Obrazki mogą nie działać od razu
Jeśli obrazki na `netwiseglobal.com/wp-content/uploads/...` jeszcze nie istnieją, będziesz musiał:
- Skopiować folder `wp-content/uploads/` z produkcji na staging
- LUB: Użyć Find & Replace plugin żeby wskazać na istniejącą lokalizację obrazków

### 2. ID obrazków
Jeśli Image ID w CSV nie pasuje do Media Library na staging, Elementor może nie wyświetlać obrazków. Rozwiązanie:
- Import obrazków PRZED importem postów
- Użycie pluginu do regeneracji attachments

## 🔗 Przydatne linki

- **Produkcja:** https://netwiseglobal.com
- **Staging Netwise:** https://wfhagency.com/netwise/
- **Przykładowy post:** https://wfhagency.com/netwise/implementation-of-an-application-for-3200-lewiatan-holding-s-a-stores-in-9-days/

## 📞 Support

W razie problemów skontaktuj się z zespołem dev lub sprawdź logi importu w WP All Import.

---

**Ostatnia aktualizacja:** 2025-11-03
**Wersja skryptu:** 1.0
