import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './layout/home/home.component'
import { UserDetailComponent } from './user/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // pathMatch: 'full',
    children: [
      {
        path: 'user',
        //loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        component: UserDetailComponent,
      },
      { path: '', redirectTo: 'user', pathMatch: 'full' }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
