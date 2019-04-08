import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { CusionsComponent } from './components/cusions/cusions.component';
import { CusionsRecipesComponent } from './components/cusions-recipes/cusions-recipes.component';
import { LoginComponent } from './components/login/login/login.component';
import { SignupComponent } from './components/login/signup/signup.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CusionsComponent,
    CusionsRecipesComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,  RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
        path: 'cuisines',
        component: CusionsComponent
      },
     
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
