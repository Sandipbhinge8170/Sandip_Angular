import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  
  submitted:boolean=false;
  myRectiveForm:FormGroup;
  notAllowed=['codemind','technology'];
  //dynamic redio value set
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

  constructor(private fb:FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {

    //set value validation username and password
    //we can set value two way setvalue and patchvalue
    //setvalue
  //   setTimeout(() => {
  //     this.myRectiveForm.setValue({
  //       'userdetails':{
  //         'username':'sandip',
  //         'email':'sandipbhinge8170@gmail.com'
  //       },
  //       'course':'Html',
  //       'gender':'Male'
 //     })
  //   }, 3000);
   
//patchvalue
// setTimeout(() => {
//   this.myRectiveForm.patchValue({
//     'userdetails':{
//       'username':'sandip',
//       'email':'sandipbhinge8170@gmail.com'
//     }
//   })
  
// }, 3000);
   }




//create form input field
  createForm(){
//     this.myRectiveForm=new FormGroup({
//      'userdetails':new FormGroup({
//       'username':new FormControl('',[Validators.required,this.NaNames.bind(this)]),
// 'email':new FormControl('',[Validators.required, Validators.email],this.NaEmails),

//      }),
//       'course':new FormControl('Angular'),
//       'gender':new FormControl(''),
//       'skills':new FormArray([
//         new FormControl(null)
//       ])
//     })

//using formBuilder

this.myRectiveForm=this.fb.group({
  userdetails:this.fb.group({
    username:['',Validators.required],
    email:['',Validators.required]
  }),
  course:['Angular'],
  gender:['Male'],
  skills:this.fb.array([''])

})

  }

  onSubmit(){
    this.submitted = true;
    console.log(this.myRectiveForm);
    
    
  }
  //formarray
  OnAddskill(){
(<FormArray>this.myRectiveForm.get('skills')).push(new FormControl());
  }
  //index:number
  removeskill(index:number){
    // this.createForm.removeAt(index)
   (<FormArray>this.myRectiveForm.get('skills')).removeAt(index);
  
  }

  //custom validation notalloewd is array in array hold name that name is not allowed in form
  NaNames(control:FormControl){
if(this.notAllowed.indexOf(control.value) !== -1){
  return{'namesNotAllowed':true}

}
return null;
  }
//Asyncvalidator 
  NaEmails(control:FormControl):Promise<any> | Observable<any>{
const myResponse=new Promise<any>((resolve,_reject)=>{
setTimeout(() => {
  if(control.value  === 'codemindtechnology@gmail.com'){
    resolve({'emailNotAllowed':true})
  } else{
    resolve(null)
  }
  
}, 20000);

  })
  return myResponse;
}
}