import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SqliClientService {

  constructor(private http: HttpClient) { }

  getProducts(name: string) {
    return this.http.get('/api/v1/products', {params: {name}});
  }
}
