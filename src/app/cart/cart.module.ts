import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CartComponent } from './cart.component'
import { CartListComponent } from './cart-list/cart-list.component'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'

@NgModule({
  declarations: [CartComponent, CartListComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
  ]
})
export class CartModule { }
