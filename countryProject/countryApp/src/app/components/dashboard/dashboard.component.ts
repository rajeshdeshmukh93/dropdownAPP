import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public searchName : any = [] ;
  public data1 : any = [];
  public show : boolean = false;
 
  
//mat grid
breakpoint: number = 1;

//mat-paginator
public pageList : any;
length :number = 100;
pageSize: number =10;
pageSizeOptions : number[] = [10,50,100,200];
public flag : boolean= true;

  constructor(private userService: UserService, private router: Router) { }


  

  ngOnInit(): void {
   this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
    this.countryData();
  }


  countryData(){
    this.userService.getAllCountry().subscribe( (res:any) => {
      this.data1 = res;
      this.pageList = this.data1.slice(0,this.pageSize);
      console.log(this.data1);
    })
  }

  

  searchCountryByName(countryname:any){
    this.show = !this.show;
    this.userService.searchCountry(countryname).subscribe( (res:any) => {
          res.filter( (serach:any) => {
          if(countryname === serach.name.common){
            this.data1 = [serach];
            console.log(this.data1);
            this.show = !this.show;
          }
        })
    })
  }

  logOut(){
    localStorage.setItem("formdata","");
    this.router.navigate(['/login']);
  }

  getCurrencies(currency:any){
    if(currency){
      let cname = Object.values(currency)[0] as {name:string};
     return cname.name;
    }else{
      return '';
    }
     
  }

  onResize(event:any){
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }

  OnPageChange(event:any){
    this.flag=false;
    console.log(event);
    this.pageList = this.data1.slice(0,event.pageSize);
    this.flag=true;
  }


  countryDetails(data:any){
    console.log(data.name.common);
    this.router.navigate(["/dashboard",data.name.common]);
  }

  next(){

  }

  previous(){

  }

}
