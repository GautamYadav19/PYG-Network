import { Component, input } from '@angular/core';
import { WishListService } from '../../../core/service/wish-list.service';
import { ProductService } from '../../../core/service/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  productList = input.required<any>();
  isWishList = input<boolean>(false);
  constructor(
    private productService: ProductService,
    private wishlistService: WishListService
  ) {}

  addToCart(product: any) {
    const indexOfProd = this.productService.cartInfo.findIndex(
      (res: any) => res.id === product.id
    );

    if (indexOfProd !== -1) {
      this.productService.cartInfo[indexOfProd].count++;
    } else {
      const productToAdd = { ...product, count: 1 }; // Clone & set count
      this.productService.cartInfo.push(productToAdd);
    }

    this.productService.cartInfoLength.next(
      this.productService.cartInfo.length
    );
  }
  addToWishlist(product: any) {
    let list: any[] = this.wishlistService.wishlist;
    let index = list.findIndex((res: any) => res.id == product.id);

    if (index == -1) {
      list.push(product);
      this.wishlistService.wishListSubject.next(list);
      this.wishlistService.wishlist = list;
      localStorage.setItem(
        'wishlistItems',
        JSON.stringify(this.wishlistService.wishlist)
      );
    }
  }
  removeFromWishlist(product: any) {
    let productIndex = this.wishlistService.wishlist.findIndex(
      (res: any) => res.id == product.id
    );
    this.wishlistService.wishlist.splice(productIndex, 1);
    this.wishlistService.wishListSubject.next(this.wishlistService.wishlist);
    localStorage.setItem(
      'wishlistItems',
      JSON.stringify(this.wishlistService.wishlist)
    );
  }
}
