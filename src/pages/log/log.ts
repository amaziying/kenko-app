import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LogProvider } from '../../providers/log/log';
import { MealEditProvider } from '../../providers/meal-edit/meal-edit';
import { AddIngredientsPage } from '../add-ingredients/add-ingredients';

import * as moment from 'moment';

/**
 * Generated class for the LogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-log',
  templateUrl: 'log.html',
})
export class LogPage {
  sessions: Array<string> = ['breakfast', 'lunch', 'dinner', 'snack']
  moment = moment

  constructor(public navCtrl: NavController, public mealEdit: MealEditProvider, public log: LogProvider) {}

  addLog(session, date) {
    const log = this.log.getDate(date)
    if (log[session]) {
      this.mealEdit.resetState(date, session, log[session].image, log[session].ingredients)
    } else {
      this.mealEdit.resetState(date, session)
    }
    this.navCtrl.push(AddIngredientsPage)
  }

  previousDay(i) {
    return moment(this.log.pastMeals[i].date).subtract(moment.duration(1, 'd')).format('YYYY-MM-DD')
  }

  possiblePreviousDay(i) {
    if (this.log.pastMeals.length > i + 1 &&
        this.log.getDate(this.previousDay(i))) {
      return false
    } else {
      return true
    }
  }

  addPreviousDay(i) {
    this.log.addDay(this.previousDay(i), i)
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  ionViewWillEnter() {
    this.log.addToday()
  }
}
