import {QuestionType} from './questiontype';
export class Question {
  id: number;
  question: string;
  type: QuestionType;


  constructor(id: number, question: string, type: QuestionType) {
    this.id = id;
    this.question = question;
    this.type = type;
  }
}
