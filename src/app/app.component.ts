import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent {
  

   isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
   constructor(private breakpointObserver: BreakpointObserver) {}

   // options = {
   //   value:{
   //     fixed:true,
   //     top:0,
   //     bottom:0
   //   }
   // }
//     max     = 1;
//     current = 0;
//     title ="hello";
//     inval;
//
//     /// Start the timer
//     start() {
//       // const interval = Observable.interval(100);
//       //
//       //     interval
//       //       .takeWhile(_ => !this.isFinished )
//       //       .do(i => this.current += 0.1)
//       //       .subscribe();
//       //
//       //
//     this.inval  =   setInterval(()=>{
//           this.current += 0.1
//         },100)
//
//     }
//
//      /// finish timer
//     finish() {
//       this.current = this.max;
//       clearInterval(this.inval);
//     }
//
//     /// reset timer
//     reset() {
//       this.current = 0;
//       clearInterval(this.inval);
//     }
//
//     /// Getters to prevent NaN errors
//
//     get maxVal() {
//       return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
//     }
//
//     get currentVal() {
//       return isNaN(this.current) || this.current < 0 ? 0 : this.current;
//     }
//
//     get isFinished() {
//       return this.currentVal >= this.maxVal;
//     }
}
