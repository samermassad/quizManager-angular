import { Question } from '../../datamodel/question';
import { QuestionService } from '../../services/questions.service';
import { QuestionFormComponent } from '../question-form/question-form.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {

  questions: Question[] = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {

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
  
  edit() {

  }

}
