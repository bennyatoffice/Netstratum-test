import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorBooksCardComponent } from './author-books-card.component';

describe('AuthorBooksCardComponent', () => {
  let component: AuthorBooksCardComponent;
  let fixture: ComponentFixture<AuthorBooksCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorBooksCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorBooksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
