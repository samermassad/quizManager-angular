import {Question} from '../datamodel/question';
import { QuestionListResponse } from '../datamodel/questionlistresponse';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class QuestionService {

  url = 'http://localhost:8080/QuizManager-api/rest/question?question=&type=MCQ';

    constructor(private http: HttpClient) {

    }

  getAllQuestions() {
    
    return this.http.get<QuestionListResponse>(this.url);
    
//    return [
//      new Question(1, 'what is Maven?', 1, ['industrialization', 'project configuration']),
//      new Question(2, 'what is Hibernate', 1, ['data access', 'orm', 'frameworks', 'java']),
//      new Question(3, 'what is Spring?', 1, ['program configuration', 'frameworks', 'dependency injection'])
//    ];
  }

}
