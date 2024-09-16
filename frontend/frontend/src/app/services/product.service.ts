import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public getAllProducts(){
    return this.http.get<Array<Product>>(`${environment.backendHost}/api/products`);
  }
}
