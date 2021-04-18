import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import {
  faSearch,
  faPowerOff,
  faPlus,
  faLongArrowAltLeft,
} from '@fortawesome/free-solid-svg-icons';

import { AddBookComponent } from '../add-book/add-book.component';
import { Author } from '../model/author.model';
import { Book } from '../model/book.model';
import { AuthorService } from '../service/author.service';

@Component({
  selector: 'app-author-profile-detail',
  templateUrl: './author-profile-detail.component.html',
  styleUrls: ['./author-profile-detail.component.css'],
})
export class AuthorProfileDetailComponent implements OnInit {
  leftArrowIcon = faLongArrowAltLeft;
  plusIcon = faPlus;
  logoutIcon = faPowerOff;
  searchIcon = faSearch;

  imgData = 'assets/ownImage/profileImage.jfif';

  id: string;
  authorDetails: Author;
  books: Book[];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authorService: AuthorService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.authorDetails = this.authorService.getAuthorById(this.id);
    this.books = this.authorService.getBook(this.id);
    console.log(this.books);
  }

  ngOnInit(): void {}

  openAddAuthor(): void {
    const dialogRef = this.dialog
      .open(AddBookComponent, {
        width: '500px',
        data: { id: this.id },
      })
      .afterClosed()
      .subscribe((response) => {
        this.books = this.authorService.getBook(this.id);
        console.log(this.books);
      });
  }

  logout(){
    this.router.navigate(['/login']);
  }

  back() {
    this.router.navigate(['/adminHome']);
  }
}
