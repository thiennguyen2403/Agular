# Lesson 3: ANGULAR DATA BINDING

## INTERPOLATION

- Khi chúng ta cần hiển thị một thông tin từ phía class ra ngoài template, chúng ta sẽ sử dụng cú pháp `{{ expression }}`.
  Nó có thể hiểu là hãy tính toán cái expression này, nếu có trả về cái gì thì phun (display) nó ra ngay vị trí chỗ dấu `{{}}` này cho tôi.

```typescript
import { Component } from "@angular/core";
@Component({
  selector: "app-hello",
  template: `
    <h2>Hello there!</h2>
    <h3>Your name: {{ user.name }}</h3>
    <p>Your name: {{ user.age }}</p>
  `,
})
export class HelloComponent {
  user = {
    name: "Hoangnm62",
    age: 30,
  };
}
```

## PROPERTY BINDING

- Khi chúng ta cần binding dữ liệu từ class ra ngoài template, chúng ta sẽ sử dụng cú pháp `[property]="expression"`.

- Ví dụ:

```html
<input type="text" [value]="user.name" />
```

Trong ví dụ ở trên chúng ta đã binding từ TS class ra ngoài template, và khi dữ liệu ở class thay đổi, Angular sẽ tự động làm nhiệm vụ update template để hiển thị tương ứng sự thay đổi đó cho chúng ta.

**Lưu ý**:

- Ngoài property binding cho các phần tử HTML, chúng ta cũng có thể áp dụng property binding cho các component.
- Property binding cũng có thể sử dụng cho các directive như `ngStyle`, `ngClass`, `ngModel`, `ngIf`, `ngFor`... học ở những bài sau.
- Property binding khác interpolation ở chỗ nó không thể hiển thị giá trị của expression ra màn hình, mà nó chỉ làm nhiệm vụ binding giá trị của expression vào một property của một phần tử nào đó.

## EVENT BINDING

- Khi chúng ta cần binding sự kiện từ template vào class, chúng ta sẽ sử dụng cú pháp `(event)="statement"`.

```typescript
@Component({
  selector: "app-hello",
  template: `
    <h2>Hello there!</h2>
    <button (click)="showInfo()">Click me!</button>
  `,
})
export class HelloComponent {
  showInfo() {
    alert("Hello, tui là thầy giáo Hoàng đây!");
  }
}
```

Chỉ là lúc này chúng ta sẽ trỏ đến method bên trong Component.
Khá là giống như chúng ta sử dụng inline event listener đó.

```html
<button onclick="showInfo()">Click me!</button>
```

## TWO-WAY BINDING

Trong thực tế two-way binding chính là kết hợp của binding dữ liệu từ class ra template thông qua property binding, và từ template vào class thông qua event binding.
Nó chứa cú pháp ngắn gọn dạng vuông vuông tròn tròn như sau:

```html
<input type="text" [(ngModel)]="user.name" />
```

**Để sử dụng ngModel bạn cần imports FormsModule**, nhưng trong bài này chúng ta chỉ cần hiểu, nó là cách viết tắt của dạng tương ứng là:

```html
<input type="text" [ngModel]="user.name" (ngModelChange)="user.name = $event" />
```

Trong một buổi khác chúng ta sẽ tìm hiểu về Two-way binding và Custom Two-way binding sau.

Link document các bạn cần tìm hiểu trong Lesson 3

- https://angular.io/guide/architecture-components#data-binding
