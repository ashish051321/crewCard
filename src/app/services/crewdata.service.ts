import { Injectable } from '@angular/core';

@Injectable()
export class CrewdataService {

   mycrew:any;

  constructor() { 
    this.mycrew =  {
		  "name": "Jessica Woods",
		  "cmtype": "AO Crew Member",
		  "title": "Gate Agent",
		  "years": "7",
		  "flightsserved": "3252"
		};

  }

  getCrewInfo(){
    return  this.mycrew;
  }//ends


  incrementFlightServed(){

  }


}
