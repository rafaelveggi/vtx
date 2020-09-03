import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CartDetailComponent } from './cart-detail/cart-detail.component'
import { CartResolver } from './cart-resolver.service'

const routes: Routes = [
  {
    path: '',
    component: CartDetailComponent,
    resolve: { items: CartResolver },
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CartResolver]
})
export class CartRoutingModule { }
