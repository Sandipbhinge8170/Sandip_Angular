import { Component, OnInit } from '@angular/core';
import { movie } from '../models/movies';

@Component({
  selector: 'app-demodirective',
  templateUrl: './demodirective.component.html',
  styleUrls: ['./demodirective.component.css']
})
export class DemodirectiveComponent implements OnInit {
isShows:boolean=true;
title:string="Top 3 movies";
movies:movie[]=[
  { title:'pk',cast:'amir',director:'amir',realeasDate:'2015'},
  { title:'kgf',cast:'yesh',director:'rocky',realeasDate:'2010'},
  { title:'don',cast:'sharukh',director:'yesh',realeasDate:'2014'}
]
  constructor() { }

  ngOnInit() {
  }

}
