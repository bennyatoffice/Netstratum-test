import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faSearch, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Author } from '../model/author.model';
import { AuthorService } from '../service/author.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  logoutIcon = faPowerOff;
  searchIcon = faSearch;

  authorData: Author[];

  constructor(private authorService: AuthorService, private router: Router) {}

  ngOnInit(): void {
    this.authorData = this.authorService.getAuthor();
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
