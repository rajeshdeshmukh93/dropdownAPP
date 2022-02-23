import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem :any =0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.raw();
  }

  raw(){
    this.cartService.getProducts().subscribe( (res:any) => {
      this.totalItem =res.length;
    })
  }
  
  
}
