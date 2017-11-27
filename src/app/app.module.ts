import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';



// Redux:
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { store } from './store/store';
import { IAppState } from './store/app-state.type';
// import { store } from './storeTwo/store';
// import { IAppState } from './storeTwo/app-state.type';

import { ExampleTwoComponent } from './example-two/example-two.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    ExampleTwoComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [ExampleTwoComponent]
})
// export class AppModule { 
//   constructor(ngRedux: NgRedux<IAppState>) {
//     ngRedux.provideStore(store);
//   }

export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }



}
