import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

import { FirebaseService } from './services/firebase.service';


// Must export the config
export const firebaseConfig = {
   apiKey: "AIzaSyBnLCRXWklJcq1zmvquqP-R7dKPc-qBsRg",
    authDomain: "bussinescontacts-30b03.firebaseapp.com",
    databaseURL: "https://bussinescontacts-30b03.firebaseio.com",
    storageBucket: "bussinescontacts-30b03.appspot.com",
    messagingSenderId: "474678069066"
  };



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
