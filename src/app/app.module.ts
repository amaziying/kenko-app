import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { FavouritePage } from '../pages/favourite/favourite';
import { LogPage } from '../pages/log/log';
import { AddIngredientsPage } from '../pages/add-ingredients/add-ingredients';
import { AddServingPage } from '../pages/add-serving/add-serving';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ServingHelpPage } from '../pages/serving-help/serving-help';

import { TabsPage } from '../pages/tabs/tabs';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { TestServiceProvider } from '../providers/test-service/test-service';
import { MealEditProvider } from '../providers/meal-edit/meal-edit';
import { LogProvider } from '../providers/log/log';
import { ArticlesProvider } from '../providers/articles/articles';
import { RecommendationProvider } from '../providers/recommendation/recommendation';
import { UserProvider } from '../providers/user/user';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavouritePage,
    LogPage,
    TabsPage,
    AddIngredientsPage,
    AddServingPage,
    LoginPage,
    SignupPage,
    ServingHelpPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavouritePage,
    LogPage,
    TabsPage,
    AddIngredientsPage,
    AddServingPage,
    LoginPage,
    SignupPage,
    ServingHelpPage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    InAppBrowser,
    HttpClient,
    UniqueDeviceID,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TestServiceProvider,
    MealEditProvider,
    LogProvider,
    ArticlesProvider,
    RecommendationProvider,
    UserProvider
  ]
})
export class AppModule {}
