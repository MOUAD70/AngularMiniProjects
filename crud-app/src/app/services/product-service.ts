import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    { id: 1, name: 'Computer', price: 6500, promotion: true },
    { id: 2, name: 'Laptop', price: 8500, promotion: false },
    { id: 3, name: 'Keyboard', price: 250, promotion: true },
    { id: 4, name: 'Mouse', price: 150, promotion: false },
    { id: 5, name: 'Monitor', price: 1800, promotion: true },
    { id: 6, name: 'Headphones', price: 600, promotion: false },
    { id: 7, name: 'Printer', price: 2200, promotion: true },
    { id: 8, name: 'Webcam', price: 400, promotion: false },
    { id: 9, name: 'Microphone', price: 700, promotion: true },
    { id: 10, name: 'USB Flash Drive', price: 120, promotion: false },
    { id: 11, name: 'External Hard Drive', price: 1200, promotion: true },
    { id: 12, name: 'SSD', price: 900, promotion: false },
    { id: 13, name: 'Router', price: 500, promotion: true },
    { id: 14, name: 'Modem', price: 450, promotion: false },
    { id: 15, name: 'Graphics Card', price: 4200, promotion: true },
    { id: 16, name: 'Power Supply', price: 750, promotion: false },
    { id: 17, name: 'Motherboard', price: 1600, promotion: true },
    { id: 18, name: 'RAM 16GB', price: 800, promotion: false },
    { id: 19, name: 'Cooling Fan', price: 200, promotion: true },
    { id: 20, name: 'Laptop Stand', price: 300, promotion: false },
  ];

  public getAllProducts(): Observable<Product[]> {
    // 50% Chance to throw an error

    // let rnd = Math.random();
    // if (rnd < 0.5) {
    //   return throwError(() => new Error('Network Connection Error!'));
    // } else {
    //   return of([...this.products]);
    // }

    return of([...this.products]);
  }

  public deleteProduct(id: number): Observable<boolean> {
    this.products = this.products.filter((p) => p.id != id);
    return of(true);
  }

  public setPromotion(id: number): Observable<boolean> {
    let product = this.products.find((p) => p.id === id);
    if (product != undefined) {
      product.promotion != product.promotion;
      product.promotion === false ? (product.price -= 100) : (product.price += 100);
      return of(true);
    } else {
      return throwError(() => new Error('Product not found'));
    }
  }
}
