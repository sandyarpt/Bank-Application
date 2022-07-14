import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  //form group or model
  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  });
  //form group or model
  withdrawForm = this.fb.group({
    wacno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    wpswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    wamount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  });

  acno: any;
  user: any;
  lDate: any;

  constructor(
    private ds: DataService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.user = localStorage.getItem('currentUser');
    this.lDate = new Date();
    //new Date() - creating an object of class Date ,now system date will be saved in lDate variable
  }

  ngOnInit(): void {
    // console.log('currentAcno');

    if (!localStorage.getItem('token')) {
      alert('please log in');
      this.router.navigateByUrl('');
    }
  }

  deposit(): void {
    var acno = this.depositForm.value.acno;
    var pswd = this.depositForm.value.pswd;
    var amt = this.depositForm.value.amount;

    if (this.depositForm.valid) {
      this.ds.deposit(acno, pswd, amt).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
          }
        },
        //400 series
        (result) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('invalid form');
    }
  }

  withdraw() {
    var acno = this.withdrawForm.value.wacno;
    var pswd = this.withdrawForm.value.wpswd;
    var amt = this.withdrawForm.value.wamount;

    if (this.withdrawForm.valid) {
      this.ds.withdraw(acno, pswd, amt).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
          }
        },
        //400 series
        (result) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('invalid form');
    }
  }

  logout() {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentAcno')
    localStorage.removeItem('token')
    this.router.navigateByUrl('');
  }
  deleteAccount() {
    this.acno = JSON.parse(localStorage.getItem('currentAcno') || '');
  }
  cancel() {
    this.acno = '';
  }
onDelete(event:any){
  // alert('from parent :' + event)
this.ds.deleteAcc(event)
// .subscribe(result:any)=>{
//   if(result){}
  
  .subscribe((result:any)=>{
    if (result) {
      alert(result.message);
      localStorage.removeItem('currentUser')
      localStorage.removeItem('currentAcno')
      localStorage.removeItem('token')
      this.router.navigateByUrl('')//  login page
    } 

  },
  //400 series
  result=>{
    alert(result.error.message);
    
  }


  )




}
}
