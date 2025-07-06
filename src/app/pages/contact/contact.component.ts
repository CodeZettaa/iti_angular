import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { FoodService } from '../../food.service';
import { Meal } from '../../meal';
import { NgxSpinner, NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'bl7-contact',
  imports: [NgxSpinnerComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [ProductsService]
})
export class ContactComponent implements OnInit {

  foods!: Meal[]
  showLoading: boolean = true

  _ = inject(ProductsService)
  _foodService = inject(FoodService)
  _ngxSpinnerService = inject(NgxSpinnerService)
  constructor() {
    console.log(this._.test);

  }
  ngOnInit(): void {
    this._ngxSpinnerService.show()
    this.getFood()


    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this._ngxSpinnerService.hide();
    // }, 50000);
  }



  getFood() {
    this._foodService.getFood().subscribe({
      next: (res) => {
        console.log(res);
        this.foods = res;
        this.showLoading = false
        // this._ngxSpinnerService.hide()
      },
      error: (err) => {
        console.log(err);

      },
      complete: () => {
        console.log("Done");

      }
    })
  }
}
