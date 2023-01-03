import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-firebasepostapi',
  templateUrl: './firebasepostapi.component.html',
  styleUrls: ['./firebasepostapi.component.css']
})
export class FirebasepostapiComponent implements OnInit {

  constructor(private _firebaseservice:FirebaseService) { }

  ngOnInit() {
   
   }
   createPost(){
 this._firebaseservice.createPost().subscribe(res=>{
      console.log('firebase post',res);
      
    })
   }

  }


