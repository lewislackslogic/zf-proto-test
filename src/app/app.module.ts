import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FAQsPage } from '../pages/faqs/faqs';
import { LoginPage } from '../pages/login/login';
import { CycletoworkPage } from '../pages/cycletowork/cycletowork';
import { TalentIncentivePage } from '../pages/talent-incentive/talent-incentive';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsfeedPage } from '../pages/newsfeed/newsfeed';

@NgModule({
  declarations: [
    MyApp,
    NewsfeedPage,
    ContactPage,
    HomePage,
    TabsPage,
    FAQsPage,
    LoginPage,
    CycletoworkPage,
    TalentIncentivePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsfeedPage,
    ContactPage,
    HomePage,
    TabsPage,
    FAQsPage,
    LoginPage,
    CycletoworkPage,
    TalentIncentivePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
