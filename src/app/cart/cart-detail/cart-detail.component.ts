import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CartItem } from '../cart.types'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss'],
})
export class CartDetailComponent implements OnInit {
  list: CartItem[]

  constructor(
    private route: ActivatedRoute,
    private service: CartService,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.list = data.items
    })
  }

  public async onFileUpload(file: File): Promise<void> {
    this.list = await this.service.processFile(file)
  }

  public onClearCart() {
    if (window.confirm('Are you sure?')) { //FIXME use Material UI with i18n
      this.service.clearCart()
      this.list = null
    }
  }

}
