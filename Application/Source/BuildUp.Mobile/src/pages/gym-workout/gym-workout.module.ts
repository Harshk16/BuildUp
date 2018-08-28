import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GymWorkoutPage } from './gym-workout';

@NgModule({
  declarations: [
    GymWorkoutPage,
  ],
  imports: [
    IonicPageModule.forChild(GymWorkoutPage),
  ],
})
export class GymWorkoutPageModule {}
