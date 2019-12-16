import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
  /* specifies that Angular should provide the service in the root injector. */
})
export class CartService {
  items = [];
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
  constructor() { }

}