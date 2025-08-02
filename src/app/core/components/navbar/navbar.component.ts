import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  numberOfCart: number = 0;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.cartInfoLength.subscribe((res: any) => {
      this.numberOfCart = res;
    });
  }
}
