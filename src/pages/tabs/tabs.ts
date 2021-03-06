import { Component } from '@angular/core';

import {MePage} from "../me/me";
import {OrderPage} from "../order/order";
import {ChathistoryPage} from "../chathistory/chathistory";
import {ContactPage} from "../contact/contact";
import {FindPage} from "../find/find";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  meRoot = MePage;
  orderRoot = OrderPage;
  chatRoot = ChathistoryPage;
  contactPage = ContactPage;
  findRoot = FindPage;

  constructor() {

  }

}
