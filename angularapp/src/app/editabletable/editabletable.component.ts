import { Component, OnInit, keyframes } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-editabletable',
  templateUrl: './editabletable.component.html',
  styleUrls: ['./editabletable.component.css']
})
export class EditabletableComponent implements OnInit {
  data: any = [];
  document = []
  id:any;
  source:any;
  tripId:any;
  status:any;
  qwerty:any;


  // documents: any[];
  errorMessage: any;
  isChecked: boolean = false;
  deleteResponse: any ;
  editedIndex: boolean =false ;
  type:any;
  notes:any;
  date:any;

  // documentListForm: ControlGroup;
  constructor() { }

  ngOnInit() {
  }
 documents = [
   {"documentId":"1","type":"ali1","source":"hfjks","date":"12/05/2018","tripId":"hssjk","status":"active","notes":"shgag hga"},
   {"documentId":"2","type":"ali12","source":"hfjks","date":"11/12/2018","tripId":"hssjk","status":"active","notes":"shgag hga"},
   {"documentId":"3","type":"ali123","source":"hfjks","date":"11/12/2017","tripId":"hssjk","status":"active","notes":"shgag hga"},
   {"documentId":"4","type":"ali1234","source":"hfjks","date":"11/12/2019","tripId":"hssjk","status":"active","notes":"shgag hga"}
  ]

   edit(data){
    this.qwerty = data.documentId;
     this.editedIndex = true ;
     
     this.type = data.type;
     this.source = data.source;
     this.date = data.date;
     this.tripId = data.tripId;
     this.status = data.status;
     this.notes = data.notes

     console.log(data);
  
   }
   ok(data){
     this.qwerty = '';
   }  
   delete(data){
     console.log(data);
   }
   update(document){
     console.log(document)
     this.qwerty = '';
   }


}
