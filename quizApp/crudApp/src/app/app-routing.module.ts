import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuestionComponent } from './components/question/question.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path:'', redirectTo:'/welcome', pathMatch:'full'},
  { path:'welcome', component:WelcomeComponent},
  { path:'question', component:QuestionComponent},
  { path:'header', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
