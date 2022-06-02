import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-with-template-ref-variable',
  templateUrl: './login-with-template-ref-variable.component.html',
  styleUrls: ['./login-with-template-ref-variable.component.css'],
})
export class LoginWithTemplateRefVariableComponent implements OnInit {
  accNo = '';
  pswd = '';
  //database
  db: any = {
    1000: { acno: 1000, userName: 'Anu', password: 1000, balance: 5000 },
    1001: { acno: 1001, userName: 'Anu', password: 1001, balance: 5000 },
    1002: { acno: 1002, userName: 'Anu', password: 1000, balance: 5000 },
  };

  constructor() {}

  ngOnInit(): void {}

  login(acno: any, pwd: any) {
    // console.log(acno);
    // console.log(acno.value);

    var acno = acno.value;
    var pwd = pwd.value;
    var db = this.db;

    if (acno in db) {
      if (pwd == db[acno]['password']) {
        alert('success');
      } else {
        alert('invalid password');
      }
    } else {
      alert('inavalid accno');
    }
  }
}
