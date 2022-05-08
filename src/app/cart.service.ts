import { Injectable } from '@angular/core';
import { Product, products } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsInCart: Product[] = [];
  
  constructor(private http: HttpClient) { }

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

  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('assets/shipping.json')
  }
}
