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
  search: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.handleGetAllProducts();
  }

  handleGetAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data) => (this.products = data),
      error: (err) => (this.errorMsg = err?.message ?? 'Error'),
    });
  }

  handleDeleteProduct(product: Product) {
    this.productService.deleteProduct(product.id).subscribe({
      next: () => {
        this.handleSearchProducts();
      },
      error: (err) => (this.errorMsg = err?.message ?? 'Error'),
    });
  }

  handleSetPromotion(product: Product) {
    this.productService.setPromotion(product.id).subscribe({
      next: () => {
        product.promotion = !product.promotion;
      },
      error: (err) => (this.errorMsg = err?.message ?? 'Error'),
    });
  }

  handleSearchProducts() {
    this.productService.searchProducts(this.search).subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => (this.errorMsg = err?.message ?? 'Error'),
    });
  }
}
