import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutOfLibraryComponent } from './out-of-library.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';
import { BooksService } from '../books.service';


describe('OutOfLibraryComponent', () => {
  let component: OutOfLibraryComponent;
  let fixture: ComponentFixture<OutOfLibraryComponent>;
  // let service: BooksService;
  // let httpClient: HttpClient;
  // let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        OutOfLibraryComponent
      ],
      providers: [
        BooksService,
      ]
    }).compileComponents();
    // httpClient = TestBed.get(HttpClient);
    // httpTestingController = TestBed.get(HttpTestingController)

    fixture = TestBed.createComponent(OutOfLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

})


