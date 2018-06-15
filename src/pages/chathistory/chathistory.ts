import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChatPage} from "../chat/chat";

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chathistory',
  templateUrl: 'chathistory.html',
})
export class ChathistoryPage {

  items = [
    {
      name: '周文瀚',
      portrait:'/assets/imgs/sea.jpg',
      lastTime: '10:27',
      lastMsg: '我再看一下',

    },
    {
      name: '王振琼',
      portrait:'/assets/imgs/p1.jpeg',
      lastTime: '10:27',
      lastMsg: '我再看一下',
    },
    {
      name: '韩伟勇',
      portrait:'/assets/imgs/p2.jpeg',
      lastTime: '10:27',
      lastMsg: '我再看一下',
    },
    {
      name: '张三',
      portrait:'/assets/imgs/pe.png',
      lastTime: '10:27',
      lastMsg: '我再看一下',
    },
    {
      name: '李四',
      portrait:'/assets/imgs/p4.jpeg',
      lastTime: '10:27',
      lastMsg: '我再看一下',
    },
    {
      name: '王五',
      portrait:'/assets/imgs/p5.jpeg',
      lastTime: '10:27',
      lastMsg: '我再看一下',
    },
    {
      name: '赵六',
      portrait:'/assets/imgs/p6.jpg',
      lastTime: '10:27',
      lastMsg: '我再看一下',
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(ChatPage, item);
  }

}
