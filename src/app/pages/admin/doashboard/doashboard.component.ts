import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/Product';
import { ProductService } from '../../../product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-doashboard',
  standalone: true,
  imports: [CommonModule ,RouterModule],
  templateUrl: './doashboard.component.html',
  styleUrls: ['./doashboard.component.scss'] // Đảm bảo đúng tên styleUrls
})
export class DoashboardComponent implements OnInit {
  products: Product[] | undefined;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products; // Đảm bảo đúng tên biến
    });
  }

  deleteSubmit(productId: number | undefined) {
    if (productId !== undefined) {
      const confirmation = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
      if (confirmation) {
        this.productService.deleteProduct(productId).subscribe(() => {
          this.products = this.products?.filter(product => product.id !== productId);
        });
      }
    } else {
      console.error('Product ID is undefined');
    }
  }
}
