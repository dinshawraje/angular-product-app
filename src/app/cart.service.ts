import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' 
  /* specifies that Angular should provide the service in the root injector. */
})
export class CartService {
  items = [];
  
  constructor(
    private http: HttpClient
  ) { }
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  /** HttpClient#get() method to retrieve the shipping data (types and prices). */
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}