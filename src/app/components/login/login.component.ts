import {Login} from '../../datamodel/login';
import { SuccessResponse } from '../../datamodel/successresponse';
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
  error: boolean;

  constructor(private router: Router, private loginService: LoginService) {
    this.error = false;
  }

  ngOnInit() {
    this.login = new Login('', '');
  }

  validate() {
    this.error = false;

    var successResponse: SuccessResponse;
    this.loginService.attemptAuthentication(this.login).subscribe(
      data => {
        successResponse = new SuccessResponse(data.success);
        if (successResponse.success) {
          this.router.navigate(['home']);
        } else {
          this.error = true;
        }
      }
    );

  }

}
