import { Injectable } from '@angular/core';
import { Product, products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsInCart: Product[] = [];
  
  constructor() { }

  addToCart(product: Product){
    this.itemsInCart.push(product);
  }

  getItems(){
    return this.itemsInCart;
  }

  clearCart(){
    this.itemsInCart = [];
    return this.itemsInCart;
  }
}
