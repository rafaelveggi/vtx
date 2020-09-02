import { Component, OnInit } from '@angular/core'
import { CartItem } from '../cart.types'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss'],
  providers: [CartService]
})
export class CartDetailComponent implements OnInit {
  list: CartItem[]

  constructor(private service: CartService) { }

  ngOnInit(): void {
    this.list = this.service.getItems()
  }

  public async onFileUpload(file: File): Promise<void> {
    this.list = await this.service.processFile(file)
  }

}
