import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CycletoworkPage } from '../cycletowork/cycletowork';
import { TalentIncentivePage } from '../talent-incentive/talent-incentive';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string;
  password:string;
  
  constructor(public navCtrl: NavController) {

  }

  login(){
    console.log("Username"+ this.username);
    console.log("Password"+ this.password);
    
  }

  cycleToWork(){
    this.navCtrl.push(CycletoworkPage);
  }

  talentIncentive(){
    this.navCtrl.push(TalentIncentivePage);
  }
}