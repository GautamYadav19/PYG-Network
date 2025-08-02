import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartInfo: any[]=[]
  cartInfoLength =new Subject()

  constructor() {}
}
