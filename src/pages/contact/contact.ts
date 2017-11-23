import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	recommendations: Array<{ description: string, link: string }>;

  constructor(public navCtrl: NavController) {
  	this.recommendations = [
  		{
  			description: "Substitute white bread with whole wheat bread",
  			link: "xyz.com"
  		},
  		{
  			description: "Reduce consumption of fruit juices and smoothies",
  			link: "xyz.com"
  		}
  	]
  }

}
