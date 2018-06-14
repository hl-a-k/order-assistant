import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {HomePage, NavigationDetailsPage} from '../home/home';
import {NavController} from "ionic-angular";
import {Events} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public nav: NavController,
              public events: Events) {
    events.subscribe('hihi', item => {
      this.openNavDetailsPage(item);
    })


  }
  openNavDetailsPage(item) {
    this.nav.push(NavigationDetailsPage, { item: item });
  }


}
