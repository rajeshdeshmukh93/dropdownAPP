import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  addUsers(user:any){
    let users = [];
    if(localStorage.getItem("Users")){
      users = JSON.parse(localStorage.getItem('Users') as string);
      users = [user, ...users]
    }else{
      users = [user];
    }
    localStorage.setItem("Users", JSON.stringify(users));
  }

  isLoggedIn(){
    let user = localStorage.getItem('formdata');
    if(user===undefined || user===null || user===''){
        return false;
    }else{
      return true;
    }
  }

  getAllCountry(){
    return this.http.get("https://restcountries.com/v3.1/all");
  }

  searchCountry(name:any){
    return this.http.get("https://restcountries.com/v3.1/name/"+name);
  }

  getFullName(name:any){
    return this.http.get("https://restcountries.com/v3.1/name/" + name+"?fullText=true");
  }
}