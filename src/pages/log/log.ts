import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LogProvider } from '../../providers/log/log';

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

  constructor(public navCtrl: NavController, public log: LogProvider) {
  }
}
