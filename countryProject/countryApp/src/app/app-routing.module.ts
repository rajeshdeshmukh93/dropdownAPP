import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthGuard } from './guards/auth.guard';
import { CountrydetailsComponent } from './components/countrydetails/countrydetails.component';

const routes: Routes = [
  { path:'login', component:LoginComponent },
  { path:'signup', component:SignupComponent},
  { path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  { path:'dashboard/:name.commom', component:CountrydetailsComponent},
  { path:'pagenotfound', component:PagenotfoundComponent},
  { path:'', redirectTo:'/login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
