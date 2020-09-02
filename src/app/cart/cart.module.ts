import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CartDetailComponent } from './cart-detail/cart-detail.component'
import { ItemsListComponent } from './items-list/items-list.component'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import {CartRoutingModule} from './cart-routing.module'

@NgModule({
  declarations: [CartDetailComponent, ItemsListComponent],
  imports: [
    CartRoutingModule,
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
