import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  searchUrl: string = "https://www.googleapis.com/books/v1/volumes?q="

  searchValue: string[] = [];

  allBooksSubject = new Subject();
  BookDetailsSubject = new Subject();

  booksDetails: {
    title: string,
    subtitle: string,
    averageRating: number,
    publisher: string,
    language: string,
    pageCount: string,
    ratingsCount: number,
    imgUrl: string,
    previewLink: string
  }[] = []

  allBooks: { items: { selfLink: string }[] } | undefined;

  constructor(private http: HttpClient, private toast: NgToastService) { }


  // calling from out-of-library COMPONENT
  /* istanbul ignore next */
  getBooks = (val: string) => {
    let url = "https://www.googleapis.com/books/v1/volumes?q="+val
    console.log(url);
    this.http.get(url)
      .subscribe(response => {
        this.allBooks = response as { items: { selfLink: string }[] }
        this.allBooksSubject.next(this.allBooks);
      })
  }
  // get the details of every book with selfLink in item array from api
  //called  from sendRequest() in out-of-library conponent
  /* istanbul ignore next */
  getBookDetails = (items: { selfLink: string }) => {
    this.http.get(items.selfLink).subscribe(Response => {
      const bookResponse = Response as {
        volumeInfo: {
          title: string,
          subtitle: string,
          averageRating: number,
          publisher: string,
          language: string,
          pageCount: number,
          ratingsCount: number,
          imageLinks: {
            small: string
          },
          previewLink: string
        }
      }
      this.BookDetailsSubject.next(bookResponse);
    })
  }

  // ------------------------------ in Library---------------------------------------------
  /* istanbul ignore next */
  // used from in-library component
  BooksArray: {
    Title: string,
    Author: string,
    Tags: string,
    Quantity: number,
    Image: string;
  }[] = [
      { Title: "Rich Dad, Poor Dad", Author: "Robert T. Kiyosaki", Tags: "Economy", Quantity: 10, Image: "/assets/richpoor.jpeg" },
      { Title: "Code with JavaScript", Author: "	Darren Jones", Tags: "Education", Quantity: 123, Image: "/assets/jsLearning.jpeg" },
      { Title: "Getting Started with Angular", Author: "Minko Gechev", Tags: "Education", Quantity: 103, Image: "/assets/angular.jpeg" },
      { Title: "Three Little Pigs", Author: "Tiger Tales", Tags: "Kids", Quantity: 123, Image: "/assets/pigs.jpeg" },
      { Title: "Fantastic Four", Author: "Marvel Worldwide", Tags: "Science Fiction", Quantity: 123, Image: "/assets/fantastic4.jpeg" },
    ]

  urlLink: string = ""

  // called from addBook component to push new object into booksArray 
  /* istanbul ignore next */
  addNewBook = (form: NgForm, file: string) => {
    this.BooksArray.push(form.value)
    for (let i = 0; i < this.BooksArray.length; i++) {
      if (this.BooksArray[i].Title === form.value.Title) {
        this.BooksArray[i].Image = file
      }
    }
  }

  // called from in-library component to get the updated booksArray 
  
  getBookArray = () => {
    return this.BooksArray
  }

  // popUps 
  openSuccess() {
    this.toast.success({ detail: 'Book reserved', summary: 'success summary', duration: 3000 })
  }
  newBookAdded() {
    this.toast.success({ detail: 'NEW BOOK IN LIBRARY', summary: 'success summary', duration: 3000 })
  }
  openWarning(val: String) {
    this.toast.warning({ detail: 'book of ' + val + ': 1 left', summary: 'warning summary', duration: 3000 })
  }
  NoQuantityInfo(val: String) {
    this.toast.info({ detail: 'No books left of :' + val, summary: 'info summary', duration: 3000 })
  }
  cannotAddAdmin() {
    this.toast.info({ detail: 'can`t add more ADMINS', summary: 'info summary', duration: 3000 })
  }
  addedAdmin() {
    this.toast.success({ detail: 'Admin been added', summary: 'success summary', duration: 2000 })
  }
  // ------------------------------- Settings --------------------------------



  themeModeTemp : boolean = true


    changeToMode = (val:boolean) => {
      if (this.themeModeTemp != true)
        this.themeModeTemp = true
      else
        this.themeModeTemp = false
      return this.themeModeTemp
    }


    returnTheme() {
      return this.themeModeTemp
    }

  

}