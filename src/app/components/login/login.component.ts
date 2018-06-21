import {Login} from '../../datamodel/login';
import { LoginService } from '../../services/login.service';
import {TestloginService} from '../../services/testlogin.service';
import {HttpClient} from '@angular/common/http';
import {Component, OnInit, Inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    this.login = new Login('', '');
  }

  validate() {


    //this.router.navigate(['questions']);

    this.loginService.attemptAuthentication(this.login).subscribe(
      data => {
        //this.token.saveToken(data.token);
        //this.router.navigate(['home']);
        console.log(data);
      }
    );

  }

}
