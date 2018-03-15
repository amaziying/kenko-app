import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProvider } from '../../providers/user/user';

import * as _ from 'lodash';

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

const url = 'http://flask-env.svnymeriyr.us-east-1.elasticbeanstalk.com'

@Injectable()
export class RecommendationProvider {
  savedRecommendations: Array<SavedRecommendation> = []
  recommendations: Array<Recommendation> = []
  disliked: Set<string> = new Set([]);
  liked: Set<string> = new Set([]);

  insights: Array<Insight> = []

  constructor(public http: HttpClient, private user: UserProvider) {
    // this.lookup()
  }

  lookup() {
    this.http.get(url + '/api/ss_summary/' + this.user.user.user_id  + '/1')
      .subscribe((data: any) => {
        if (data) {
          this.insights = data
        }
      }, (error) => {
        console.log(error)
      })

    this.http.get(url + '/api/recipes/' + this.user.user.user_id  + '/7')
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
    // Unlike is not persisted here
    const idx = _.findIndex(this.savedRecommendations, r => r.uri === rec.uri)
    this.savedRecommendations.splice(idx, 1)
  }

  saveRec(rec: SavedRecommendation) {
    this.http.post(url + '/api/save_recipe/' + this.user.user.user_id, rec)
      .subscribe((data) => {
        console.log('saved rec!')
      }, (error) => {
        console.log('Error while saving rec:', error)
      })
  }

  getRecommendation() {
    return _.first(this.recommendations.filter(rec => !(this.liked.has(rec.url) || this.disliked.has(rec.url))))
  }

}
