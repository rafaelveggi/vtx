import { Component, Input, ViewChild, OnChanges, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { CartItem } from '../cart.types'


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnChanges, OnInit {
  @Input() list: CartItem[]

  public cols = ['description', 'quantity', 'unitPrice', 'vatPercentage', 'itemTotal']
  public sorted: CartItem[]
  public dataSource: MatTableDataSource<CartItem>

  @ViewChild(MatSort, { static: true }) sort: MatSort
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator

  constructor() { }

  ngOnInit(): void {
    this.initTableData()
  }
  
  ngOnChanges(): void {
    this.initTableData()
  }

  public getItemTotal(item: CartItem): string {
    const subTotal = item.quantity * item.unitPrice
    return `${(subTotal + subTotal * (item.vatPercentage / 100)).toFixed(2)}`
  }

  private initTableData() {
    if (this.list) {
      this.dataSource = new MatTableDataSource(this.list)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    }
  }

}
