
# Lokatsiyalarni OCR orqali xaritada ko‘rsatish

Bu web sahifa rasm ichidagi GPS koordinatalarni (latitude, longitude) browserda OCR orqali ajratadi va Leaflet xaritasida tartib raqam bilan ko‘rsatadi. Ishlash uchun:

1. GitHub reponi klon qilib oling yoki ZIP ni yuklab oching.
2. `index.html` faylini iOS Safari, Android brauzer yoki desktopda oching.
3. “Rasm tanlang” tugmasi orqali rasmni yuklang.
4. Sahifa sizga topilgan koordinatalarni xaritada markerlar bilan ko‘rsatadi.
5. Har bir marker bosilganda lat/lon ma’lumotlarini ko‘rish mumkin.

## ☑️ Talablar

- Internet bilan, chunki Leaflet (map tiles) va Tesseract.js CDN orqali yuklanadi.
- iOS Safari browseda Community Scanner raise flag: CORS autorization qiyinchiligi bo‘lmasligi kerak.

## 📌 Qo‘shimcha

Agar rasm matnida sana‑vaqt bo‘lsa (masalan: `2025‑07‑28 08:07:01 38.85… 65.80…`), undagi sana‑vaqtni regex orqali ajratib, marker popup ichida ko‘rsatishni ham qo‘shish mumkin — so‘raysiz, qo‘shaman.
