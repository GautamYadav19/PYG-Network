import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cartInfo: any[] = [];
  totalPay: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getExistingCartInfo();
  }

  getExistingCartInfo() {
    this.cartInfo = this.productService.cartInfo.map((res: any) => {
      return {
        ...res,
        count: res.count ? res.count : 1,
      };
    });
    this.calculateTotalPayAmount();
  }

  removeTOCart(product: any) {
    let indexOfcart = this.cartInfo.findIndex(
      (res: any) => res?.id == product?.id
    );
    this.cartInfo.splice(indexOfcart, 1);
    this.productService.cartInfo = this.cartInfo;
    this.productService.cartInfoLength.next(this.cartInfo.length);
    this.calculateTotalPayAmount();
  }

  calculateTotalPayAmount() {
    this.totalPay = 0;
    this.cartInfo.reduce((pre, cur) => {
      this.totalPay = this.totalPay + cur.price * cur.count;
    }, 0);
  }
  decreaseProduct(cart: any) {
    if (cart.count == 1) this.removeTOCart(cart);

    if (cart.count) cart.count--;
    this.calculateTotalPayAmount();
  }
  increaseProduct(cart: any) {
    cart.count++;
    this.calculateTotalPayAmount();
  }
}
