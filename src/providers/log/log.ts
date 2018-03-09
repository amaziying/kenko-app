import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Meal } from '../../models/Meal'

/*
  Generated class for the LogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class LogProvider {
  pastMeals: Array<{
    breakfast?: Meal,
    lunch?: Meal,
    dinner?: Meal,
    snack?: Meal,
    date: string
  }> = []

  constructor(public http: HttpClient) {
    this.addToday()
  }

  addToday() {
    const date = this.today()
    if (!this.pastMeals.length || this.pastMeals[0].date !== date) {
      this.pastMeals.unshift({ date })
    }
  }

  getDate(date) {
    return _.find(this.pastMeals, (day) => day.date === date)
  }

  today() {
    const now = new Date()
    return [
      now.getFullYear().toString(),
      (now.getMonth() + 1).toString().padStart(2, '0'),
      now.getDate().toString().padStart(2, '0')
    ].join('-')
  }

  saveMeal(date, session, meal: Meal) {
    const day = this.getDate(date)

    if (!day) {
      return false
    }
    day[session] = meal
    return true
  }

}
