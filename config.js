const APP_CONFIG = {
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzbdMQSc584Q_0fLcDyacMztD_EAB9ankH3etdcUjqwrqdMjU9AkWevbqn3n7SVxqSn/exec',
  AUTO_SYNC: true,
};
```

⚠️ **แทน URL ด้วยของจริง** — คือ URL ที่ได้จาก Apps Script ตอน Deploy ในขั้นตอนที่ 3

---

### 4️⃣ Push ไฟล์ขึ้น GitHub

**วิธีที่ง่ายที่สุด (ไม่ต้องใช้ command line):**

1. เปิด repo ที่เพิ่งสร้าง
2. กด **"uploading an existing file"** หรือ **Add file → Upload files**
3. ลากไฟล์ทั้ง 2 ไฟล์ (`index.html` และ `config.js`) ใส่
4. กด **Commit changes**

---

### 5️⃣ เปิด GitHub Pages

1. ใน repo → กด **Settings** (แถบบน)
2. เมนูซ้าย → **Pages**
3. ตรง Source → เลือก **Deploy from a branch**
4. Branch → เลือก **main** → folder: **/ (root)**
5. กด **Save**
6. รอ 1-2 นาที → จะขึ้น URL แบบนี้:
```
https://[ชื่อบัญชี_github].github.io/live-bill/
```

---

### 6️⃣ ส่ง Link ให้พนักงาน

เปิด link นั้นในมือถือได้เลย เหมือนเว็บไซต์ปกติ บันทึก bookmark ไว้ที่ Home Screen ก็ได้ค่ะ 🌸

---

## สรุปภาพรวม
```
คอมพิวเตอร์คุณ          GitHub               มือถือพนักงาน
─────────────────        ────────────          ──────────────
index.html      →  upload  →  repo       →   เปิด link ใช้งาน
config.js               live-bill/            ทุกสาขา ทุกเครื่อง
                         Pages ON
