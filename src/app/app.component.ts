import { afterNextRender, AfterViewInit, Component, DoCheck, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from "./nav-bar/nav-bar.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  userName: string = 'Nour';
  userAge: number = 30;
  userSalary = signal(2000)



  constructor() {



    afterNextRender(() => {
      localStorage.setItem("test", "hello")
    })
  }

  userImage: string = 'images/stch4.png'
  user = { name: 'Abdo', salay: 123 };
  isDarkMode: boolean = false
  color: string = 'red'
  sayHi() {
    this.isDarkMode = !this.isDarkMode
    this.userName = "ITI";
    this.color = "bteeee5"

  }
  ngOnInit(): void {
    this.userSalary.update((curr) => curr + 20)
  }
  ngAfterViewInit(): void {

    // console.log(this.myTitle, "myTitle");

  }
  // ngDoCheck(): void {
  //   console.log("changessssssssssss--------");

  // }
}
