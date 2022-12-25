import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomdir]'
})
export class CustomdirDirective {

  constructor(private ref:ElementRef) { 
    console.log('custom directive applied');
    ref.nativeElement.style.backgroundColor='orange';
    // ref.nativeElement.style.display='none';
  }

}
