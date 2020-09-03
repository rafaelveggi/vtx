import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { CartService } from './cart.service'
import { CartItem } from './cart.types'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class CartResolver implements Resolve<CartItem[]> {
  constructor(private service: CartService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<CartItem[]> {
    return new Promise((resolve) => resolve(this.service.getItems()))
  }
}