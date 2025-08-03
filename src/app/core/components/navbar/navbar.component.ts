import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { WishListService } from '../../service/wish-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  numberOfCart: number = 0;
  Wishlist: any = [];
  constructor(
    private productService: ProductService,
    private wishlistService: WishListService
  ) {}
  ngOnInit(): void {
    this.productService.cartInfoLength.subscribe((res: any) => {
      this.numberOfCart = res;
    });
    this.wishlistService.wishListSubject.subscribe((res: any) => {
      this.Wishlist = res.length;
    });
  
  }
}
