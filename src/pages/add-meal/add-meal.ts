import { Component } from '@angular/core';
import { App, ViewController } from 'ionic-angular';

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

  constructor(public viewCtrl: ViewController, public app: App, public mealEdit: MealEditProvider) {
    
  }

  ionViewDidEnter() {
    this.title = this.mealEdit.title
    this.image = this.mealEdit.image
  }

  close() {
    this.viewCtrl.dismiss();
    this.app.getRootNav().getActiveChildNav().select(0)
  }

  save() {
    if (this.title) {
      this.mealEdit.addMeal(this.title, this.image)
      this.app.getRootNav().push(AddIngredientsPage)
    }
  }

}
