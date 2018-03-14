import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

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

  reasonMapping = {
    'veg': 'Because you should have more vegetables',
    'meat': 'Because you should have more meat'
  }

  categoryMapping = {
    'veg': 'Vegetables',
    'fru': 'Fruits',
    'milkalt': 'Milk & Alternatives',
    'meatalt': 'Milk & Alternatives',
    'grain': 'Grains',
    'other': 'Other'
  }

  constructor(public navCtrl: NavController, public iab: InAppBrowser, public recs: RecommendationProvider) {
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
