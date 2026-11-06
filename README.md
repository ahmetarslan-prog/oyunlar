# Oyunlar

Tarayıcıda ve telefonda çalışan küçük oyunlar. GitHub Pages ile yayınlanır.

- Menü: https://ahmetarslan-prog.github.io/oyunlar/
- Sudoku: https://ahmetarslan-prog.github.io/oyunlar/sudoku/
- Alacakaranlık (gece ormanında 3D korku/aksiyon): https://ahmetarslan-prog.github.io/oyunlar/alacakaranlik/

## Yeni oyun eklemek
1. `yeni-oyun/` klasörü aç (içinde `index.html`, `manifest.webmanifest`, `sw.js`, `icons/`).
2. Ana `index.html` içindeki `<a class="card">` bloğunu kopyalayıp adını ve bağlantısını değiştir.

## Güncelleme
Bir oyunun dosyalarını değiştirince `sw.js` içindeki `CACHE` sürümünü artır (`sudoku-v1` → `sudoku-v2`), yoksa telefonlar eski sürümü gösterebilir.

## Yerelde deneme
```
python3 -m http.server 8765
```

Yapı ve kurallar için `CLAUDE.md` dosyasına bak.
