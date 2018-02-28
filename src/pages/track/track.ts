import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { AddMealPage } from '../add-meal/add-meal';
import { HomePage } from '../home/home';


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

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    this.meal = {
      image: '',
      title: '',
      ingredients: []
    };

    let modal = this.modalCtrl.create(AddMealPage, { meal: this.meal });
    modal.onDidDismiss(data => {
      if (data.save) {

      } else {
        this.navCtrl.parent.select(0);
      }
    });
    modal.present();    
  }

}
