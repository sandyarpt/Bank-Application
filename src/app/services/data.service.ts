import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionComponent } from '../transaction/transaction.component';

const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // currentUser: any;
  // currentAcno:any;
  // //database
  // db: any = {
  //   1000: { acno: 1000, username: 'Anu', password: 1000, balance: 5000,transaction:[] },
  //   1001: { acno: 1001, username: 'ammu', password: 1001, balance: 6000,transaction:[]  },
  //   1002: { acno: 1002, username: 'hari', password: 1002, balance: 7000 ,transaction:[] },
  // };
  constructor(private http:HttpClient) {
  // this.getDetails();//database should be loaded 1st in dadaService loading so use getDeails function im
  }
  //get details from local storage
  // getDetails() {
  //   if (localStorage.getItem('database')) {
  //     this.db = JSON.parse(localStorage.getItem('database') || '');
  //   }
  //   if (localStorage.getItem('currentUser')) {
  //     this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
  //   }
  //   if (localStorage.getItem('currentAcno')) {
  //     this.currentAcno = JSON.parse(localStorage.getItem('currentAcno') || '');
  //   }

   
  // }

  // //SaveDetails
  // saveDetails() {
  //   if (this.db) {
  //     localStorage.setItem('database', JSON.stringify(this.db));
  //   }
  //   if (this.currentUser) {
  //     localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  //   }
  //   if (this.currentAcno) {
  //     localStorage.setItem('currentAcno', JSON.stringify(this.currentAcno));
  //   }
  // }

  //login

  login(acno: any, pswd: any) {

const data={
  acno,
  pswd
}
return this.http.post('http://localhost:3000/login',data)




    // var db = this.db;

    // if (acno in db) {
    //   if (pswd == db[acno]['password']) {
    //     this.currentUser = db[acno]['username'];
    //     this.currentAcno=acno
    //     this.saveDetails();
    //     return true;
    //   } else {
    //     alert('invalid password');
    //     return false;
    //   }
    // } else {
    //   alert('inavalid accno');
    //   return false;
    // }
  }

  //register
  register(username: any, acno: any, password: any) {
  //json format 
    const data={
    username,
    acno,
    password

   }
   //asynchronous call 
  return this.http.post('http://localhost:3000/register',data)
   
   
 
   
    // let db = this.db;
    // if (acno in db) {
    //   return false;
    // } //insert in db
    // else {
    //   db[acno] = { acno, username, password, balance: 0 ,transaction:[]};
    //   this.saveDetails();
    //   return true;
    // }
  }
  
  //deposit
  deposit(acno: any, password: any, amt: any) {
    const data={
      acno,
      password,
      amt
    }


   return this.http.post('http://localhost:3000/deposit',data,this.getOptions())
    
    // var amount = parseInt(amt);

    // let db = this.db;
    // if (acno in db) {
    //   if (password == db[acno]['password']) {
    //     db[acno]['balance'] = db[acno]['balance'] + amount;
    //     db[acno].transaction.push({
    //         type:"CREDIT",
    //       amount:amount
    //     })
    //     this.saveDetails();
    //     return db[acno]['balance'];
    //   } else {
    //     alert('incorrect password');
    //     return false;
    //   }
    // } else {
    //   alert('user does not exist');
    //   return false;
    // }
  }
  //appending token to request 
  getOptions(){
    const token=localStorage.getItem('token') 
    let headers=new HttpHeaders()
    if(token){
      headers=headers.append('x-access-token',token)
      options.headers=headers
    }
    return options
  }

  //withdraw
  withdraw(acno: any, password: any, amt: any) {

    const data={
      acno,
      password,
      amt
    }
   return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())
    // var amount = parseInt(amt);//html input willbe of string, so need to convert to integer.

    // let db = this.db;
    // if (acno in db) {
    //   if (password == db[acno]['password']) {
    //     if (db[acno]['balance'] > amount) {
    //       db[acno]['balance'] = db[acno]['balance'] - amount;
    //       db[acno].transaction.push({
    //         type:"DEBIT",
    //       amount:amount
    //     })
    //       this.saveDetails();
    //       return db[acno]['balance'];
    //     }else{
    //       alert('insufficient balance')
    //       return false;
    //     }
    //   } else {
    //     alert('incorrect password');
    //     return false;
    //   }
    // } else {
    //   alert('user does not exist');
    //   return false;
    // }
  }
  getTransaction(acno:any){

    const data={
      acno
    }
                        //Transactionn    
   return this.http.post('http://localhost:3000/transaction',data,this.getOptions())

    // return(this.db[acno].transaction);

  }
  deleteAcc(acno:any){
   return this.http.delete('http://localhost:3000/deleteAcc/'+ acno,this.getOptions())
  }
}
// function data(arg0: string, data: any) {
//   throw new Error('Function not implemented.');
// }

