import { Injectable } from '@angular/core'
import { CartItem } from './cart.types'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public getItems(): CartItem[] {
    try {
      const serialized = window.sessionStorage.getItem('items')
      if (serialized) {
        return JSON.parse(serialized)
      }
    } catch (error) {
      console.error('Error retrieving items from sessionStorage', error)
    }
  }

  public clearCart() {
    window.sessionStorage.clear()
  }

  public processFile(file: File): Promise<CartItem[]> {
    return new Promise((resolve, reject) => {
      if (!file) {
        return
      }
      const reader = new FileReader()
      reader.onload = () => {
        const contents = JSON.parse(reader.result as string)
        const validated = this.validateContents(contents)
        if (validated) {
          this.saveItemsInStorage(validated)
          resolve(validated)
        } else {
          alert('Invalid file format.')
        }
      }
      reader.onerror = reject
      reader.readAsText(file)
    })
  }

  private saveItemsInStorage(items: CartItem[]): void {
    try {
      window.sessionStorage.setItem('items', JSON.stringify(items))
    } catch (error) {
      console.error('Error saving items to sessionStorage.', error)
    }
  }

  private validateContents(items: object[]): CartItem[] {
    const isValid = items.length && items.every((item: CartItem) => item)
    if (isValid) {
      return items as CartItem[]
    }
  }

}
