import { Login } from '../datamodel/login';
import { SuccessResponse } from '../datamodel/successresponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

url = 'http://localhost:8080/QuizManager-api/rest/login';

    constructor(private http: HttpClient) {

    }

  attemptAuthentication(login: Login) {
    return this.http.post<SuccessResponse>(this.url, login);
  }


}
