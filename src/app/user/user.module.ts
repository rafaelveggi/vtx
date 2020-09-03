import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserDetailComponent } from './user-detail/user-detail.component'
import { MatCardModule } from '@angular/material/card'
import { UserRoutingModule } from './user-routing.module'

@NgModule({
  declarations: [UserDetailComponent],
  imports: [
    UserRoutingModule,
    CommonModule,
    MatCardModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
