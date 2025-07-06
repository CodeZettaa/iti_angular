import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bl7-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  bl7 = inject(ActivatedRoute)

  constructor() {
    console.log(this.bl7.snapshot.params['id']);

  }
}
