import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ArticlesProvider } from '../../providers/articles/articles';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  recommendations: Array<{ text: string, type: string, image: string }>;
  goal: number;

  constructor(public navCtrl: NavController, public iab: InAppBrowser, public articles: ArticlesProvider) {
    this.recommendations = [
      {
        text: "Consume more servings of vegetables",
        type: "SERVING SIZE",
        image: "",
      },
      {
        text: "Substitute pancakes with carrot cake",
        type: "SUBSTITUTION",
        image: "",
      },
    ];
    this.goal = 0;
  }

  openLink(link: string) {
    this.iab.create(link, '_blank', 'location=yes');
  }

  like(rec: { title: string, type: string, liked: boolean, link: string }) {
    rec.liked = !rec.liked;
  }

  isGoal(idx: number) {
    return this.goal == idx;
  }

  setGoal(idx: number) {
    this.goal = idx;
  }
}
