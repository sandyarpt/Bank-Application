import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  aim = 'from ts to html - string Interpolation  {{variable}}';
  propertyBinding = 'propertyByding-AccountNo';

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  });

  constructor(
    private router: Router,
    private ds: DataService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  login() {
    var acno = this.loginForm.value.acno;
    var password = this.loginForm.value.pswd;
    
    if (this.loginForm.valid) {
      this.ds.login(acno, password)
      
      
      
      .subscribe((result:any)=>{
        if (result) {
          localStorage.setItem('currentUser',result.currentUser)
          localStorage.setItem('currentAcno',result.currentAcno)
          localStorage.setItem('token',result.token)
          alert(result.message);
          this.router.navigateByUrl('dashboard') //  dashboard page
        } 

      },
      //400 series
      result=>{
        alert(result.error.message);
        
      }


      )




      // if (result) {
      //   {
      //     alert('login successfull');
      //     this.router.navigateByUrl('dashboard');
      //   }
      // }
    }
    else {
      alert("invalid form")
    }

    // AccnoValueFromHTMLelement(event:any){

    // // console.log(event.target.value);

    // this.accNo=event.target.value;  //  this=> refer to class properties  , class properties can be accessable to throungh out the class

    // console.log(this.accNo)
    // }

    // pswdValueFromHTMLelement(event:any)
    //   {
    //   // console.log(event.target.value);

    //   this.pswd=event.target.value;

    //   console.log( this.pswd)
    //   }
  }
}
