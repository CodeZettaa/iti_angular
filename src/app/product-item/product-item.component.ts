import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { Product } from '../product';
import { BtnComponent } from "../btn/btn.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bl7-product-item',
  imports: [BtnComponent, RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  // @Input() bl7!: string
  readonly bl7 = input<Product>()

  @Output() childMessage: EventEmitter<string> = new EventEmitter()


  sayhi() {
    console.log("helli");
    this.childMessage.emit("bteee5")


  }
}
