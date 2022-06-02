import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginWithTemplateRefVariableComponent } from './login-with-template-ref-variable/login-with-template-ref-variable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { LoginmainComponent } from './loginmain/loginmain.component';
import { RegisterComponent } from './register/register.component';
import { GitTest1Component } from './git-test1/git-test1.component';
import { GitTestComponent } from './git-test/git-test.component';

 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginWithTemplateRefVariableComponent,
    TwoWayBindingComponent,
    LoginmainComponent,
    RegisterComponent,
    GitTest1Component,
    GitTestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
