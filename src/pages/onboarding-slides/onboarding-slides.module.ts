import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnboardingSlidesPage } from './onboarding-slides';

@NgModule({
  declarations: [
    OnboardingSlidesPage,
  ],
  imports: [
    IonicPageModule.forChild(OnboardingSlidesPage),
  ],
})
export class OnboardingSlidesPageModule {}
