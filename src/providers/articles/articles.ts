import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ArticlesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArticlesProvider {
  list: Array<{ readTime: number, title: string, source: string, liked: boolean, link: string }> = [
    {
      title: "What is Prediabetes?",
      source: "Diabetes Canada",
      liked: false,
      link: "http://www.diabetes.ca/about-diabetes/prediabetes",
      readTime: 3,
    },
    {
      title: "Living with Prediabetes",
      source: "Diabetes Canada",
      liked: false,
      link: "http://www.diabetes.ca/diabetes-and-you/living-with-prediabetes",
      readTime: 6,
    }
  ]

  constructor(public http: HttpClient) {
    
  }

}
