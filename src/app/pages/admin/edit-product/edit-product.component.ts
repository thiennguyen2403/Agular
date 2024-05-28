import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/Product';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule], 
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'] 
})
export class EditProductComponent implements OnInit {
  editForm: FormGroup;
  product: Product | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      images: ['', Validators.required]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe((product) => {
        this.product = product;
        this.editForm.patchValue(product);
      });
    }
  }

  onSubmit() {
    if (this.editForm.valid) {
      const updatedProduct = { ...this.product, ...this.editForm.value };
      this.productService.updateProduct(updatedProduct).subscribe(() => {
        this.router.navigate(['/admin']);
      });
    }
  }
}

