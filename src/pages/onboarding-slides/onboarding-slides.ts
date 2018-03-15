import { Component, ViewChild } from '@angular/core';
import { ViewController, Slides } from 'ionic-angular';


@Component({
  selector: 'page-onboarding-slides',
  templateUrl: 'onboarding-slides.html',
})
export class OnboardingSlidesPage {
  @ViewChild(Slides) s: Slides;

  slides = [
    {
      title: 'Track your meals',
      image: 'assets/imgs/onboarding_meals.png',
      description: 'The <b>Meals</b> tab allows you to easily log your meals. Tap on a card to begin logging.'
    },
    {
      title: 'Check your progress',
      image: 'assets/imgs/onboarding_daily_progress.png',
      description: 'The <b>Insights</b> tab provides personalized information on how well your eating patterns align with guidelines set by Diabetes Canada.'
    },
    {
      title: 'Check your history',
      image: 'assets/imgs/onboarding_weekly_progress.png',
      description: 'Follow your progress throughout the week to see how your eating patterns develop along the way.'
    },
    {
      title: 'Discover new healthy recipes',
      image: 'assets/imgs/onboarding_recs.png',
      description: 'As you log your meals, Kenko learns about your preferences and finds healthy recipes to help you achieve your dietary goals.'
    },
    {
      title: 'Improve diabetes literacy',
      image: 'assets/imgs/onboarding_education.png',
      description: 'Flip to the <b>Education</b> tab to find articles on prediabetes, lifestyle habits, and prevention tips to broaden your knowledge and help you make better, more informed decisions.'
    }
  ]

  constructor(public viewCtrl: ViewController) {
  }

  close() {
    this.viewCtrl.dismiss()
  }

}
