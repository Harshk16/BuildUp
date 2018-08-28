import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalorieDetailsPage } from './calorie-details';

@NgModule({
  declarations: [
    CalorieDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CalorieDetailsPage),
  ],
})
export class CalorieDetailsPageModule {}
