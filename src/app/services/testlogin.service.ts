import { Login } from '../datamodel/login';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};

@Injectable()
export class TestloginService {

  url = 'http://localhost:8080/QuizManager-api/rest/login';

    constructor(private http: HttpClient) {

    }

//  checkLogin(login: Login) {
//    return this.http.post<boolean>(this.url, {login}).shareReplay;
//  }
//
//  authenticateUser(login: Login): Observable<Login> {
//    return this.http.post<Login>(this.url, login, httpOptions).pipe(
//    
//    );
//  }

  attemptAuthentication(login: Login): Observable<Login> {
    const credentials = {username: login.username, password: login.password};
    console.log('attempAuthentication for user ::' + login.username);
    return this.http.post<Login>(this.url, login, httpOptions);
    // return this.http.post<any>('http://localhost:8080/token/generate-token', credentials);
  }

  
}
