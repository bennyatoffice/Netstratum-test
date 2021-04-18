import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorProfileCardComponent } from './author-profile-card.component';

describe('AuthorProfileCardComponent', () => {
  let component: AuthorProfileCardComponent;
  let fixture: ComponentFixture<AuthorProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorProfileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
