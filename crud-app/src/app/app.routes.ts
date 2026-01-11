import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Customers } from './components/customers/customers';

export const routes: Routes = [
  {
    path: 'products',
    component: Products,
  },
  {
    path: 'customers',
    component: Customers,
  },
];
