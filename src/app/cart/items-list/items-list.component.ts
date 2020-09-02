import { Component, Input, ViewChild, OnChanges, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { CartItem } from '../cart.types'

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnChanges, OnInit {
  @Input() list: CartItem[]

  public cols = ['Descriptive', 'Quantity', 'UnitPrice', 'VATPercentage', 'ItemTotal']
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
    const subTotal = item.Quantity * item.UnitPrice
    return `${(subTotal + subTotal * (item.VATPercentage / 100)).toFixed(2)}`
  }

  private initTableData(): void {
    if (this.list) {
      this.dataSource = new MatTableDataSource(this.list)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    }
  }

}
