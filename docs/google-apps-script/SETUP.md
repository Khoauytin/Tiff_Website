# Kết nối form tư vấn với Google Sheet

Việc này bạn tự làm trong tài khoản Google của mình — không cần chia sẻ mật khẩu hay quyền truy cập với ai.

## Bước 1 — Tạo Google Sheet

1. Vào [sheets.google.com](https://sheets.google.com), tạo một sheet mới, đặt tên ví dụ "TIFF — Leads tư vấn".
2. Không cần tạo sẵn cột tiêu đề — script sẽ tự tạo khi có lead đầu tiên.

## Bước 2 — Dán script

1. Trong sheet vừa tạo, vào menu **Extensions (Tiện ích mở rộng) → Apps Script**.
2. Xóa hết nội dung mặc định trong file `Code.gs`, dán toàn bộ nội dung file [`Code.gs`](./Code.gs) trong thư mục này vào.
3. Nhấn **Save** (biểu tượng đĩa mềm hoặc Ctrl+S).

## Bước 3 — Deploy thành Web App

1. Nhấn nút **Deploy → New deployment**.
2. Ở mục "Select type", chọn **Web app**.
3. Cấu hình:
   - **Execute as**: Me (tài khoản của bạn)
   - **Who has access**: Anyone
4. Nhấn **Deploy**. Google có thể yêu cầu bạn cấp quyền (Authorize access) — chọn tài khoản Google của bạn và cho phép.
5. Sau khi deploy xong, Google hiển thị một **Web app URL** dạng:
   `https://script.google.com/macros/s/AKfycb.../exec`
   Copy URL này.

## Bước 4 — Gắn URL vào website

1. Trong thư mục dự án, mở file `.env.local` (tạo mới nếu chưa có, copy từ `.env.example`).
2. Dán URL vừa copy vào:
   ```
   NEXT_PUBLIC_CONSULTATION_ENDPOINT=https://script.google.com/macros/s/AKfycb.../exec
   ```
3. Trên Vercel (khi đã kết nối repo), vào **Project Settings → Environment Variables** và thêm biến `NEXT_PUBLIC_CONSULTATION_ENDPOINT` với giá trị URL tương tự, rồi redeploy.

## Kiểm tra

Mở form tư vấn trên website, điền thử và gửi. Một dòng mới sẽ xuất hiện trong Google Sheet, với cột đầu tiên là `Timestamp`, cột thứ hai là `Source` (trang nào gửi form), các cột tiếp theo là dữ liệu từng trường trong form.

## Lưu ý khi cần cập nhật script

Mỗi khi sửa `Code.gs`, bạn cần **Deploy → Manage deployments → chọn deployment hiện tại → Edit (icon bút chì) → New version → Deploy** để bản cập nhật có hiệu lực. Chỉ lưu (Save) trong trình soạn thảo là chưa đủ.
