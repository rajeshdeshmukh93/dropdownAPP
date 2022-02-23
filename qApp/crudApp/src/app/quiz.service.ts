import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
import { Observable } from 'rxjs-observable';
import { IQuiz, Iresponse } from './quiz';
import { Iresponse } from './quiz';
import {Observable} from 'rxjs-observable';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor( private http: HttpClient) { }

  getQuiz():Observable<Iresponse>{
    return this.http.get("https://opentdb.com/api.php?amount=10&category=18&type=multiple");
  }
}
