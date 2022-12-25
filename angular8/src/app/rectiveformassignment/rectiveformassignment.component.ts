import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rectiveformassignment',
  templateUrl: './rectiveformassignment.component.html',
  styleUrls: ['./rectiveformassignment.component.css']
})
export class RectiveformassignmentComponent implements OnInit {
  myForm:FormGroup;
  genders=[
    {
      id:'1',
      value:'Male'
    },
    {
      'id':'1',
      value:'Female'
    }

  ]
  constructor() { 
    this.createForm();
  }


  MustMatch(controlName:string, matchinControlName:string){
return(formGroup:FormGroup)=>{
  const control=FormGroup.bind[controlName];
  const matching  =formGroup.controls[matchinControlName];
  if(matching.errors && !matching.errors.MustMatch){
    return
  }
  if(control.value !==matching.value){
    matching.setErrors({MustMatch:true})
  }
  else{
    matching.setErrors(null);
  }
}
  }
  
 


  createForm(){
    this.myForm=new FormGroup({
'firstname':new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]),
'lastname':new FormControl('',[Validators.required,Validators.maxLength(10)]),
'age':new  FormControl('',[Validators.required]),
'email':new FormControl('',Validators.required),
'number':new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
'city':new FormControl(''),
'gender':new FormControl(''),
'password':new FormControl('',[Validators.required,Validators.minLength(6)]),
'confirmpassword':new FormControl('',[Validators.required]) 
 },
 {
      validators:this.MustMatch.bind('password','confirmpassword')
    })
  }

  OnSubmit(){
    console.log(this.myForm);
    
  }

 

  ngOnInit() {
  }

}
