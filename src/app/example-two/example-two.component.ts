import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Store } from 'redux';
import { NgRedux, dispatch, select } from '@angular-redux/store';
import { IAppState } from '../store/app-state.type';


@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.css']
})
export class ExampleTwoComponent implements OnInit {

  @select('count') mycount;


// {
//   crewCard:{
//     count:100
//   }
// }


  constructor(private ngRedux: NgRedux<IAppState>) {
   }
  // myCount;any;

  // myCount:number;
  ngOnInit() {
    // this.ngRedux.select().subscribe((x:any) => {
    //   this.myCount = x.count;
    //   // console.log("mil gaya "+this.myCount);
    // });
  }//ngOnInit 

plus(){
  this.ngRedux.dispatch({type:"INCREMENT"});
}

minus(){
  this.ngRedux.dispatch({type:"DECREMENT"});
}

}
