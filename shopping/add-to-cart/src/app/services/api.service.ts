import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl="https://fakestoreapi.com/products/";
  constructor( private http : HttpClient) { }

  getProductData(){
    return this.http.get(this.baseUrl);
    // .pipe(
    //   map( (res:any)  => {
    //     return res;
    //   })
    // )
  }
}
