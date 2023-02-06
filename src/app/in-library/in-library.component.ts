import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgToastService } from 'ng-angular-popup';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-in-library',
  templateUrl: './in-library.component.html',
  styleUrls: ['./in-library.component.css']
})
export class InLibraryComponent implements OnInit {

  BooksArray: {
    Title: String,
    Author: String,
    Tags: String,
    Quantity: number,
    Image: string;
  }[] = []

  theme:boolean = true;

  constructor(private bookService: BooksService) {
    this.BooksArray = this.bookService.getBookArray();
    console.log(this.BooksArray);
    this.theme = this.bookService.returnTheme();
  }

  updateQuantity = (val: String) => {
    for (let i = 0; i < this.BooksArray.length; i++) {
      if (this.BooksArray[i].Title === val && this.BooksArray[i].Quantity > 0) {
        this.BooksArray[i].Quantity -= 1
        this.bookService.openSuccess()
        if (this.BooksArray[i].Quantity === 1 )
          this.bookService.openWarning(this.BooksArray[i].Title)
        if (this.BooksArray[i].Quantity === 0 )
          this.bookService.NoQuantityInfo(this.BooksArray[i].Title)
      }
    }
  }


  ngOnInit(): void {
  }

}
