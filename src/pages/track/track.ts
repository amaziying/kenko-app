import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

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

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidEnter(){
    this.navCtrl.push(AddMealPage)
  }
}
