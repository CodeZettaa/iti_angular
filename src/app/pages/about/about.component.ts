import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductListComponent } from "../../product-list/product-list.component";
import { Product } from '../../product';
import { ProductsService } from '../../products.service';
import { HttpClient } from '@angular/common/http';
import { PostsService } from '../../posts.service';
import { Post } from '../../post';

@Component({
  selector: 'bl7-about',
  imports: [ProductListComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, OnDestroy {

  sub: any
  // dependancy injection

  test: Product[] = []
  _postsService = inject(PostsService)

  allPosts!: Post[]
  constructor(private _productsService: ProductsService) {


    this.test = this._productsService.test;
    // console.log("hello from about ", this.test);
  }

  ngOnInit(): void {
    this.getPosts();
    this.changeLang()
  }


  getPosts() {
   this.sub =  this._postsService.getPosts().subscribe({
      next: (res) => {
        console.log(res);
        this.allPosts = res
        console.log(this.allPosts);


      },
      error: (err) => {
        console.log("Erro", err);

      },
      complete: () => {
        console.log("complete");

      }
    })
  }

  changeLang() {

  }

  btee5() {
    console.log(this._productsService);

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}


// Subject
// Subscriber 
// takeUntilDestroy