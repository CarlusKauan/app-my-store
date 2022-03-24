import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  // método anexa um produto
  addToCart(product: Product) {
    this.items.push(product);
  }
  // método coleta cada item
  getItems(){
    return this.items;
  }
  // método retornar matriz vazia
  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) { }
}
