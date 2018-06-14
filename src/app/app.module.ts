import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {MePage} from "../pages/me/me";
import {ChatPage} from "../pages/chat/chat";
import {FindPage} from "../pages/find/find";
import {OrderPage} from "../pages/order/order";
import {ContactPage} from "../pages/contact/contact";

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MePage,
    ContactPage,
    FindPage,
    TabsPage,
    ChatPage,
    OrderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MePage,
    ContactPage,
    FindPage,
    TabsPage,
    ChatPage,
    OrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
