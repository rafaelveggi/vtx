import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { UserService } from './user.service'
import { User } from './user.types'

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {
  constructor(private service: UserService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User {
    const user = this.service.getUser()
    return user
  }
}