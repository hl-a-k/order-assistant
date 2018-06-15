import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ChatPage} from "../chat/chat";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items = [
    {
      name: '周文瀚',
      portrait:'/assets/imgs/sea.jpg'
    },
    {
      name: '王振琼',
      portrait:'/assets/imgs/p1.jpeg'
    },
    {
      name: '韩伟勇',
      portrait:'/assets/imgs/p2.jpeg'
    },
    {
      name: '张三',
      portrait:'/assets/imgs/pe.png'
    },
    {
      name: '李四',
      portrait:'/assets/imgs/p4.jpeg'
    },
    {
      name: '王五',
      portrait:'/assets/imgs/p5.jpeg'
    },
    {
      name: '赵六',
      portrait:'/assets/imgs/p6.jpg'
    },
  ]
  constructor(private navCtl: NavController) {

  }

  openNavDetailsPage(item) {
    this.navCtl.push(ChatPage, item)
  }

}
