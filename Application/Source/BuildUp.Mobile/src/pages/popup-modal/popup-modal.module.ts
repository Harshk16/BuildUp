import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopupModalPage } from './popup-modal';

@NgModule({
  declarations: [
    PopupModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupModalPage),
  ],
})
export class PopupModalPageModule {}
