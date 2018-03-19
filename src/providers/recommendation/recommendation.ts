import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProvider } from '../../providers/user/user';

import * as _ from 'lodash';
import * as moment from 'moment';

/*
  Generated class for the RecommendationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

interface Recommendation {
  image: string,
  ingredients: Array<string>,
  label: string,
  reason: string,
  url: string
}

interface SavedRecommendation {
  image: string,
  label: string,
  reason: string,
  uri: string,
  liked: number 
}


interface Insight {
  category: string,
  expected: number,
  consumed: number
}

interface Day {
  date: string,
  consumed: number
}

interface RawTimeSeries {
  category: string,
  count: number,
  historicalData: Array<Day>
}

interface TimeSeries {
  category: string,
  expected: number,
  historicalData: Array<Day>
}


const url = 'http://flask-env.svnymeriyr.us-east-1.elasticbeanstalk.com'

@Injectable()
export class RecommendationProvider {
  savedRecommendations: Array<SavedRecommendation> = []
  recommendations: Array<Recommendation> = []
  disliked: Set<string> = new Set([]);
  liked: Set<string> = new Set([]);

  insights: Array<Insight> = []

  history: Array<TimeSeries> = []


  constructor(public http: HttpClient, private user: UserProvider) {
  }

  lookup() {
    this.http.get(url + '/api/recipes/' + this.user.user.user_id  + '/1')
      .subscribe((data: any) => {
        if (data) {
          this.recommendations = _.flatten(data)
        }
      }, (error) => {
        console.log(error)
      })

    this.http.get(url + '/api/get_saved_recipes/' + this.user.user.user_id)
      .subscribe((data: Array<SavedRecommendation>) => {
        if (data) {
          this.liked = new Set(data.filter(o => o.liked).map(o => o.uri))
          this.disliked = new Set(data.filter(o => !o.liked).map(o => o.uri))

          this.savedRecommendations = data.filter(o => o.liked)
        }
        
      }, (error) => {
        console.log(error)
      })
  }

  fetchSummary() {
    return new Promise((resolve, reject) => {
      this.http.get(url + '/api/ss_summary/' + this.user.user.user_id  + '/1')
        .subscribe((data: any) => {
          this.insights = data
          this.http.get(url + '/api/ss_history_tsgraph/' + this.user.user.user_id + '/7')
            .subscribe((data: Array<RawTimeSeries>) => {
              this.processTimeSeries(data)
              resolve()
            }, (error) => {
              reject(error)
            })
        }, (error) => {
          reject(error)
        })
    })
  }

  processTimeSeries(data: Array<RawTimeSeries>) {
    if (data.filter(d => d.count > 1).length === 0) {
      return
    }
    const past7Days = _.range(6, -1, -1).map((v) => moment().subtract(v, 'd').format('YYYY-MM-DD'))
    this.history = this.insights.map(({ expected, category }) => {
      return {
        category,
        expected,
        historicalData: past7Days.map(date => {
          const categoryData = _.find(data, d => d.category === category || (d.category === 'NO_CAT' && category === 'other'))
          const dayData = categoryData ? _.find(categoryData.historicalData, d => d.date === date) : undefined
          return {
            date,
            consumed: dayData ? dayData.consumed : 0
          }
        })
      }
    })
  }

  dislike(rec: Recommendation) {
    const savedRec = {
      uri: rec.url,
      image: rec.image,
      label: rec.label,
      reason: rec.reason,
      liked: 0
    }
    this.disliked.add(rec.url)
    this.saveRec(savedRec)
    this.recommendations.shift()
  }

  like(rec: Recommendation) {
    const savedRec = {
      uri: rec.url,
      image: rec.image,
      label: rec.label,
      reason: rec.reason,
      liked: 1
    }
    this.liked.add(rec.url)
    this.savedRecommendations.unshift(savedRec)
    this.saveRec(savedRec)
    this.recommendations.shift()
  }

  unlike(rec: SavedRecommendation) {
    const idx = _.findIndex(this.savedRecommendations, r => r.uri === rec.uri)
    this.savedRecommendations.splice(idx, 1)
    this.disliked.add(rec.uri)
    this.saveRec(_.assign(rec, { liked: 0 }))
  }

  saveRec(rec: SavedRecommendation) {
    return new Promise((resolve, reject) => {
      this.http.post(url + '/api/save_recipe/' + this.user.user.user_id, rec)
        .subscribe((data) => {
          resolve(data)
        }, (error) => {
          reject(error)
        })
    })
  }

  getRecommendation() {
    return _.first(this.recommendations.filter(rec => !(this.liked.has(rec.url) || this.disliked.has(rec.url))))
  }

}
