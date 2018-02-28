import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddMealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-meal',
  templateUrl: 'add-meal.html',
})
export class AddMealPage {
  meal: { image: string, title: string, ingredients: Array<{name: string, serving: number}>};
  title: string;
  image: string;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.meal = navParams.get('meal');

    this.title = this.meal.title;
    this.image = this.meal.image;
  }

  close() {
    this.viewCtrl.dismiss({ save: false});
  }

  save() {
    this.meal.image = this.image;
    this.meal.title = this.title;
    this.viewCtrl.dismiss({ save: true });
  }

}
