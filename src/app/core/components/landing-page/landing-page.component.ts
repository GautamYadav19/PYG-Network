import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
cartCount = 3;
  isMobileMenuOpen = false;
  
  categories = [
    {
      icon: 'fa-wifi',
      title: 'Routers & Mesh',
      description: 'High-performance routers for home and enterprise with next-gen WiFi technology',
      count: '42 Products'
    },
    {
      icon: 'fa-broadcast-tower',
      title: 'Fiber Optics',
      description: 'Cutting-edge fiber solutions for lightning-fast internet connectivity',
      count: '28 Products'
    },
    {
      icon: 'fa-video',
      title: 'CCTV Systems',
      description: 'Advanced surveillance with 4K resolution and AI-powered analytics',
      count: '35 Products'
    },
    {
      icon: 'fa-tools',
      title: 'Networking Tools',
      description: 'Professional-grade tools for installation and maintenance',
      count: '19 Products'
    }
  ];

  products = [
    {
      id: 1,
      badge: 'Popular',
      image: 'https://via.placeholder.com/200x150/7EB3FF/FFFFFF?text=AX6000',
      title: 'TP-Link Archer AX6000',
      category: 'WiFi 6 Router',
      price: 249.99,
      oldPrice: 299.99,
      wishlisted: false
    },
    {
      id: 2,
      badge: 'New',
      image: 'https://via.placeholder.com/200x150/A78BFA/FFFFFF?text=Fiber+ONU',
      title: 'Huawei HG8245H',
      category: 'Fiber ONU',
      price: 129.99,
      wishlisted: false
    },
    {
      id: 3,
      badge: '',
      image: 'https://via.placeholder.com/200x150/FF85B3/FFFFFF?text=Mesh+System',
      title: 'Deco X90 Mesh System',
      category: 'Whole Home WiFi',
      price: 399.99,
      oldPrice: 449.99,
      wishlisted: false
    },
    {
      id: 4,
      badge: 'Sale',
      image: 'https://via.placeholder.com/200x150/5E72E4/FFFFFF?text=4K+CCTV',
      title: 'Hikvision 4K Dome Camera',
      category: 'Security Camera',
      price: 179.99,
      oldPrice: 219.99,
      wishlisted: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Cart count animation
    // setInterval(() => {
    //   const bubbles = document.querySelectorAll('.cart-count');
    //   bubbles.forEach(bubble => {
    //     bubble.classList.add('pulse');
    //     setTimeout(() => {
    //       bubble.classList.remove('pulse');
    //     }, 300);
    //   });
    // }, 5000);
  }

  openChat(): void {
    alert('Chat support will open here!');
  }

  setActiveNavItem(event: Event): void {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    (event.currentTarget as HTMLElement).classList.add('active');
  }

  addToCart(product: any): void {
    this.cartCount++;
    alert(`${product.title} added to cart!`);
  }

  toggleWishlist(product: any): void {
    product.wishlisted = !product.wishlisted;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
