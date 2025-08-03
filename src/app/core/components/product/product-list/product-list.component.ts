import { Component } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { WishListService } from '../../../service/wish-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
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
    // this.wishlistService.setWishListInLocal();
  }

 
}
