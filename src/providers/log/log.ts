import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Meal } from '../../models/Meal'
import { UserProvider} from '../../providers/user/user'

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

  constructor(public http: HttpClient, public user: UserProvider) {
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
    const month = (now.getMonth() + 1).toString()
    const day = now.getDate().toString()
    return [
      now.getFullYear().toString(),
      month.length === 1 ? '0' + month : month,
      day.length === 1 ? '0' + day : day
    ].join('-')
  }

  saveMeal(date, session, meal: Meal) {
    const day = this.getDate(date)

    if (!day) {
      return false
    }

    day[session] = meal
    this.http.post('/api/log/' + this.user.uuid, day)
    return true
  }

}
