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

interface Insight {
  category: string,
  expected: number,
  consumed: number
}

@Injectable()
export class RecommendationProvider {
  recommendations: Array<Recommendation> = []
  disliked: Set<string> = new Set([]);
  liked: Set<string> = new Set([]);

  insights: Array<Insight> = []

  constructor(public http: HttpClient, private user: UserProvider) {
    // this.lookup()
  }

  lookup() {
    this.http.get('http://flask-env.svnymeriyr.us-east-1.elasticbeanstalk.com/api/ss_summary/' + this.user.user.user_id  + '/4')
      .subscribe((data: any) => {
        this.insights = data
      }, (error) => {
        console.log(error)
      })

    this.http.get('http://flask-env.svnymeriyr.us-east-1.elasticbeanstalk.com/api/recipes/' + this.user.user.user_id  + '/4')
      .subscribe((data: any) => {
        this.recommendations = _.flatten(data)
      }, (error) => {
        console.log(error)
      })
  }

  dislike(label) {
    this.disliked.add(label)
  }

  like(label) {
    if (this.liked.has(label)) {
      this.liked.delete(label)
    } else {
      this.liked.add(label)
    }
  }

  getRecommendations(showFavourites) {
    if (showFavourites) {
      return _(this.recommendations)
        .filter(rec => this.liked.has(rec.label))
        .map(rec => [rec])
        .value()
    } else {
      return _(this.recommendations)
        .filter(rec => !this.disliked.has(rec.label))
        .groupBy('reason')
        .values()
        .value() 
    }
  }

}
