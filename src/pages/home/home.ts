import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ArticlesProvider } from '../../providers/articles/articles';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  showFavourites = false

  constructor(public navCtrl: NavController, public iab: InAppBrowser, public articles: ArticlesProvider) {
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

}
