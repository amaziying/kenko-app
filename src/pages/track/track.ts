import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddMealPage } from '../add-meal/add-meal';


/**
 * Generated class for the TrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-track',
  templateUrl: 'track.html',
})
export class TrackPage {
  meal: { image: string, ingredients: Array<{name: string, serving: number}>, title: string};

  constructor(public navCtrl: NavController) {}

  ionViewDidEnter(){
    this.navCtrl.push(AddMealPage)
  }
}
