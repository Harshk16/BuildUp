import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaloriePage } from './calorie';

@NgModule({
  declarations: [
    CaloriePage,
  ],
  imports: [
    IonicPageModule.forChild(CaloriePage),
  ],
})
export class CaloriePageModule {}
