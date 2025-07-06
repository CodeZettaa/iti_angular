import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'bl7-error-message',
  imports: [],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss',
  providers: []
})
export class ErrorMessageComponent implements OnInit, OnDestroy {

  timer: any

  ngOnInit(): void {

    this.timer = setInterval(() => {
      console.log("hello");

    }, 2000)

  }
  ngOnDestroy(): void {
    // cleanUP
    clearInterval(this.timer)
  }
}

// webAPI