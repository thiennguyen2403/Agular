# Lesson 1: PREPARE THE WORKING ENVIRONMENT

## NODEJS

Nếu chưa cài NọdeJS thì cần tải về và cài đặt tại: https://nodejs.org/en/download/

Sau khi cài đặt xong, mở Terminal và kiểm tra phiên bản NodeJS và NPM bằng lệnh:

```bash
node -v
npm -v
```

## ANGULAR CLI

Cài đặt Angular CLI bằng lệnh:

`npm install -g @angular/cli@latest`

Sau khi cài đặt thành công các bạn có thể verify bằng lệnh:
`ng version`

Ở thời điểm hiện tại Angular CLI đang là version 17.
Lưu ý:

- Một số bạn sử dụng Windows có thể phải cài đặt thêm Python hoặc windows-build-tools để có thể sử dụng SCSS ở trong project sắp tới.
- Nếu các bạn không thể chạy `ng version` vì nó báo `'ng' is not recognized as an internal or external command.` thì các bạn cần phải thêm npm global vào PATH.
- Một số bạn sử dụng PowerShell có thể bị báo lỗi

`File C:\Users\< username >\AppData\Roaming\npm\ng.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.`

Thì các bạn cần phải `enable policy` để chạy được command. Để enable các bạn mở `Powershell as Administrator` và chạy lệnh này `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine` hoặc mở link ở thông báo lỗi để tìm hiểu thêm.

## KHỞI TẠO DỰ ÁN

```
ng new <tên-project>
```

Ví dụ: `ng new angular-demo`

Lúc này các bạn sẽ cần trả lời 1 số câu hỏi về routing, style như sau:

- Would you like to add Angular routing?
- Which stylesheet format would you like to use?
  Cơ bản thì các bạn có thể để default cũng được, hoặc chọn tùy thích như (Y cho routing, SCSS cho style) như mình đang dùng cho các project thực tế thì hầu hết sẽ chọn như trên.
  Sau khi khởi tạo xong, chúng ta có thể mở dự án ở Editor quen thuộc (ví dụ: VS Code) để xem project đã được generate ra.
  Để khởi chạy dự án, chúng ta chạy lệnh sau ở trong directory của dự án.

- `ng serve`
  Mặc định dự án sẽ chạy ở port 4200, nếu bạn muốn đổi port thì chỉ cần thêm tham số

- `ng serve --port=other-port`
  Ví dụ: `ng serve --port=9000`

- Nếu muốn chạy và mở luôn trình duyệt mặc định thì có thể thêm tham số `--open`

  Sau khi serve thành công các bạn có thể mở trình duyệt và navigate vào địa chỉ URL: http://localhost:4200/ ở đây các bạn sẽ thấy được thành quả của mình.
  Như vậy, chúng ta đã hoàn thành ngày đầu tiên tìm hiểu Angular. Hẹn gặp lại trong các ngày tiếp theo.
