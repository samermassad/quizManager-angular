import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import { router } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import {QuestionFormComponent} from './components/question-form/question-form.component';
import {QuestionlistComponent} from './components/questionlist/questionlist.component';
import {QuestionService} from './services/questions.service';
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { LoginService } from './services/login.service';
import { TestloginService } from './services/testlogin.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    QuestionlistComponent,
    QuestionFormComponent,
    LoginComponent,
    NavigationbarComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    router
  ],
  providers: [
    QuestionService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
