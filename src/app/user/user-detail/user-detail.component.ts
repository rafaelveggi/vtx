import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.types';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  providers: [UserService],
})
export class UserDetailComponent implements OnInit {
  public user: User

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.user = this.service.getUser()
  }

}
