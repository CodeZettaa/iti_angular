import { AfterContentInit, AfterViewInit, Component, ElementRef, input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'bl7-btn',
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit {

  value = input<string>();
  @ViewChild('title') myTitle!: ElementRef


  constructor() {
    console.log("hello from constracutor");

  }
  ngOnInit(): void {
    console.log(this.value(), "hello from BTN");

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.value(), "hello from changes");

  }
  ngAfterViewInit(): void {
    console.log("My title", this.myTitle);

  }
  ngAfterContentInit(): void {
    console.log("My title ngAfterContentInit", this.myTitle);
  }
}
