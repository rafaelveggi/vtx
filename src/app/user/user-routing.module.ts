import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UserDetailComponent } from './user-detail/user-detail.component'
import { UserResolver } from './user-resolver.service'

const routes: Routes = [
  {
    path: '',
    component: UserDetailComponent,
    resolve: { user: UserResolver },
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserResolver]
})
export class UserRoutingModule { }
