import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
aim="from ts to html - string Interpolation  {{variable}}"
propertyBinding="propertyByding-userName"
accNo="" 
acNo=""
pwd=""
pswd=""
//database
db:any ={
  1000:{"acno":1000,"userName":"Anu","password":1000,"balance":5000},
  1001:{"acno":  1001,"userName":"Anu","password":1001,"balance":5000},
  1002:{"acno":1002,"userName":"Anu","password":1000,"balance":5000}
}

  constructor() { }

  ngOnInit(): void {
  }

 login(){
   
   var acno=this.acNo
   var pwd=this.pwd
   var db=this.db
console.log(acno)
console.log(pwd)
  

  if(acno in db){
         if(pwd==db[acno]["password"]){
       alert("success");
          }
        else{
          alert("invalid password");
       
          }
        }
    else
          {
            alert("inavalid accno");
            
          }

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
