import {QuestionType} from './questiontype';
export class Question {
  id: number;
  title: string;
  questionType: QuestionType;
  tags: string[];
  difficulty: number;


  constructor(id: number, title: string, difficulty: number, tags: string[]) {
    this.id = id;
    this.title = title;
    // this.questionType = questionType;
    this.tags = tags;
    this.difficulty = difficulty;
  }
}
