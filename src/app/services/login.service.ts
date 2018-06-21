import { Login } from '../datamodel/login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

url = 'http://localhost:8080/QuizManager-api/rest/login';

    constructor(private http: HttpClient) {

    }

  attemptAuthentication(login: Login): Observable<Login> {
    const credentials = {username: login.username, password: login.password};
    console.log('attempAuthentication for user ::' + login.username);
    return this.http.post<Login>(this.url, login);
  }


}
