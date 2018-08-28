import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOfFoodPage } from './list-of-food';

@NgModule({
  declarations: [
    ListOfFoodPage,
  ],
  imports: [
    IonicPageModule.forChild(ListOfFoodPage),
  ],
})
export class ListOfFoodPageModule {}
