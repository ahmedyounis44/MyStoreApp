import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/Product';
import { CartService } from 'src/app/Service/cart.service';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem!: Product;
  cartProducts: Product[]=[];
  productCount: string[] = ['1', '2', '3', '4', '5','6','7','8','9','10'];
  selectedItem = '1';
  selectedItemf = 1;
  constructor(private CartService: CartService) { }

  ngOnInit(): void {}

  selectedChange(event: any) {
    this.selectedItem = event.target.value;
  }

  addProductToCart(product: Product): void {
    debugger;
    this.cartProducts = this.CartService.getCartProduct();
    let productInCart = this.cartProducts.find((ele) => ele.id === product.id);
    if (productInCart && productInCart.id>0) {
      productInCart.amount=Number(productInCart.amount) +Number(this.selectedItem);
      this.cartProducts=this.cartProducts.filter(function(el) { return el.id != product.id });
      this.cartProducts.push(productInCart);
      this.CartService.addToCart(this.cartProducts);
      const message = `this item ${product.name} updated in cart`;
      alert(message);
    } else {
      this.cartProducts.push(Object.assign(product, { amount: this.selectedItem }));
      this.CartService.addToCart(this.cartProducts);
      const message = `this item  ${product.name}  added to cart`;
      alert(message);
    }

    //window.location.reload();

  }



}
