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
    this.productList = this.wishlistService.getWishlist();
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
  removeFromWishlist(productId: number) {
    this.wishlistService.removeFromWishlist(productId);
  }
}
