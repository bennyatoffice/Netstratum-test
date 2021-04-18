import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorProfileDetailComponent } from './author-profile-detail.component';

describe('AuthorProfileDetailComponent', () => {
  let component: AuthorProfileDetailComponent;
  let fixture: ComponentFixture<AuthorProfileDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorProfileDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
