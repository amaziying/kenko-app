import { Component } from '@angular/core';
import { App, ViewController } from 'ionic-angular';

import { MealEditProvider } from '../../providers/meal-edit/meal-edit';
import { LogProvider } from '../../providers/log/log';
import { AddServingPage } from '../add-serving/add-serving';

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
    this.items = this.log.totalItems
  }

  isSearchMode() {
    const hasSearchTerm = !!this.searchInput
    const hasIngredients = this.mealEdit.ingredients.length > 0

    return hasSearchTerm || !hasIngredients
  }

  getItems(val) {
    // Reset items back to all of the items
    this.initializeItems();

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      // Also sort by index at which the string was found. The earlier it's found, the more relevant it is.
      this.items = _(this.items)
        .map((item: string) => ({ item, indexFound: item.toLowerCase().indexOf(val.toLowerCase()) }))
        .filter(({ item, indexFound }) => indexFound > -1 && _.findIndex(this.mealEdit.ingredients, i => i.name === item) === -1)
        .sortBy(o => o.indexFound)
        .map(o => o.item)
        .value()
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
