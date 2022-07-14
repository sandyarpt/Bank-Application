import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  //form group or model
  registerForm = this.fb.group({
    //registerForm -  name can be anything
    acno: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
  });

  constructor(
    private ds: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  register() {
    var acno = this.registerForm.value.acno;
    var username = this.registerForm.value.uname;
    var password = this.registerForm.value.pswd;
   // console.log(this.registerForm);

   

    if (this.registerForm.valid) {
      //if registerForm is valid then call register function of dataServices.
    this.ds.register(username, acno, password)
      .subscribe((result:any)=>{
        if (result) {
          alert(result.message);
          this.router.navigateByUrl(''); // "" => login page
        } 

      },
      //400 series
      result=>{
        alert(result.error.message);
        
      }


      )


      
    } else {
      alert('invalid form');
    }
  }
}
