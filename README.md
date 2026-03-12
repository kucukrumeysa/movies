# 🎬 Movie App

TMDB API kullanılarak geliştirilmiş modern bir film arama uygulaması.

## 🚀 Özellikler

- 🔍 **Film Arama** — İstediğin filmi anında ara
- ⭐ **Favorilere Ekleme** — Beğendiğin filmleri favorilerine ekle ve istediğin zaman görüntüle
- 🎥 **Popüler Filmler** — Güncel ve popüler filmleri ana sayfada keşfet

## 🛠️ Kullanılan Teknolojiler

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TMDB API](https://www.themoviedb.org/)

## ⚙️ Kurulum

1. Repoyu klonla:

   ```bash
   git clone https://github.com/kucukrumeysa/movies.git
   cd movies
   ```
2. Bağımlılıkları yükle:

   ```bash
   npm install
   ```
3. TMDB'den ücretsiz API key al:
   👉 https://www.themoviedb.org/settings/api
4. `src/services/api.js` dosyasında API key'ini gir:

   ```javascript
   const API_KEY = "senin_api_keyin"
   ```
5. Uygulamayı başlat:

   ```bash
   npm run dev
   ```

## 📸 Ekran Görüntüsü

![Movie App](./screenshot.png)

## 📄 Lisans

Bu proje MIT lisansı ile lisanslanmıştır.
