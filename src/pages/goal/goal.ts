import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the GoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-goal',
  templateUrl: 'goal.html',
})
export class GoalPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalPage');
  }

}
