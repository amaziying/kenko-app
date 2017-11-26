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
  			description: "Substitute pancakes with carrot cakes",
  			link: "xyz.com"
  		},
  		{
  			description: "Reduce consumption of fruit juices and smoothies",
  			link: "xyz.com"
  		},
      {
        description: "Substitute grapefruit with apricot and apple fruit strips",
        link: "xyz.com"
      }
  	]
  }

}
