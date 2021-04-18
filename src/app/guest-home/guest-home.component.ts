import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  faSearch,
  faPowerOff,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Book } from '../model/book.model';
import { AuthorService } from '../service/author.service';

@Component({
  selector: 'app-guest-home',
  templateUrl: './guest-home.component.html',
  styleUrls: ['./guest-home.component.css'],
})
export class GuestHomeComponent implements OnInit {
  plusIcon = faPlus;
  logoutIcon = faPowerOff;
  searchIcon = faSearch;
  books: Book[];

  author: string = '';
  bookName: string = '';

  imgData = 'assets/ownImage/profileImage.jfif';

  constructor(private authorService: AuthorService, private router: Router) {}

  ngOnInit(): void {
    this.books = this.authorService.getAllBooks();
  }

  filterBooks() {
    this.books = this.authorService.filterBooks({
      author: this.author,
      bookName: this.bookName,
    });
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
