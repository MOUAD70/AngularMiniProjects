import { ProductService } from './../../services/product-service';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products: Product[] = [];
  errorMsg: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.handleGetAllProducts();
  }

  handleGetAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data) => (this.products = data),
      error: (err) => (this.errorMsg = err),
    });
  }

  handleDeleteProduct(product: Product) {
    this.productService.deleteProduct(product.id).subscribe({
      next: (data) => {
        this.products = this.products.filter((p) => p.id != product.id);
      },
    });
  }
}
