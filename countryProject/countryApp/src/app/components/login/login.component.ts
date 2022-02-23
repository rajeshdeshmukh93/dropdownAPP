import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  myForm !: FormGroup;
  myid :any;
  public userData : any = [];

  constructor(private router: Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }

  onSubmit(){
    let flag = false;
    this.userData = JSON.parse(localStorage.getItem("Users") as string);
    console.log(this.userData);
    this.userData.filter( (res:any) => { 
       console.log(res);
       if((res.username === this.myForm.value.username) && (res.password === this.myForm.value.password)){
        flag = true;
        alert("Account Exist!!");
      }
    })

    if(flag){
      localStorage.setItem("formdata", JSON.stringify(this.myForm.value));
      this.router.navigate(['/dashboard']);
    }else{
      this.router.navigate(['/signup']);
    }
   
       
  }

  remove(){
    localStorage.removeItem('formdata');
  }

}
