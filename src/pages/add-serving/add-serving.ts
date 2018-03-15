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

  assets = [
    {
      name: 'Grains',
      file: 'assets/imgs/grains.png',
      show: false
    },
    {
      name: 'Fruits & Vegetables',
      file: 'assets/imgs/fruits_and_vegs.png',
      show: false
    },
    {
      name: 'Meat & Alternatives',
      file: 'assets/imgs/meat_and_alts.png',
      show: false
    },
    {
      name: 'Milk & Alternatives',
      file: 'assets/imgs/milk_and_alts.png',
      show: false
    }
  ]

  constructor(public viewCtrl: ViewController, public app: App, public mealEdit: MealEditProvider) {
    const ingredient = mealEdit.getIngredient()
    const serving = ingredient && ingredient.serving
    this.serving = serving > 0 ? serving.toString() : ''
  }

  close() {
    this.mealEdit.removeIngredient(this.mealEdit.currentIngredient)
    this.mealEdit.currentIngredient = ''
    this.viewCtrl.dismiss();
  }

  save() {
    const serving = this.serving ? parseFloat(this.serving) : -1

    const ingredient = this.mealEdit.getIngredient()
    ingredient.serving = serving

    this.mealEdit.currentIngredient = ''
    this.viewCtrl.dismiss()
  }

}
