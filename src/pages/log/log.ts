import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LogProvider } from '../../providers/log/log';
import { MealEditProvider } from '../../providers/meal-edit/meal-edit';
import { AddIngredientsPage } from '../add-ingredients/add-ingredients';

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

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  ionViewWillEnter() {
    this.log.addToday()
  }
}
