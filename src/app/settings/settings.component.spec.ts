import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksService } from '../books.service';
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ SettingsComponent ],
      providers:[BooksService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check theme',()=> {
    expect(component.theme).toBe('light');
    component.changeToMode();
    expect(component.theme).toBe('dark')
  })

  it('add Admin Function',()=>{
    component.addAdmin('max');
    expect(component.admins).toContain('max');
  })

  it('should render h4',()=>{
    const fixture = TestBed.createComponent(SettingsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h4')?.textContent).toContain("Add new admin :")
  })
});
