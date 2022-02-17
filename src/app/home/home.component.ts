import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  array:any = [
    {
      id:0,
      src:"../../assets/images/angular.png",
      alt:"Angular",
      name: "Angular"
    },
    {
      id:1,
      src:"../../assets/images/javascript.png",
      alt:"javascript",
      name: "javascript"
    },
    {
      id:2,
      src:"../../assets/images/pythone.png",
      alt:"Pythone",
      name: "Pythone"
    },
    {
      id:3,
      src:"../../assets/images/react.png",
      alt:"React",
      name: "React"
    },

  ]
  ngOnInit(): void {
  
  }

  public show: boolean  = false
  dropdownOpen(){
     this.show = !this.show;
  }

  srcvariable:string ="../../assets/images/angular.png";
  altvariable:string="Angular";
  namevariable:string="Angular";

  changeCode(arr:any){
    this.srcvariable = arr.src;
    this.altvariable = arr.alt;
    this.namevariable = arr.name;
  }

}
