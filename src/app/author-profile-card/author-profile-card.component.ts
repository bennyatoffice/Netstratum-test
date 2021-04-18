import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Author } from '../model/author.model';
import { Book } from '../model/book.model';
import { AuthorService } from '../service/author.service';

@Component({
  selector: 'app-author-profile-card',
  templateUrl: './author-profile-card.component.html',
  styleUrls: ['./author-profile-card.component.css'],
})
export class AuthorProfileCardComponent implements OnInit {
  rightArrowIcon = faArrowRight;
  imgData = 'assets/ownImage/profileImage.jfif';

  books: Book[];

  @Input() author: Author;

  constructor(private authorService: AuthorService, private router: Router) {}

  ngOnInit(): void {
    this.books = this.authorService.getBook(this.author.id);
  }

  toAuthorpage(author: Author) {
    this.router.navigate(['authorPage', author.id]);
  }
}
