import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

export const firebaseConfig = {
  apiKey: 'AIzaSyADI1rEIt6NE9yJIv5UpAlRHtW2mphcQp8',
  authDomain: 'todolist-9b4a6.firebaseapp.com',
  databaseURL: 'https://todolist-9b4a6.firebaseio.com',
  projectId: 'todolist-9b4a6',
  storageBucket: 'todolist-9b4a6.appspot.com',
  messagingSenderId: '856882024763',
  appId: '1:856882024763:web:3ee44dbe5bbe407818a71e',
  measurementId: 'G-D4VSTVJYMY'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
