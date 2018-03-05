import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LogProvider {
  pastMeals: Array<{title: string, image: string, ingredients: Array<{name: string, serving: number}>, createdAt: number}> = []
  constructor(public http: HttpClient) {
  }

  getPastMeals() {
    return this.pastMeals
  }

  saveMeal(title, image, ingredients) {
    this.pastMeals.unshift({
      title,
      image,
      ingredients,
      createdAt: new Date().getTime()
    })
  }

}
