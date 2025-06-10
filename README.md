# 🍽️ Chia Tiền Ăn - Bill Splitter

Một ứng dụng web hiện đại để chia tiền ăn thông minh, tính toán chính xác chi phí từng món ăn cho từng người.

## ✨ Tính năng

- **Quản lý người tham gia**: Thêm danh sách người ăn chung một cách dễ dàng
- **Tính toán từng món**: Chỉ định người ăn và người trả cho từng món cụ thể
- **Tính toán thông minh**: Tự động tính toán ai nợ ai bao nhiều tiền
- **Thanh toán QR**: Tạo mã QR VietQR để thanh toán nhanh chóng
- **Giao diện đẹp**: Thiết kế hiện đại, responsive trên mọi thiết bị
- **Lưu trữ tự động**: Tự động lưu dữ liệu trên trình duyệt

## 🚀 Demo

Xem demo trực tiếp tại: [https://yourusername.github.io/bill-splitter](https://yourusername.github.io/bill-splitter)

## 📱 Screenshot

![Bill Splitter Screenshot](screenshot.png)

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web semantic
- **CSS3**: Styling hiện đại với CSS Grid, Flexbox, CSS Variables
- **Vanilla JavaScript**: Logic ứng dụng không dependency
- **Google Fonts**: Typography đẹp với font Inter
- **VietQR API**: Tạo mã QR thanh toán

## 🎯 Cách sử dụng

1. **Thêm người tham gia**: Nhập tên từng người vào textarea, mỗi người một dòng
2. **Thêm món ăn**: Click "Thêm món" để thêm món ăn mới
3. **Cấu hình món ăn**:
   - Nhập tên món ăn
   - Nhập giá tiền (VNĐ)
   - Chọn những người ăn món đó
   - Chọn những người trả tiền cho món đó
4. **Xem kết quả**: Ứng dụng sẽ tự động tính toán ai nợ ai bao nhiều
5. **Thanh toán QR** (tùy chọn):
   - Nhập thông tin ngân hàng
   - Click nút QR bên cạnh mỗi kết quả để tạo mã QR thanh toán

## 💻 Cài đặt và chạy

### Chạy trực tiếp
1. Download các file hoặc clone repository
2. Mở file `index.html` trên trình duyệt

### Deploy lên GitHub Pages
1. Fork repository này
2. Vào Settings > Pages
3. Chọn source là "Deploy from a branch"
4. Chọn branch "main" và folder "/ (root)"
5. Website sẽ có địa chỉ: `https://yourusername.github.io/repository-name`

### Chạy với Local Server
```bash
# Sử dụng Python
python -m http.server 8000

# Sử dụng Node.js (npx)
npx serve .

# Sử dụng PHP
php -S localhost:8000
```

Sau đó truy cập `http://localhost:8000`

## 📂 Cấu trúc dự án

```
bill-splitter/
├── index.html          # Trang chính
├── styles.css          # Styling CSS
├── script.js           # Logic JavaScript
├── README.md           # Documentation
└── screenshot.png      # Screenshot demo
```

## 🎨 Tùy biến

### Thay đổi màu sắc
Chỉnh sửa CSS variables trong `styles.css`:

```css
:root {
  --primary-600: #2563eb;  /* Màu chính */
  --success-500: #10b981;  /* Màu thành công */
  --error-500: #ef4444;    /* Màu lỗi */
}
```

### Thêm ngân hàng
Chỉnh sửa mảng `BANKS` trong `script.js`:

```javascript
const BANKS = [
  {"id": 999, "name": "Ngân hàng mới", "code": "NEW", "bin": "970999", "shortName": "NewBank"},
  // ... các ngân hàng khác
];
```

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy:

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## 📝 License

Dự án này được phát hành dưới [MIT License](LICENSE).

## 👨‍💻 Tác giả

**quanganhdeptrai**

## 🙏 Cảm ơn

- [VietQR](https://vietqr.io/) - API tạo mã QR thanh toán
- [Google Fonts](https://fonts.google.com/) - Font chữ đẹp
- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - Layout responsive

---

Nếu thấy hữu ích, hãy cho một ⭐ nhé!
