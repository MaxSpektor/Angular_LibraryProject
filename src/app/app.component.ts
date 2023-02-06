import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from './books.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'finalProject';


  constructor(
    private router: Router,
    private bookService: BooksService) {}

    
}