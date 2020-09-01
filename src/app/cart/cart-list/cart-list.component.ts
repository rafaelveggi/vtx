import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { CartItem } from '../cart.types'
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  @Input() list: CartItem[]
  dataSource = new MatTableDataSource<CartItem>(this.list)
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  public cols: string[] = ['description', 'quantity', 'unitPrice', 'vatPercentage', 'itemTotal']

  constructor() { }

  ngOnInit(): void { }

  public getItemTotal(item: CartItem): string {
    const subTotal = item.quantity * item.unitPrice
    return `${(subTotal + subTotal * (item.vatPercentage / 100)).toFixed(2)}`
  }

}
