import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Meal } from './meal';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  _httpClient = inject(HttpClient)
  constructor() { }

  getFood(): Observable<Meal[]> { // component


    return this._httpClient.get<{ count: number, recipes: Meal[] }>(`https://forkify-api.herokuapp.com/api/search?q=pizza`)
      .pipe(map(res => {
        res.recipes = res.recipes.map(ele => ({
          image_url: ele.image_url,
          title: ele.title,
          social_rank: ele.social_rank
        }))
        console.log(res, "res");
        return res.recipes


        // return {

        //   recipes: res.recipes
        // }
      }))
  }
}
