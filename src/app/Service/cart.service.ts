import { Injectable } from '@angular/core';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  myStorage = window.localStorage;
  constructor() { }

  addToCart(product: Product[]): void{
    this.myStorage.setItem('cart', JSON.stringify(product));
  }
  getCartProduct(): Product[] | []{
    const getProduct = this.myStorage.getItem('cart')
    return getProduct? JSON.parse(getProduct): [];
  }
  clearCart(): void{
    this.myStorage.clear();
  }
}
