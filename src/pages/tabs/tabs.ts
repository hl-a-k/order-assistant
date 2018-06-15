import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {Events} from "ionic-angular";
import {MePage} from "../me/me";
import {OrderPage} from "../order/order";
import {ChathistoryPage} from "../chathistory/chathistory";
import {ContactPage} from "../contact/contact";
import {FindPage} from "../find/find";
import {ChatPage} from "../chat/chat";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  meRoot = MePage;
  orderRoot = OrderPage;
  chatRoot = ChathistoryPage;
  contactPage = ContactPage;
  findRoot = FindPage;

  constructor(private nav: NavController,
              private events: Events) {
    events.subscribe('openNavDetailsPage', item => {
      this.openNavDetailsPage(item);
    })


  }
  openNavDetailsPage(item) {
    this.nav.push(ChatPage, { item: item });
  }


}
