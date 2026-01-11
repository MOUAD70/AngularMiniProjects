import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    { id: 1, name: 'Computer', price: 6500 },
    { id: 2, name: 'Laptop', price: 8500 },
    { id: 3, name: 'Keyboard', price: 250 },
    { id: 4, name: 'Mouse', price: 150 },
    { id: 5, name: 'Monitor', price: 1800 },
    { id: 6, name: 'Headphones', price: 600 },
    { id: 7, name: 'Printer', price: 2200 },
    { id: 8, name: 'Webcam', price: 400 },
    { id: 9, name: 'Microphone', price: 700 },
    { id: 10, name: 'USB Flash Drive', price: 120 },
    { id: 11, name: 'External Hard Drive', price: 1200 },
    { id: 12, name: 'SSD', price: 900 },
    { id: 13, name: 'Router', price: 500 },
    { id: 14, name: 'Modem', price: 450 },
    { id: 15, name: 'Graphics Card', price: 4200 },
    { id: 16, name: 'Power Supply', price: 750 },
    { id: 17, name: 'Motherboard', price: 1600 },
    { id: 18, name: 'RAM 16GB', price: 800 },
    { id: 19, name: 'Cooling Fan', price: 200 },
    { id: 20, name: 'Laptop Stand', price: 300 },
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
}
