import {Question} from '../../datamodel/question';
import { QuestionType } from '../../datamodel/questiontype';
import { SuccessResponse } from '../../datamodel/successresponse';
import { QuestionService } from '../../services/questions.service';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  question: Question;

  constructor(private questionService: QuestionService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.questionService.getQuestion(id).subscribe(
      data => {
          this.question = data;
      }
    );
  }

  validate() {
    var successResponse: SuccessResponse;
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
