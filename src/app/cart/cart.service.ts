import { Injectable } from '@angular/core';
import { CartItem } from './cart.types'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public getItems(): CartItem[] | null {
    let items = null
    try {
      const json = window.sessionStorage.getItem('items')
      items = JSON.parse(json)
    } catch (error) {
      console.error('Error retrieving items from sessionStorage', error)
    } finally {
      return items
    }
  }

  public async processFile(file: File) {
    try {
      const items = await this.readFileAsync(file)
      return items
    } catch (error) {
      console.error(error) // FIXME use material ui error message
    }
  }

  private saveItemsInStorage(items: CartItem[]) {
    try {
      window.sessionStorage.setItem('items', JSON.stringify(items))
    } catch (error) {
      console.error('Error saving items to sessionStorage.', error)
    }
  }

  private readFileAsync(file: File): Promise<CartItem[]> {
    return new Promise((resolve, reject) => {
      let reader = new FileReader()

      reader.onload = () => {
        const contents = JSON.parse(reader.result as string)
        this.saveItemsInStorage(contents)
        resolve(contents)
      }

      reader.onerror = reject

      reader.readAsText(file)
    })
  }

}
