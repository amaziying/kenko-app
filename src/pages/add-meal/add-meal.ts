import { Component } from '@angular/core';
import { App, NavParams, ViewController } from 'ionic-angular';

import { MealEditProvider } from '../../providers/meal-edit/meal-edit';
import { AddIngredientsPage } from '../add-ingredients/add-ingredients';
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
  title: string;
  image: string;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public app: App, public mealEdit: MealEditProvider) {
    this.title = mealEdit.title
    this.image = mealEdit.image
  }

  close() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.mealEdit.addMeal(this.title, this.image)
    this.app.getRootNav().push(AddIngredientsPage)
  }

}
