import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bookService:BooksService) {
    this.theme = this.bookService.returnTheme()
   }

  theme:string = 'light'
  ngOnInit(): void {
  }

}
