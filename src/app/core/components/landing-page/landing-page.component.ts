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
 productList: any = [
    {
      id: 1,
      badge: 'New',
      image:
        'https://via.placeholder.com/300x300/3d5afe/ffffff?text=ASUS+RT-AX86U',
      alt: 'ASUS Gaming Router',
      title: 'ASUS RT-AX86U',
      category: 'Gaming Router',
      description:
        'Dual-band WiFi 6 gaming router with mobile game mode, VPN support, and AiMesh compatibility',
      price: 279.99,
      currency: '$',
    },
    {
      id: 2,
      image:
        'https://via.placeholder.com/300x300/4caf50/ffffff?text=TP-Link+Archer+C7',
      alt: 'TP-Link Wireless Router',
      title: 'TP-Link Archer C7',
      category: 'Wireless Router',
      description:
        'AC1750 dual-band router with 3 external antennas and parental controls',
      price: 79.99,
      currency: '$',
    },
    {
      id: 3,
      badge: 'Sale',
      image:
        'https://via.placeholder.com/300x300/ff9800/ffffff?text=Netgear+Orbi+RBK50',
      alt: 'Netgear Mesh System',
      title: 'Netgear Orbi RBK50',
      category: 'Mesh WiFi System',
      description:
        'Tri-band whole home mesh WiFi system with 3Gbps speed and 5,000 sq ft coverage',
      price: 299.99,
      currency: '$',
    },
    {
      id: 4,
      image:
        'https://via.placeholder.com/300x300/9c27b0/ffffff?text=Cisco+Catalyst+2960',
      alt: 'Cisco Network Switch',
      title: 'Cisco Catalyst 2960',
      category: 'Managed Switch',
      description:
        '24-port Gigabit Ethernet switch with Layer 2 features and enterprise security',
      price: 499.95,
      currency: '$',
    },
    {
      id: 5,
      badge: 'Hot',
      image:
        'https://via.placeholder.com/300x300/e91e63/ffffff?text=Ubiquiti+Fiber+Transceiver',
      alt: 'Fiber Optic Transceiver',
      title: 'Ubiquiti UF-MM-1G',
      category: 'Fiber Optics',
      description:
        '1Gbps multi-mode SFP fiber optic transceiver module for enterprise networks',
      price: 35.5,
      currency: '$',
    },
    {
      id: 6,
      image:
        'https://via.placeholder.com/300x300/607d8b/ffffff?text=Synology+DS920+',
      alt: 'Network Attached Storage',
      title: 'Synology DS920+',
      category: 'NAS Server',
      description:
        '4-bay network attached storage with quad-core CPU and 8GB DDR4 RAM',
      price: 549.99,
      currency: '$',
    },
    {
      id: 7,
      badge: 'New',
      image:
        'https://via.placeholder.com/300x300/2196f3/ffffff?text=Aruba+AP-515',
      alt: 'Wireless Access Point',
      title: 'Aruba AP-515',
      category: 'WiFi 6 Access Point',
      description:
        '802.11ax indoor wireless access point with 2.5GbE port and IoT ready',
      price: 695.0,
      currency: '$',
    },
    {
      id: 8,
      image:
        'https://via.placeholder.com/300x300/795548/ffffff?text=Monoprice+Cat6+Cable',
      alt: 'Ethernet Cable',
      title: 'Cat6 Ethernet Cable',
      category: 'Network Cable',
      description:
        '50ft shielded twisted pair (STP) Cat6 cable with gold-plated connectors',
      price: 12.99,
      currency: '$',
    },
    {
      id: 9,
      badge: 'Sale',
      image:
        'https://via.placeholder.com/300x300/ff5722/ffffff?text=Sophos+XG+Firewall',
      alt: 'Network Firewall',
      title: 'Sophos XG 106',
      category: 'Network Security',
      description:
        'Next-gen firewall with SD-WAN, TLS inspection and threat protection',
      price: 899.0,
      currency: '$',
    },
    {
      id: 10,
      image:
        'https://via.placeholder.com/300x300/8bc34a/ffffff?text=TP-Link+Powerline',
      alt: 'Powerline Adapter Kit',
      title: 'TP-Link AV2000',
      category: 'Powerline Network',
      description:
        '2000Mbps powerline ethernet adapter kit with integrated power socket',
      price: 89.95,
      currency: '$',
    },
    {
      id: 11,
      badge: 'New',
      image:
        'https://via.placeholder.com/300x300/00bcd4/ffffff?text=NETGEAR+CM1000',
      alt: 'Cable Modem',
      title: 'NETGEAR CM1000',
      category: 'DOCSIS 3.1 Modem',
      description:
        'Gigabit speed cable modem compatible with Xfinity, Spectrum & Cox',
      price: 169.99,
      currency: '$',
    },
    {
      id: 12,
      image:
        'https://via.placeholder.com/300x300/673ab7/ffffff?text=Ubiquiti+EdgeRouter+X',
      alt: 'Ubiquiti Router',
      title: 'Ubiquiti EdgeRouter X',
      category: 'Advanced Router',
      description:
        '5-port gigabit router with advanced security and routing features',
      price: 59.0,
      currency: '$',
    },
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
