import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Meal } from '../../models/Meal'

/*
  Generated class for the MealEditProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MealEditProvider {
  date: string = ''
  title: string = ''
  image: string = ''
  ingredients: Array<{name: string, serving: any}> = []

  currentIngredient: string

  constructor() {}

  resetState(date, session, image = '', ingredients = []) {
    this.date = date
    this.title = session
    this.image = image
    this.ingredients = ingredients
  }

  addImage(image) {
    this.image = image
  }

  addIngredient(name) {
    this.ingredients.push({ name, serving: null })
    this.currentIngredient = name
  }

  removeIngredient(name) {
    const idx = _.findIndex(this.ingredients, ingredient => ingredient.name === name)
    if (idx > -1) {
      this.ingredients.splice(idx, 1)
    }
  }

  getIngredient() {
    return _.find(this.ingredients, (ingredient) => ingredient.name === this.currentIngredient)
  }

  updateServing(serving) {
    const ingredient = _.find(this.ingredients, (ingredient) => ingredient.name === this.currentIngredient)
    if (ingredient) {
      ingredient.serving = serving
      return true
    }
    return false
  }

  getMeal() {
    const { title, image, ingredients } = this
    const meal: Meal = { title, image, ingredients }
    return meal
  }

}
