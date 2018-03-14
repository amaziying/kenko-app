import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import * as _ from 'lodash';

import { RecommendationProvider } from '../../providers/recommendation/recommendation';

/**
 * Generated class for the FavouritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-favourite',
  templateUrl: 'favourite.html',
})
export class FavouritePage {
  showFavourites = false

  categoryMapping = {
    'veg': 'Vegetables',
    'fru': 'Fruits',
    'milkalt': 'Milk & Alternatives',
    'meatalt': 'Meat & Alternatives',
    'grain': 'Grains',
    'other': 'Other'
  }

  constructor(public navCtrl: NavController, public iab: InAppBrowser, public recs: RecommendationProvider) {
  }

  getDeficientFoodGroups() {
    return _(this.recs.insights)
      .filter(o => o.expected > o.consumed)
      .map(o => o.category)
      .value()
  }

  toListSentence(strings) {
    if (!strings.length) {
      return '';
    }
    return _(strings).map(s => this.categoryMapping[s].toLowerCase()).value().join(', ')
  }

  openLink(link: string) {
    this.iab.create(link, '_blank', 'location=yes');
  }

  like(rec: { title: string, type: string, liked: boolean, link: string }) {
    rec.liked = !rec.liked;
  }

  toggleFavourites(show) {
    this.showFavourites = show
  }

  ionViewWillEnter() {
    this.recs.lookup()
  }

}
