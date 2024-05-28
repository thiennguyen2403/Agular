# Lesson 2: EXPLORE ANGULAR APP

## KHỞI TẠO THÊM MỘT COMPONENT MỚI

Trong Angular, mỗi component sẽ có một file `.ts`, `.html`, `.scss` và `.spec.ts` tương ứng. Để tạo một component mới, chúng ta sẽ sử dụng Angular CLI.

```bash
ng generate component <tên-component>
```

hoặc viết tắt

```bash
ng g c <tên-component>
```

Tên component nên viết theo kiểu CamelCase, ví dụ: `ng g c UserDetail`.

Sau đó chúng ta sẽ thấy một số file mới được tạo ra trong thư mục `src/app` như sau:

```
src/app/user-detail/
```

## SỬ DỤNG COMPONENT TRONG TEMPLATE

Để sử dụng một component trong template của một component khác, chúng ta sẽ sử dụng cú pháp sau:

```html
<app-user-detail></app-user-detail>
```
