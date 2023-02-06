import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksService } from '../books.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ HttpClientModule],
      declarations: [ NavbarComponent ],
      providers:[ BooksService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check Status changes of navbar',()=> {
    expect(component.li1).toBe('');
    expect(component.changeclr1()).toBe('transparent')
    component.changeStatus('home');
    expect(component.changeclr1()).toBe('rgba(245,245,245,0.4)')
    component.changeStatus('addBook');
    expect(component.changeclr2()).toBe('rgba(245,245,245,0.4)')
    component.changeStatus('InLibrary');
    expect(component.changeclr3()).toBe('rgba(245,245,245,0.4)')
    component.changeStatus('OutOfLibrary');
    expect(component.changeclr4()).toBe('rgba(245,245,245,0.4)')
    component.changeStatus('Settings');
    expect(component.changeclr5()).toBe('rgba(245,245,245,0.4)')
  })

});
