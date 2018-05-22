import { Directive, ElementRef, Input, HostListener, Output } from '@angular/core';
@Directive({
  selector: '[appResponsiveCards]'
})
export class ResponsiveCardsDirective {
 @Input() col;

 @HostListener('window:resize', ['$event'])
 onResize(event) {

   console.log(this.col)

     if (event.target.innerWidth < 950) {
       this.col = 2;
     }

     if (event.target.innerWidth > 950) {
       this.col = 3;
     }

     if (event.target.innerWidth < 750) {
       this.col = 1;
     }
 }

 constructor(el: ElementRef) {

 }

}
