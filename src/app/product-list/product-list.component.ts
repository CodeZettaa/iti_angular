import { Component, signal } from '@angular/core';
import { Product } from '../product';
import { ProductItemComponent } from "../product-item/product-item.component";

@Component({
  selector: 'bl7-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  providers: []
})
export class ProductListComponent {

  userName = "ITI"
  userName2 = signal('ITI')
  products = [

    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",

    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",

    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",

    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    }
  ]

  displayMessage(valu: string) {
    console.log(valu);

  }
}
