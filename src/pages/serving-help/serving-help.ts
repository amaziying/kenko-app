import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ServingHelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-serving-help',
  templateUrl: 'serving-help.html',
})
export class ServingHelpPage {

  assets = [
    {
      name: 'Grains',
      file: 'assets/imgs/grains.png',
      show: false
    },
    {
      name: 'Fruits & Vegetables',
      file: 'assets/imgs/fruits_and_vegs.png',
      show: false
    },
    {
      name: 'Meat & Alternatives',
      file: 'assets/imgs/meat_and_alts.png',
      show: false
    },
    {
      name: 'Milk & Alternatives',
      file: 'assets/imgs/milk_and_alts.png',
      show: false
    },
    {
      name: 'Fats',
      file: 'assets/imgs/fats.png',
      show: false
    }
  ]

  constructor(public view: ViewController) {}
  
  close() {
    this.view.dismiss()
  }

}
