import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/Product';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.scss',
})
export class ProductAddComponent implements OnInit {
  product: Product = {} as Product;
  productForm: FormGroup = {} as FormGroup;

  constructor(private productService: ProductService, private router: Router,private fb:FormBuilder) {
    this.productForm=this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(200),Validators.minLength(5)]],
      price: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }
  ngOnInit(): void {}
  handleSubmit() {
    console.log(this.productForm.value);
  if(this.productForm.valid){
  this.productService.createProduct(this.productForm.value).subscribe((data)=>console.log('Create product',data));
  this.router.navigate(['/admin'])
  }
  }
}