import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthorProfileCardComponent } from './author-profile-card/author-profile-card.component';
import { AuthorProfileDetailComponent } from './author-profile-detail/author-profile-detail.component';
import { AuthorBooksCardComponent } from './author-books-card/author-books-card.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminHomeComponent,
    AuthorProfileCardComponent,
    AuthorProfileDetailComponent,
    AuthorBooksCardComponent,
    GuestHomeComponent,
    AddBookComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
