import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {MePage} from "../pages/me/me";
import {ChathistoryPage} from "../pages/chathistory/chathistory";
import {FindPage} from "../pages/find/find";
import {OrderPage} from "../pages/order/order";
import {ContactPage} from "../pages/contact/contact";
import {ChatPage} from "../pages/chat/chat";

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RelativeTimePipe} from "../pipes/relative-time/relative-time";
import { BackgroundPipe} from "../pipes/background/background";
import {KeyboardAttachDirective} from "../directives/keyboard-attach/keyboard-attach";
import {MyModeDirective} from "../directives/my-mode/my-mode";

import {EmojiPickerComponent} from "../components/emoji-picker/emoji-picker";
import {interpolateParams} from "@angular/animations/browser/src/util";

import {ChatProvider} from "../providers/chat/chat";
import {HttpProvider} from "../providers/common/http";
import { FileProvider } from '../providers/common/file';

import { HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/camera';
import { ImagePicker} from '@ionic-native/image-picker';
import { Keyboard } from '@ionic-native/keyboard';


@NgModule({
  declarations: [
    MyApp,
    MePage,
    ContactPage,
    FindPage,
    ChatPage,
    TabsPage,
    ChathistoryPage,
    OrderPage,
    RelativeTimePipe,
    BackgroundPipe,
    KeyboardAttachDirective,
    MyModeDirective,
    EmojiPickerComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MePage,
    ContactPage,
    FindPage,
    ChatPage,
    TabsPage,
    ChathistoryPage,
    OrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ChatProvider,
    HttpProvider,
    FileProvider,
    Keyboard,
    Camera,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
