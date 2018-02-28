import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FavouritePage } from '../favourite/favourite';
import { TrackPage } from '../track/track';
import { LogPage } from '../log/log';
import { GoalPage } from '../goal/goal';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTab = HomePage;
  favouriteTab = FavouritePage;
  trackTab = TrackPage;
  logTab = LogPage;
  goalTab = GoalPage;

  constructor() {

  }
}
