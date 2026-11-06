# Oyunlar

Tarayıcıda ve telefonda çalışan küçük oyunlar. Saf HTML/CSS/JS, build yok. GitHub Pages ile yayınlanır:
https://ahmetarslan-prog.github.io/oyunlar/ (repo: ahmetarslan-prog/oyunlar, branch: main)

## Yapı
- `index.html`: ana menü, her oyun için bir `<a class="card">`.
- `<oyun>/`: her oyun kendi klasöründe, bağımsız: `index.html`, `manifest.webmanifest`, `sw.js`, `icons/` (192, 512, maskable-512, apple-touch-icon).
- Oyunlar arası ortak kod yok. Her oyun tek başına çalışır, yollar göreli (`./`) olmalı (Pages alt dizinde yayınlar).

## Yeni oyun ekleme
1. `sudoku/` klasörünü şablon al; yeni klasör aç, `manifest` adını/rengini, `sw.js` içindeki `CACHE` adını (`<oyun>-v1`) değiştir.
2. Ana `index.html`'e kart ekle (ikon: `<oyun>/icons/icon-192.png`).
3. README'deki oyun listesine bağlantı ekle.

## Kurallar
- Bir oyunun dosyası değişince o oyunun `sw.js` içindeki `CACHE` sürümünü artır (`-v1` → `-v2`), yoksa telefonlar eski sürümü gösterir.
- Arayüz Türkçe, dikey ekran (mobil öncelikli), renkli/çocuk dostu stil (menüdeki gradyan temaya uy).
- Yerelde deneme: `python3 -m http.server 8765`
