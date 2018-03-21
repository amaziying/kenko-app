import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Chart } from 'chart.js';

import * as _ from 'lodash';
import * as moment from 'moment';

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
  showRecommendations = false

  categoryMapping = {
    'veg': 'Vegetables',
    'fru': 'Fruits',
    'milkalt': 'Milk & Alternatives',
    'meatalt': 'Meat & Alternatives',
    'grain': 'Grains',
    'other': 'Other'
  }

  @ViewChild('lineCanvas') lineCanvas
  lineChart: any

  currentGraphView: number = 0

  constructor(public navCtrl: NavController, public iab: InAppBrowser, public recs: RecommendationProvider) {
  }

  toggleTabs() {
    this.showRecommendations = !this.showRecommendations
  }

  getDeficientFoodGroups() {
    return _(this.recs.insights)
      .filter(o => o.expected > o.consumed)
      .map(o => o.category)
      .value()
  }

  regenerateGraph() {
    const currentDataSet = this.recs.history[this.currentGraphView]
    if (!currentDataSet) {
      return
    }

    setTimeout(() => {
      this.lineChart = new Chart(this.lineCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: currentDataSet.historicalData.map(data => moment(data.date).format('MMM. D')),
          datasets: [{
            backgroundColor: 'rgba(147, 191, 210, 0.5)',
            borderColor: '#93BFD2',
            data: currentDataSet.historicalData.map(data => data.consumed),
            label: 'Consumed servings',
            fill: 'origin'
          }, {
            backgroundColor: 'rgba(237, 205, 135, 0.5)',
            borderColor: '#EDCD87',
            data: _.fill(Array(currentDataSet.historicalData.length), currentDataSet.expected),
            label: 'Suggested servings',
            fill: 'origin'
          }]
        },
        options: {
          title: {
            display: false
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              boxWidth: 20
            }
          }
        }
      }, 500);
    })

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

  ionViewWillEnter() {
    this.recs.lookup()
    this.recs.fetchSummary().then(success => {
      this.regenerateGraph()
    }, error => {
      console.log(error)
    })
  }

}
