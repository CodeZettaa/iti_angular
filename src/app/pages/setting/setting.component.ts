import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Product } from '../../product';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'bl7-setting',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss',

})
export class SettingComponent {
  test: Product[] = []
  readonly _productsService = inject(ProductsService)

  constructor() {

    this.test = this._productsService.test

    console.log("hello from setting ", this.test);
    this._productsService.test.pop()

  }

  sayHi() {
    console.log(this._productsService);

  }
}
// API ...
// Forms ...