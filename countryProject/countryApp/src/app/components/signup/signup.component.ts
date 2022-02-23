import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm !: FormGroup;
   user : any = {};
   userSubmitted : boolean = false;
  constructor(private fb:FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username : [null, Validators.required],
      password: [null, Validators.required],
      confirmpassword : [null, Validators.required]
    })
  }
  onSubmit(){
    //console.log(this.signupForm.value);
    this.userSubmitted = !this.userSubmitted;
    // if(this.signupForm.valid){
    this.user = Object.assign({}, this.signupForm.value);
    console.log(this.user);
    this.userService.addUsers(this.user);
    this.signupForm.reset();
 // }
}

  

  remove(){
    localStorage.removeItem('Users');
  }
}
