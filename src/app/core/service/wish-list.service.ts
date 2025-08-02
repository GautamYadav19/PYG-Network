import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

 private storageKey = 'wishlistItems';

  constructor() {}

  getWishlist(): any[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  saveWishlist(items: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  addToWishlist(product: any): void {
    const wishlist = this.getWishlist();
    const exists = wishlist.find((item: any) => item.id === product.id);
    if (!exists) {
      wishlist.push(product);
      this.saveWishlist(wishlist);
    }
  }

  removeFromWishlist(productId: number): void {
    const wishlist = this.getWishlist().filter(item => item.id !== productId);
    this.saveWishlist(wishlist);
  }

  isInWishlist(productId: number): boolean {
    return this.getWishlist().some(item => item.id === productId);
  }

  clearWishlist(): void {
    localStorage.removeItem(this.storageKey);
  }
}
