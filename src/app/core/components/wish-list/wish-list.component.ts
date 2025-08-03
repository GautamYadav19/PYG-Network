import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { WishListService } from '../../service/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss',
})
export class WishListComponent implements OnInit {
  productList: any = [];

  constructor(
    private productService: ProductService,
    private wishlistService: WishListService
  ) {}
  ngOnInit(): void {
    this.wishlistService.wishListSubject.subscribe((res: any) => {
      this.productList = res;
    });
    let storeData = JSON.parse(localStorage.getItem('wishlistItems')!);
    if (storeData) {
      this.productList = storeData;
      this.wishlistService.wishlist = storeData;
      this.wishlistService.wishListSubject.next(storeData);
    }
  }

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
