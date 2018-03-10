import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as _ from 'lodash';

/*
  Generated class for the RecommendationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const recommendations = [
  {
    "image": "https://www.edamam.com/web-img/262/262b4353ca25074178ead2a07cdf7dc1.jpg", 
    "ingredients": [
      "1/2 cup (125ml) mirin", 
      "1/2 cup (125ml) soy sauce", 
      "One 2-inch (5cm) piece of fresh ginger, peeled and grated", 
      "2-pounds (900g) boneless chicken thighs (4-8 thighs, depending on size)"
    ], 
    "label": "Teriyaki Chicken", 
    "reason": "meat", 
    "url": "http://www.davidlebovitz.com/2012/12/chicken-teriyaki-recipe-japanese-farm-food/"
  }, 
  {
    "image": "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg", 
    "ingredients": [
      "1/2 cup olive oil", 
      "5 cloves garlic, peeled", 
      "2 large russet potatoes, peeled and cut into chunks", 
      "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)", 
      "3/4 cup white wine", 
      "3/4 cup chicken stock", 
      "3 tablespoons chopped parsley", 
      "1 tablespoon dried oregano", 
      "Salt and pepper", 
      "1 cup frozen peas, thawed"
    ], 
    "label": "Chicken Vesuvio", 
    "reason": "meat", 
    "url": "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html"
  }, 
  {
    "image": "https://www.edamam.com/web-img/827/8275cc33e9f0f4314617d5a356900aa7.jpg", 
    "ingredients": [
      "1/2 cup water", 
      "2 tablespoons Japanese soy sauce", 
      "2 tablespoons dark brown sugar", 
      "2 tablespoons mirin", 
      "4-6 skin-on filleted (boneless) chicken thighs", 
      "2 tablespoons mild flavored honey (or maltose)", 
      "2 tablespoons dark soy sauce", 
      "2 tablespoons sake"
    ], 
    "label": "Chicken Teriyaki", 
    "reason": "meat", 
    "url": "http://norecipes.com/blog/2009/07/16/chicken-teriyaki-recipe/"
  }, 
  {
    "image": "https://www.edamam.com/web-img/551/551b906bafd4c45d50033742eaf00c02.jpg", 
    "ingredients": [
      "1 tbsp. vegetable oil", 
      "4 pieces chicken, trimmed, skin pierced with a fork", 
      "\u00bd cup Teriyaki Sauce"
    ], 
    "label": "Chicken Teriyaki", 
    "reason": "meat", 
    "url": "http://www.saveur.com/article/Recipes/Chicken-Teriyaki"
  }, 
  {
    "image": "https://www.edamam.com/web-img/ba6/ba6f66d885e4d62a98055b088a5a85a3.jpg", 
    "ingredients": [
      "100.0ml soy sauce (Kikkoman is good)", 
      "4.0 tbsp smooth peanut butter", 
      "4 skinless chicken breasts fillets"
    ], 
    "label": "Chicken Satay", 
    "reason": "meat", 
    "url": "http://www.bbcgoodfood.com/recipes/3645/"
  },
  {
    "image": "https://www.edamam.com/web-img/88d/88d23618c19c48e5fdc03c561eee5fe9.jpg", 
    "ingredients": [
      "4 pounds broccoli rabe", 
      "1/3 cup olive oil", 
      "4 cloves garlic, coarsely chopped", 
      "Salt and freshly ground black pepper"
    ], 
    "label": "Broccoli Rabe", 
    "reason": "veg", 
    "url": "http://nymag.com/restaurants/articles/recipes/broccolirabe.htm"
  }, 
  {
    "image": "https://www.edamam.com/web-img/2ba/2babdf595faa43af14dd8ee0f886609c.jpg", 
    "ingredients": [
      "3 bag broccoli florets", 
      "3 tbsp. olive oil", 
      "3 clove garlic", 
      "1 tsp. grated fresh lemon peel", 
      "salt and pepper"
    ], 
    "label": "Broccoli", 
    "reason": "veg", 
    "url": "http://www.goodhousekeeping.com/food-recipes/a9276/steamed-broccoli-garlic-recipes/"
  }, 
  {
    "image": "https://www.edamam.com/web-img/2cb/2cb89fc96476d657dfcd634b89f069f6.jpg", 
    "ingredients": [
      "1 pound broccoli rabe, washed and trimmed", 
      "2 teaspoons salt", 
      "2 tablespoons olive oil, divided", 
      "1 teaspoon red pepper flakes", 
      "3 teaspoons fresh lemon juice"
    ], 
    "label": "Grilled Broccoli Rabe Recipe", 
    "reason": "veg", 
    "url": "http://www.seriouseats.com/recipes/2011/09/grilled-broccoli-rabe-recipe.html"
  }, 
  {
    "image": "https://www.edamam.com/web-img/f4f/f4fe99f7eb0d789f4152a79554be4c21.jpg", 
    "ingredients": [
      "2 heads broccoli", 
      "2 tablespoons olive oil", 
      "1/2 teaspoon celtic sea salt"
    ], 
    "label": "Grilled Broccoli", 
    "reason": "veg", 
    "url": "https://food52.com/recipes/6823-grilled-broccoli"
  }, 
  {
    "image": "https://www.edamam.com/web-img/e0e/e0eb69322af20d1b0edcf267cf4fc68a.jpg", 
    "ingredients": [
      "900.0g trimmed broccoli , divided into florets", 
      "25.0g butter", 
      "50.0g parmesan , grated, plus extra to serve"
    ], 
    "label": "Parmesan Broccoli", 
    "reason": "veg", 
    "url": "http://www.bbcgoodfood.com/recipes/2565/"
  }
]

interface Recommendation {
  image: string,
  ingredients: Array<string>,
  label: string,
  reason: string,
  url: string
}

@Injectable()
export class RecommendationProvider {
  recommendations: Array<Array<Recommendation>>;
  disliked: Set<string> = new Set([]);
  liked: Set<string> = new Set([]);

  constructor(public http: HttpClient) {
    this.recommendations = _(recommendations)
      .filter(rec => !this.disliked.has(rec.label))
      .groupBy('reason')
      .values()
      .value()
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
      return _(recommendations)
        .filter(rec => this.liked.has(rec.label))
        .map(rec => [rec])
        .value()
    } else {
      return _(recommendations)
        .filter(rec => !this.disliked.has(rec.label))
        .groupBy('reason')
        .values()
        .value() 
    }
  }

}
