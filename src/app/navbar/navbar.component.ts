import { Component, DoCheck, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {

  constructor(private bookService : BooksService) {
   }
  ngDoCheck(): void {
    this.theme = this.bookService.returnTheme()
  }


  ngOnInit(): void {
  }

  theme:string = 'light'

  li1: string = ''

  changeStatus(val: string) {
    this.li1 = val
  }

  changeclr1() {
    return this.li1 === 'home' ? 'rgba(245,245,245,0.4)' : 'transparent'
  }
  changeclr2() {
    return this.li1 === 'addBook' ? 'rgba(245,245,245,0.4)' : 'transparent'
  }
  changeclr3() {
    return this.li1 === 'InLibrary' ? 'rgba(245,245,245,0.4)' : 'transparent'
  }
  changeclr4() {
    return this.li1 === 'OutOfLibrary' ? 'rgba(245,245,245,0.4)' : 'transparent'
  }
  changeclr5() {
    return this.li1 === 'Settings' ? 'rgba(245,245,245,0.4)' : 'transparent'
  }




}
