import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import {interval} from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public name: string='';
  public questionList : any[] =[];
  public currentQuestion:number=0;
  public points:number=0;
  counter=60;
  correctAnswer:number=0;
  incorrectAnswer:number = 0;
  interval$:any

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.name=localStorage.getItem("name")!;
    this.getAllQuestion();
    this.startCounter();
  }

  getAllQuestion(){
    this.api.getQuestionJson().subscribe((res:any) => {
      this.questionList = res.questions;
      console.log(this.questionList);
    })
  }

  nextQuestion(){
    this.currentQuestion += 1;
  }

  preQuestion(){
    this.currentQuestion-=1;
  }

  answer(currentQ:number, option:any){
    if(option.correct){
      this.points += 10;
      this.correctAnswer ++;
      this.currentQuestion++
    }else{
      this.points -= 10;
      this.incorrectAnswer++;
      this.currentQuestion++;
    }
  }

  startCounter(){
    this.interval$ = interval(1000).subscribe( (val:any) => {
      this.counter--;
      if(this.counter === 0){
        this.currentQuestion++;
        this.counter = 60;
        this.points -= 10;
      }
    })
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 6000000);
  }

  stopCounter(){
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter(){
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  resetQuiz(){
    this.resetCounter();
    this.points = 0;
    this.counter = 60;
    this.getAllQuestion();
    this.currentQuestion = 0;
  }
}
