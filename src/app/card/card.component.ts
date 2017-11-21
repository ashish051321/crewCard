import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Rx';
import { Store } from 'redux';
import { NgRedux, dispatch, select } from '@angular-redux/store';
import { IAppState } from '../store/app-state.type';


// import { store } from '../store/store';



//select store

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
//  @select((s) => {return s.counter}) count;
// @select() count;


  count:any;
  crewProfile: any;
  // myDataObser:Observable<IAppState>;
  myDataObser:any;

  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  ngOnInit() {
    this.crewProfile = {
      "name": "Jessica Woods",
      "cmtype": "AO Crew Member",
      "title": "Gate Agent",
      "years": "7",
      "flightsserved": "3252"
    };;

    this.myDataObser = this.ngRedux.select().subscribe(
      (data:any) => {
          // this.count= this.ngRedux.select();
          console.log(data);
          this.count = data.counter;
      }
    );
  }

  ngOnDestroy(){
    this.myDataObser.unsubscribe();
  }

  incrementFlights()
  {
    this.ngRedux.dispatch({type:"INCREMENT"});
  }

}
