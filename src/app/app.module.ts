import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { FavouritePage } from '../pages/favourite/favourite';
import { TrackPage } from '../pages/track/track';
import { LogPage } from '../pages/log/log';
import { GoalPage } from '../pages/goal/goal';
import { AddMealPage } from '../pages/add-meal/add-meal';
import { AddIngredientsPage } from '../pages/add-ingredients/add-ingredients';
import { AddServingPage } from '../pages/add-serving/add-serving';

import { TabsPage } from '../pages/tabs/tabs';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TestServiceProvider } from '../providers/test-service/test-service';
import { MealEditProvider } from '../providers/meal-edit/meal-edit';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavouritePage,
    TrackPage,
    LogPage,
    GoalPage,
    TabsPage,
    AddMealPage,
    AddIngredientsPage,
    AddServingPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavouritePage,
    TrackPage,
    LogPage,
    GoalPage,
    TabsPage,
    AddMealPage,
    AddIngredientsPage,
    AddServingPage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    InAppBrowser,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TestServiceProvider,
    MealEditProvider
  ]
})
export class AppModule {}
