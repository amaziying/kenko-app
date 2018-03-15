import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment'

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

  totalItems: Array<string> = []

  constructor(public http: HttpClient, public user: UserProvider) {
    this.http.get('http://flask-env.svnymeriyr.us-east-1.elasticbeanstalk.com/api/food_name_retrieve')
      .subscribe((data: Array<string>) => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.totalItems = _(data).sortBy().uniqBy().value()
      }, error => {
        console.log(error)
      });
  }

  lookup() {
    return new Promise((resolve, reject) => {
      this.http.get('http://flask-env.svnymeriyr.us-east-1.elasticbeanstalk.com/api/log_retrieve/' + this.user.user.user_id + '/5')
        .subscribe((data: any) => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.pastMeals = data
          resolve(this.pastMeals)
        }, error => {
          reject(error)
        });
    })
  }

  addToday() {
    const date = this.today()
    if (!this.pastMeals.length || !_.find(this.pastMeals, (day) => day.date === date)) {
      this.pastMeals.unshift({ date })
    }
  }

  addDay(date, i) {
    this.pastMeals.splice(i + 1, 0, { date })
  }

  getDate(date) {
    return _.find(this.pastMeals, (day) => day.date === date)
  }

  today() {
    return moment().format('YYYY-MM-DD')
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
      this.http.post('http://flask-env.svnymeriyr.us-east-1.elasticbeanstalk.com/api/log/' + this.user.user.user_id, day)
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
