import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { QuestionlistComponent } from './components/questionlist/questionlist.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

import {Question} from './datamodel/question';

const appRoutes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'form', component: QuestionFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'questions', component: QuestionlistComponent}


];


export const router = RouterModule.forRoot(appRoutes);
