import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { FavouritePage } from '../favourite/favourite';
import { LogPage } from '../log/log';
import { LoginPage } from '../login/login';

import { UserProvider } from '../../providers/user/user';

import * as _ from 'lodash';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTab = HomePage;
  recommendationsTab = FavouritePage;
  logTab = LogPage;

  constructor(user: UserProvider, modalCtrl: ModalController) {
    console.log(user.user)
    if (_.isEmpty(user.user)) {
      modalCtrl.create(LoginPage).present()
    }
  }
}
