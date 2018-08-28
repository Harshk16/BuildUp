import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-popup-modal',
	templateUrl: 'popup-modal.html',
})
export class PopupModalPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PopupModalPage');
	}

	closeModal() {
		this.navCtrl.pop();
	}
}
