import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	recommendations: Array<{ title: string, type: string, liked: boolean, link: string }>;
	like: Function;
	toggleFavourites: Function;
	showFavourites: Boolean;

  constructor(public navCtrl: NavController) {
  	let that = this;
  	this.recommendations = [
  		{
  			title: "What is diabetes?",
  			type: "Article from Diabetes Canada",
  			liked: false,
  			link: "xyz.com"
  		},
  		{
  			title: "Roasting bell peppers",
  			type: "Recipe",
  			liked: false,
  			link: "xyz.com"
  		}
  	];
  	this.showFavourites = false;

  	this.toggleFavourites = function(showFavourites) {
  		that.showFavourites = showFavourites;
  	}

  	this.like = function(rec) {
  		rec.liked = !rec.liked;
  	}
  }

}
