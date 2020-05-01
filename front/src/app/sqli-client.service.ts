import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class SqliClientService {

  constructor() { }

  getProducts() {
    return Product.Mock();
  }
}
