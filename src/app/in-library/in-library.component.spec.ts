import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { BooksService } from '../books.service';
import { InLibraryComponent } from './in-library.component';

describe('InLibraryComponent', () => {
  let component: InLibraryComponent;
  let bookService: BooksService;
  let fixture: ComponentFixture<InLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ InLibraryComponent ],
      providers: [BooksService]
    }).compileComponents();

    fixture = TestBed.createComponent(InLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create inLibrary', () => {
    expect(component).toBeTruthy();
  });

  it('check book array quantity update',()=> {
    let BooksArray = component.BooksArray;
    BooksArray[0].Title = 'title';
    BooksArray[0].Author = 'author';
    BooksArray[0].Tags = 'tags';
    BooksArray[0].Quantity = 10;
    BooksArray[0].Image = 'image';

    component.updateQuantity('title');
    expect(BooksArray[0].Quantity).toBe(9)
  })



});
