import { Question } from '../../datamodel/question';
import { SuccessResponse } from '../../datamodel/successresponse';
import { QuestionService } from '../../services/questions.service';
import { QuestionFormComponent } from '../question-form/question-form.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {

  questions: Question[] = [];

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questionService.getAllQuestions().subscribe(
      data => {
        if (data.success) {
          this.questions = data.response;
        }
      }
    );
  }

  trackByQuestions(index: number, question: Question): number {
    return question.id;
  }

  delete(questionId: number) {
    let successResponse: SuccessResponse;
    this.questionService.deleteQuestion(questionId).subscribe(
      data => {
        successResponse = new SuccessResponse(data.success);
        if (successResponse.success) {
          this.getQuestions();
        }
      }
    );
  }

}
