import { Component, OnInit } from '@angular/core'
import { CartItem } from '../cart.types'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  list: CartItem[]

  constructor(private service: CartService) { }

  ngOnInit(): void {
    this.list = this.service.getItems()
  }

  public onFileUpload(file: File) {
    this.service.processFile(file)
    this.list = this.service.getItems()
  }

}
