import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childto-parrent',
  templateUrl: './childto-parrent.component.html',
  styleUrls: ['./childto-parrent.component.css']
})
export class ChildtoParrentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() bookTitleCreated = new EventEmitter<{ title: string }>();
  bookTitle: string;
 

  onAddTitle() {
    this.bookTitleCreated.emit({ title: this.bookTitle });
  }
}


