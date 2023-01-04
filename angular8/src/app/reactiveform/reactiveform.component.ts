import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { from, interval, Observable } from 'rxjs';
import { firebasepost } from '../models/firebasepost';
import { FirebaseService } from '../services/firebase.service';
import { filter, map, take, takeLast, toArray} from 'rxjs/operators';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  Firebasepost:firebasepost;
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

  constructor(private fb:FormBuilder,private _firebaseservice:FirebaseService) { 
    this.createForm();
  }

  ngOnInit() {
/*get array from firebase service
form is method to convert array to observable formate
map() manapulate observable data*/
// const data = from(this._firebaseservice.users);
// data.pipe(
//   map(x => x.name + ' ' + 'data')
// ).subscribe(res =>{
//   console.log('res :',res);
// })

// get data form getPostDataFirebase
// this._firebaseservice.getPostDataFirebase().subscribe(res=>{
//   console.log('getPostDataFirebase',res);
// })

//get data from firebaseservice and manuplet convert to id 
this._firebaseservice.getPostDataFirebase().pipe(
  map(responseData => {
    //empty array
    const postArray =[];
    for(const key in responseData){
      //check key
      if(responseData.hasOwnProperty(key)){
        //push new value in to array
        postArray.push({...responseData[key],id:key})
      }
    }
return postArray;
  })
).subscribe(res=>{
  console.log('after manipulate data',res);
})

//filter rxjs operator
const data = from(this._firebaseservice.userss);
data.pipe(
  filter(u => u.gender == 'Male'),
  toArray()
).subscribe(res=>{
  console.log('filter operator',res);
  
})

// Take rxjs operator
// const sourse =interval(1000);
// sourse.pipe(
//   take(6)).subscribe(res =>{
//     console.log('interval example',res);
    
//   })

// Take last
let randomsName = ['sandy','sachin','sagar','rahul','ramesh'];
const sourse =from(randomsName);

sourse.pipe(
  takeLast(4)
).subscribe(res =>{
  console.log('take last operator:',res);
  
})




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
    // console.log(this.myRectiveForm);


    
    //firebase service postData
    // console.log(this.myRectiveForm['controls'].userdetails['controls'].username.value);
    this.Firebasepost=new firebasepost();
    this.Firebasepost.username=this.myRectiveForm['controls'].userdetails['controls'].username.value;
    this.Firebasepost.email=this.myRectiveForm['controls'].userdetails['controls'].email.value;
    this.Firebasepost.course=this.myRectiveForm['controls'].course.value;
    this.Firebasepost.gender=this.myRectiveForm['controls'].gender.value;
    this.Firebasepost.skills=this.myRectiveForm['controls'].skills.value;
     this._firebaseservice.createPostDataReactiveForm(this.Firebasepost).subscribe(res=>{
      console.log("post form reactive form", res);
      
     })
    
    
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
function form(users: any[]) {
  throw new Error('Function not implemented.');
}

