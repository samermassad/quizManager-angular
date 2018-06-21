import { Question } from '../../datamodel/question';
import { QuestionService } from '../../services/questions.service';
import { QuestionFormComponent } from '../question-form/question-form.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {

  questions: Question[] = [];

  constructor(private questionService: QuestionService, private http: HttpClient) { }

  ngOnInit() {

    console.log('Get...');
    console.log(this.http.get('http://localhost:8080/QuizManager-api/rest/question?question&type=MCQ'));
//    const req = this.http.get('http://localhost:8080/QuizManager-api/rest/question?question&type=MCQ')
//      .subscribe(
//        res => {
//          console.log(res);
//        },
//        err => {
//          console.log("Error");
//        }
//      );

    // TODO initialize questions
    this.questions.push(new Question(1, 'Test1', 2, ['CRM', 'Change Management']));
    this.questions.push(new Question(2, 'Test1', 3, ['', '']));
    this.questions.push(new Question(3, 'Test1', 4, ['', '']));
    this.questions.push(new Question(4, 'Test1', 5, ['', '']));
    this.questions.push(new Question(5, 'Test1', 6, ['', '']));
    this.questions.push(new Question(6, 'Test1', 7, ['', '']));

  }

  edit() {

  }

}
