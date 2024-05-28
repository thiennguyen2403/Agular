import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ProductService } from '../../product.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  products: Product[] | undefined;
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
  addToCart(product: Product) {
   alert('Thêm thành công')
  }
}
