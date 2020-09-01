import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LayoutModule } from './layout/layout.module'
import { UserModule } from './user/user.module'
import { CartModule } from './cart/cart.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    UserModule,
    CartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
