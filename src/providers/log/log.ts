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
      return Promise.reject('No date for today')
    }

    day[session] = meal
    console.log(day)

    return new Promise((resolve, reject) => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.post('http://flask-env.svnymeriyr.us-east-1.elasticbeanstalk.com/api/log/' + this.user.uuid, day)
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          resolve(day);
        }, error => {
          console.log(error)
          reject(error)
        });
    });
  }

}
