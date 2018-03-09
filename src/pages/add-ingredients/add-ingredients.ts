import { Component } from '@angular/core';
import { App, ViewController } from 'ionic-angular';

import { MealEditProvider } from '../../providers/meal-edit/meal-edit';
import { LogProvider } from '../../providers/log/log';
import { AddServingPage } from '../add-serving/add-serving';

import data from '../../data/food';

import * as _ from 'lodash';
/**
 * Generated class for the AddMealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add-ingredients',
  templateUrl: 'add-ingredients.html'
})
export class AddIngredientsPage {
  searchInput: string = ''
  items: Array<string> = []

  constructor(public viewCtrl: ViewController, public app: App, public mealEdit: MealEditProvider, public log: LogProvider) {
    this.getItems('')
  }

  initializeItems() {
    this.items = data
  }

  getItems(val) {
    // Reset items back to all of the items
    this.initializeItems();

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1) &&
          _.findIndex(this.mealEdit.ingredients, i => i.name === item) === -1;
      })
    } else if (this.mealEdit.ingredients.length) {
      this.items = []
    }
  }

  editServing(name) {
    this.mealEdit.currentIngredient = name
    this.app.getRootNav().push(AddServingPage)
  }

  selectItem(item) {
    this.mealEdit.addIngredient(item)
    this.searchInput = ''
    this.getItems(this.searchInput)
    this.app.getRootNav().push(AddServingPage)
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  close() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.log.saveMeal(this.mealEdit.date, this.mealEdit.title, this.mealEdit.getMeal())
    this.viewCtrl.dismiss();
  }

}
