import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private httpClient = inject(HttpClient);
  url = "https://api.escuelajs.co/api/v1/categories";
  constructor() { }

  getCategories(){
    return this.httpClient.get<Category[]>(this.url);
  }
}
