import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Model/Product';
import { CartService } from 'src/app/Service/cart.service';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  cartProducts: Product[]=[];
  productCount: string[] = ['1', '2', '3', '4', '5','6','7','8','9','10'];
  selectedItem = '1';
  product!: Product;
  products!: Product[];
  id!: number;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private CartService:CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
    this.productService
      .getProduct()
      .subscribe(res => {
          this.product = res.filter((item) => item.id === this.id)[0];
      });

  }

  selectedChange(event: any) {
    this.selectedItem = event.target.value;
  }

  addProductToCart(product: Product): void {
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
    this.router.navigate(['/cart']);
  }


}
