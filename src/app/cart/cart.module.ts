import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CartComponent } from './cart/cart.component'
import { CartListComponent } from './cart-list/cart-list.component'
import { CartItemComponent } from './cart-item/cart-item.component'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [CartComponent, CartListComponent, CartItemComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatIconModule,
  ]
})
export class CartModule { }
