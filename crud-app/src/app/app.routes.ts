import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Customers } from './components/customers/customers';
import { Login } from './components/login/login';

export const routes: Routes = [
   {
    path: '',
    component: Login,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'products',
    component: Products,
  },
  {
    path: 'customers',
    component: Customers,
  },
];
