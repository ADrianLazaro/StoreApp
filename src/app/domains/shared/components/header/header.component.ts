import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';

import { CartService } from '../../services/cart.service';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    hideSideMenu = signal(true);
    //totalPrice = signal(0);
    //@Input({required:true}) cart: Product[] = [];
    private cartServices= inject(CartService);
    cart = this.cartServices.cart;
    totalPrice = this.cartServices.totalPrice;


    toogleSideMenu(){
      this.hideSideMenu.update(prevState => !prevState);
    }
}
