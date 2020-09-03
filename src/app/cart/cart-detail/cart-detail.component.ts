import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CartItem } from '../cart.types'
import { of } from 'rxjs'
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
    this.route.data.subscribe(data => this.list = data.items)
  }

  public async onFileUpload(file: File): Promise<void> {
    this.list = await this.service.processFile(file)
  }

}
