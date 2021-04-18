import { Component, Input, OnInit } from '@angular/core';
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-author-books-card',
  templateUrl: './author-books-card.component.html',
  styleUrls: ['./author-books-card.component.css'],
})
export class AuthorBooksCardComponent implements OnInit {
  searchIcon = faSearch;
  rightArrowIcon = faArrowRight;
  imgData = 'assets/ownImage/profileImage.jfif';

  @Input() book: Book;
  
  constructor() {}

  ngOnInit(): void {}
}
