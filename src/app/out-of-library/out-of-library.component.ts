import { Component } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-out-of-library',
  templateUrl: './out-of-library.component.html',
  styleUrls: ['./out-of-library.component.css']
})
export class OutOfLibraryComponent {

  searchUrl: string = ''

  booksDetails: {
    title: string | undefined,
    subtitle: string | undefined,
    averageRating: number | undefined,
    publisher: string | undefined,
    language: string | undefined,
    pageCount: number | undefined,
    ratingsCount: number | undefined,
    imgUrl: string | undefined,
    previewLink: string | undefined
  }[] = []

  constructor(private booksService: BooksService) {
    this.theme = this.booksService.returnTheme()
  }

  theme: boolean = true


  // using func get request to api in service 
  /* istanbul ignore next */
  getValue(val: string) {
    this.booksDetails = []
    this.booksService.getBooks(val);
    this.booksService.allBooksSubject.subscribe(allBookResponse => {
      const allData = allBookResponse as { items: { selfLink: string }[] };

      allData.items.forEach(element => {
        // sending request getting info from selflink about each book apart // function from service
        this.booksService.getBookDetails(element as { selfLink: string });
      });
    })
    //subscribe the data
    this.booksService.BookDetailsSubject.subscribe(data => {
      const book = (data as {
        volumeInfo: {
          title: string,
          subtitle: string,
          averageRating: number,
          publisher: string,
          language: string,
          pageCount: number,
          ratingsCount: number,
          imageLinks: {
            thumbnail: string
          },
          previewLink: string
        }
      });
      // pushing the data into empty array
      this.booksDetails.push({
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle,
        averageRating: book.volumeInfo.averageRating,
        publisher: book.volumeInfo.publisher,
        language: book.volumeInfo.language,
        pageCount: book.volumeInfo.pageCount,
        ratingsCount: book.volumeInfo.ratingsCount,
        imgUrl: book.volumeInfo.imageLinks.thumbnail,
        previewLink: book.volumeInfo.previewLink
      })
    })
    console.log(this.booksDetails);
  }


}