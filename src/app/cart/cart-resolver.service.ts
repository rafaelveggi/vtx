import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { CartService } from './cart.service'
import { CartItem } from './cart.types'

@Injectable({ providedIn: 'root' })
export class CartResolver implements Resolve<CartItem[]> {
  constructor(private service: CartService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): CartItem[] {
    return this.service.getItems()
  }
}