import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/Model/Product';
import { CartService } from 'src/app/Service/cart.service';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  CartProduct: Product[] = [];
  totalPrice: number = 0;
  constructor(private CartService: CartService , private router: Router) { }

  ngOnInit(): void {
    debugger;
    this.CartProduct = this.CartService.getCartProduct();
    debugger;
    this.calculateTotalPrice();
  }

  valueChange(id: number, value: any): void{
    debugger;
    let productInCart = this.CartProduct.find((ele) => ele.id === id);
    if  (Number(value)>0){
      if (productInCart && productInCart.id>0) {
        productInCart.amount=Number(value);
        this.CartProduct=this.CartProduct.filter(function(el) { return el.id != id });
        this.CartProduct.push(productInCart);
        this.CartService.addToCart(this.CartProduct);

      }
    }else {
      if (productInCart && productInCart.id>0) {
        this.CartProduct=this.CartProduct.filter(function(el) { return el.id != id });
        this.CartService.addToCart(this.CartProduct);

        const message = `this item ${productInCart.name} Removed from cart`;
        alert(message);

      }
    }

    this.calculateTotalPrice()

  }

  calculateTotalPrice(): void{

    let value=0;
    this.CartProduct.forEach(function (arrayItem) {
      value += (Number(arrayItem.amount) * Number(arrayItem.price));
     });
    this.totalPrice = Number(value.toFixed(2));
  }


  checkoutSuccess(obj: any): void{
    this.CartService.clearCart();
    this.router.navigateByUrl(`Confirmation/${obj?.name}/${obj?.total}`);
  }

}
