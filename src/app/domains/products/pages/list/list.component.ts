import { Component, Input, SimpleChange, inject, signal } from '@angular/core';

import {ProductComponent} from './../../components/product/product.component';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLinkWithHref, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([]); //lista de productos
  categories = signal<Category[]>([]);
  private cartServices= inject(CartService);
  private productServices = inject(ProductService);
  private categoriesServices = inject(CategoryService);
  @Input() category_id?: string;

  ngOnInit(){
    
    this.getCategories();
  }
  ngOnChanges(changes: SimpleChange) {
    this.getProducts();
  }

  private getProducts(){
    this.productServices.getProducts(this.category_id).subscribe({
      next: data => {
        const items = data.map(x => ({ ...x, images: x.images.map(a => a.replace(/\["(.*)"]/, '$1')), })); 
        this.products.set(items);
      }, 
      error: error => { console.log(error); },
    });
  }
  private getCategories(){
    this.categoriesServices.getCategories()
    .subscribe({
      next: data => {
        this.categories.set(data);
      },
      error: error => { console.log(error); },
    });
  }

  
  addToCart(product:Product){
    //this.cartLC.update(prevState => [...prevState, product]);
    this.cartServices.addToCart(product);
  }

  
}
