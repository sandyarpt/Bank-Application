import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit { 
//@input() for getting value from the parent item will get acno value of the dashboard component (parent component)
 @Input() item:string|undefined

 @Output() onCancel=new EventEmitter() //onCancel event is generated using the EventEmitter() class

 @Output() onDelete=new EventEmitter() //onDelete event is created/ generated using the EventEmitter() class,since it is occuring in parent, so put it in @Output

 
  constructor() { 
    console.log(this.item);
    
  }

  ngOnInit(): void {
  }
cancel(){ /// when we click on the cancel btn , onCancel event  should occour.To occour call the emit function of EventEmitter class.
this.onCancel.emit()

}
delete(){
  this.onDelete.emit(this.item) // onDelete occour when we calls  emit() // and also passes the account number  to be deleted()
}
}
