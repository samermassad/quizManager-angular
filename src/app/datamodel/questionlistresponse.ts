import { Question } from './question';
export class QuestionListResponse {
  
  success: boolean;
  response: Question[];
  
  constructor(success: boolean, response: Question[]) {
    this.success = success;
    this.response = response;
  }
  
}