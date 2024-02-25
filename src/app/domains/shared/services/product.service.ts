import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private httpClient = inject(HttpClient);
  url= 'https://api.escuelajs.co/api/v1/products'
  constructor() { }

  getProducts(category_id?:string){
    const url = new URL(this.url);
    if(category_id){
      url.searchParams.set('categoryId',category_id);
    }
    return this.httpClient.get<Product[]>(url.toString());
  }

  getOne(id:string){
    return this.httpClient.get<Product>(this.url+'/'+id);
  }
}
