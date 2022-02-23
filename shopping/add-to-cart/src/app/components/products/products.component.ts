import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  breakpoint: number = 1;

  constructor(private api: ApiService, private cartService:CartService) { }

  public productList :any[]=[];
  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 2;
    this.getProduct();
  }

  getProduct(){
    this.api.getProductData().subscribe( (a:any) => {
      this.productList = a;
      console.log(this.productList);

      this.productList.forEach((a:any) => {
        Object.assign(a, {quantity:1, total:a.price});
      })
    })
  }

  onResize(event:any){
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 2;
  }

  addTocart(product:any){
    this.cartService.addToCart(product);
  }
}
