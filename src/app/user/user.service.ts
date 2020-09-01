import { Injectable } from '@angular/core';
import { User } from './user.types'

const USER: User = {
  firstName: 'Rafael',
  lastName: 'Veggi',
  birthDate: new Date('1984-05-27'),
  hobbies: [
    'rough and tumble play with my kids',
    'play harmonica',
    'read a good book',
  ]
}

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
