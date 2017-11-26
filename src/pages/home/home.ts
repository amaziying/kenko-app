import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  recommendations: Array<{ title: string, type: string, liked: boolean, link: string }>;
  showFavourites: Boolean;

  constructor(public navCtrl: NavController) {
    this.recommendations = [
      {
        title: "What is Prediabetes?",
        type: "Article from Diabetes Canada",
        liked: false,
        link: "http://www.diabetes.ca/about-diabetes/prediabetes"
      },
      {
        title: "Living with Prediabetes",
        type: "Article from Diabetes Canada",
        liked: false,
        link: "http://www.diabetes.ca/diabetes-and-you/living-with-prediabetes"
      }
    ];
    this.showFavourites = false;
  }

  toggleFavourites(showFavourites: Boolean) {
    this.showFavourites = showFavourites;
  }

  like(rec: { title: string, type: string, liked: boolean, link: string }) {
    rec.liked = !rec.liked;
  }

}
