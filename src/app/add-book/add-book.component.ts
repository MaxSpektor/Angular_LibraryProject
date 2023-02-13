import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bookService: BooksService) {
    this.theme = this.bookService.returnTheme();
  }

  theme : string = 'light'

  file: any;

  //get image upload and convert file into a string
    /* istanbul ignore next */
  getFile(event: any) {
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.file = event.target.result
      }
    }
  }

  // on form submit passing data to function in service addNewBook()
    /* istanbul ignore next */
  onSubmit(form: NgForm) {
    console.log(form);
    this.bookService.addNewBook(form, this.file)
    this.bookService.newBookAdded()
  }

  ngOnInit(): void {
  }

}
