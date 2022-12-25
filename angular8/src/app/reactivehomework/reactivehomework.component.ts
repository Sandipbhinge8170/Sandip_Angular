import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivehomework',
  templateUrl: './reactivehomework.component.html',
  styleUrls: ['./reactivehomework.component.css']
})
export class ReactivehomeworkComponent implements OnInit {
  myRectiveForm:FormGroup;
  
  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }

  onSubmit()
{
 console.log(this.myRectiveForm);
 
}
  createForm(){
    this.myRectiveForm=new FormGroup({
      'firstname':new FormControl('',Validators.required),
      'lastname':new FormControl('',Validators.required),
      'email':new FormControl('',[Validators.required, Validators.email]),
      'phone':new FormControl('',Validators.required),
      'status':new FormControl('Pending'),
       'city':new FormControl('Pune'),
       'country':new FormControl('India'),
       'state':new FormControl('Maharashtra'),
       'date':new FormControl('',Validators.required),
       'password':new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
       Validators.minLength(8)])
      
    })
    
      
    }

  }
  

