import {Question} from '../../datamodel/question';
import { QuestionType } from '../../datamodel/questiontype';
import { SuccessResponse } from '../../datamodel/successresponse';
import { QuestionService } from '../../services/questions.service';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { isString } from 'util';


@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  question: Question;
  id;
  
  constructor(private questionService: QuestionService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.question = new Question(0, "", QuestionType.MCQ);
    if (this.id !== 'new') {
      this.questionService.getQuestion(this.id).subscribe(
        data => {
            this.question = data;
        }
      );
    }
  }

  validate() {
    let successResponse: SuccessResponse;
    if (this.id === 'new') {
      this.questionService.create(this.question).subscribe(
        data => {
          successResponse = new SuccessResponse(data.success);
          if (successResponse.success) {
            this.router.navigate(['questions']);
          }
        }
      );

    } else {
      this.questionService.update(this.question).subscribe(
        data => {
          successResponse = new SuccessResponse(data.success);
          if (successResponse.success) {
            this.router.navigate(['questions']);
          }
        }
      );
    }
  }
}
