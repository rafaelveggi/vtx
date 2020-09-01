import { Component, OnInit } from '@angular/core'
import { CartItem } from '../cart.types'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  list: CartItem[]

  constructor() { }

  ngOnInit(): void {
  }

  public onFileUpload(file: File) {

    if (!file.type.toLowerCase().includes('json')) {
      alert('File not supported. Please select a JSON file') // FIXME material ui message
      return
    }

    const reader = new FileReader()
    reader.addEventListener('load', (e) => this.list = JSON.parse(e.target.result as string))
    reader.readAsText(file)
  }

}
