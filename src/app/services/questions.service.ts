import {Question} from '../datamodel/question';
import { QuestionListResponse } from '../datamodel/questionlistresponse';
import { SuccessResponse } from '../datamodel/successresponse';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { RequestOptions, RequestOptionsArgs, RequestMethod } from '@angular/http';

@Injectable()
export class QuestionService {

  url = 'http://localhost:8080/QuizManager-api/rest/question';

    constructor(private http: HttpClient) {

    }

  getAllQuestions() {
    return this.http.get<QuestionListResponse>(this.url + '?question=&type=MCQ');
  }

  getQuestion(id: number) {
    return this.http.get<Question>(this.url + '?id=' + id);
  }

  deleteQuestion(questionId: number) {
    return this.http.delete<SuccessResponse>(this.url + '?id=' + questionId);
  }

  update(question: Question) {
    return this.http.post<SuccessResponse>(this.url, question);
  }
}
