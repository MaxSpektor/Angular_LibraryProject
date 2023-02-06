import { outputAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  theme: boolean = true

  constructor(private bookService: BooksService) {
    this.theme = this.bookService.themeModeTemp
  }

  changeToMode = () => {
    this.theme = this.bookService.changeToMode(this.theme)
  }


  changeNight() {
    return this.theme === false ? '1' : '0.5'
  }
  changeLight() {
    return this.theme === true ? '1' : '0.5'
  }

  admins: String[] = []

  addAdmin = (val: String) => {
    if (this.admins.length < 2) {
      this.admins.push(val)
      this.bookService.addedAdmin()
    }
    else {
      console.log("can`t have more than 2 admins");
      this.bookService.cannotAddAdmin()
    }
    console.log(this.admins);
  }

  ngOnInit(): void {

  }

}

