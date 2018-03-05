import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

/*
  Generated class for the MealEditProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MealEditProvider {

  title: string
  image: string
  ingredients: Array<{name: string, serving: number}>

  currentIngredient: string

  constructor(public http: HttpClient) {
    this.resetState()
  }

  resetState() {
    this.title = ''
    this.image = ''
    this.ingredients = []
  }

  addMeal(title, image) {
    this.title = title
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

  setCurrentIngredient(name) {
    this.currentIngredient = name
  }

  updateServing(serving) {
    const ingredient = _.find(this.ingredients, (ingredient) => ingredient.name === this.currentIngredient)
    if (ingredient) {
      ingredient.serving = serving
      return true
    }
    return false
  }

}
