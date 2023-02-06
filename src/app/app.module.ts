import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OutOfLibraryComponent } from './out-of-library/out-of-library.component';
import { AddBookComponent } from './add-book/add-book.component';
import { SettingsComponent } from './settings/settings.component';
import { InLibraryComponent } from './in-library/in-library.component';
import { NavbarComponent } from './navbar/navbar.component';


const routing : Routes = [
  {path: "", component: HomeComponent },
  {path: "OutOfLibrary", component: OutOfLibraryComponent},
  {path: "AddBook", component: AddBookComponent },
  {path: "InLibrary", component: InLibraryComponent },
  {path: "Settings", component: SettingsComponent },
  {path: "Navbar",component:NavbarComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OutOfLibraryComponent,
    AddBookComponent,
    SettingsComponent,
    InLibraryComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routing),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
