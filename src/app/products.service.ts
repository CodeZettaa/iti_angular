import { Inject, Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  test: Product[] = [
    { id: 1, title: "Asd", image: "sd", category: "Asd", price: 123 },
    { id: 2, title: "Title2", image: "sd", category: "Asd", price: 123 },
    { id: 3, title: "Title3", image: "sd", category: "Asd", price: 123 },

  ];


  constructor() {


  }
}
