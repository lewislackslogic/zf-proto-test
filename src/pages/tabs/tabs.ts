import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FAQsPage } from '../faqs/faqs';
import { NewsfeedPage } from '../newsfeed/newsfeed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NewsfeedPage;
  tab3Root = ContactPage;
  tab4Root = FAQsPage;

  constructor() {

  }
}
