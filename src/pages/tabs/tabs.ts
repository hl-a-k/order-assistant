import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {Events} from "ionic-angular";
import {MePage} from "../me/me";
import {OrderPage} from "../order/order";
import {ChatPage} from "../chat/chat";
import {ContactPage} from "../contact/contact";
import {FindPage} from "../find/find";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  meRoot = MePage;
  orderRoot = OrderPage;
  chatRoot = ChatPage;
  contactPage = ContactPage;
  findRoot = FindPage;

  constructor(public nav: NavController,
              public events: Events) {
    events.subscribe('hihi', item => {
      this.openNavDetailsPage(item);
    })


  }
  openNavDetailsPage(item) {
    // this.nav.push(NavigationDetailsPage, { item: item });
  }


}
