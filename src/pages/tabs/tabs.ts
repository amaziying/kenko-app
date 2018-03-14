import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FavouritePage } from '../favourite/favourite';
import { LogPage } from '../log/log';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTab = HomePage;
  recommendationsTab = FavouritePage;
  logTab = LogPage;

  constructor() {
  }
}
