import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthorProfileDetailComponent } from './author-profile-detail/author-profile-detail.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'adminHome',
    component: AdminHomeComponent,
  },
  {
    path: 'authorPage/:id',
    component: AuthorProfileDetailComponent,
  },
  {
    path: 'guest',
    component: GuestHomeComponent,
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
