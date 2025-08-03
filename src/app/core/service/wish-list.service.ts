import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishListService {

  wishlist: any = [];
  wishListSubject = new BehaviorSubject(this.wishlist);

setWishListInLocal(){
    localStorage.setItem('wishlistItems', JSON.stringify(this.wishlist));

}
  
  constructor() {}
}
