import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDetailsPage } from './user-details/user-details';

@IonicPage()
@Component({
	selector: 'page-setting',
	templateUrl: 'setting.html',
})
export class SettingPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	tabs: string = "general";
	itemFamily: [{ 'Amit', 'Saha', 'adaksd' }];
	chooseTypeClicked: boolean;


	ionViewDidLoad() {
		console.log('ionViewDidLoad SettingPage');
	}

	userDetails() {
		this.navCtrl.push(UserDetailsPage);

	}

	showHideButtons() {
		if (this.chooseTypeClicked === undefined) {
			this.chooseTypeClicked = true;
			console.log(this.chooseTypeClicked);

		}
		else if (this.chooseTypeClicked === true) {
			this.chooseTypeClicked = false;
			console.log(this.chooseTypeClicked);

		}
		else if (this.chooseTypeClicked === false) {
			this.chooseTypeClicked = true;
			console.log(this.chooseTypeClicked);

		}
	}

}
