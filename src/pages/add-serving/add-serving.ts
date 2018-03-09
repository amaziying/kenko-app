import { Component } from '@angular/core';
import { App, ViewController } from 'ionic-angular';

import { MealEditProvider } from '../../providers/meal-edit/meal-edit';

/**
 * Generated class for the AddMealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add-serving',
  templateUrl: 'add-serving.html',
})
export class AddServingPage {
  serving: string;

  constructor(public viewCtrl: ViewController, public app: App, public mealEdit: MealEditProvider) {
    const ingredient = mealEdit.getIngredient()
    const serving = ingredient && ingredient.serving
    this.serving = serving ? serving.toString() : ''
  }

  close() {
    this.mealEdit.removeIngredient(this.mealEdit.currentIngredient)
    this.mealEdit.currentIngredient = ''
    this.viewCtrl.dismiss();
  }

  save() {
    if (this.serving) {
      const ingredient = this.mealEdit.getIngredient()
      ingredient.serving = parseFloat(this.serving)

      this.mealEdit.currentIngredient = ''
      this.viewCtrl.dismiss()
    }
    
  }

}
