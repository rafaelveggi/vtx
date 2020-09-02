import { Injectable } from '@angular/core'
import { User } from './user.types'
import USER from './user.mock'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User

  constructor() { }

  public getUser(): User {
    this.user = { ...USER }
    this.user.age = this.getAge(this.user.birthDate)
    return this.user
  }

  private getAge(birthDate): number {
    const today = new Date().getTime()
    return Math.floor((today - birthDate.getTime()) / 3.15576e+10)
  }

}
