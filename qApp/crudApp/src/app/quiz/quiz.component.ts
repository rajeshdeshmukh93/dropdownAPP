import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import {IQuiz, Iresponse} from '../quiz';
import { Observable } from 'rxjs-observable';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor( private quizService : QuizService) { }

  question = [];
  answer = false;
  num = 0;
  points = 0;

   quizs : IQuiz[] = [];

  ngOnInit(): void {
    this.start();
  }

  //for starting Quiz

  start(){
    this.quizService.getQuiz().subscribe( (res:any) => {
       
          console.log(res);
        
    })
  }

  //for checking Answer
  checkAnswer(){

  }

}
