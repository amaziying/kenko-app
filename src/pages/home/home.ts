import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TestServiceProvider } from '../../providers/test-service/test-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TestServiceProvider]
})
export class HomePage {

  recommendations: Array<{ text: string, type: string, image: string }>;
  articles: Array<{ readTime: number, title: string, source: string, liked: boolean, link: string }>;
  showFavourites: Boolean;
  data: Object;
  goal: number;

  constructor(public navCtrl: NavController, public iab: InAppBrowser, public test: TestServiceProvider) {
    this.articles = [
      {
        title: "What is Prediabetes?",
        source: "Diabetes Canada",
        liked: false,
        link: "http://www.diabetes.ca/about-diabetes/prediabetes",
        readTime: 3,
      },
      {
        title: "Living with Prediabetes",
        source: "Diabetes Canada",
        liked: false,
        link: "http://www.diabetes.ca/diabetes-and-you/living-with-prediabetes",
        readTime: 6,
      }
    ];
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
    this.showFavourites = false;
    this.test.load().then(data => {
      this.data = data;
    });
  }

  toggleFavourites(showFavourites: Boolean) {
    this.showFavourites = showFavourites;
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
