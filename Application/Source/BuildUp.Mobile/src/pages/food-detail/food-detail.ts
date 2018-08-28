import { Component } from '@angular/core';
import { WheelSelector } from '@ionic-native/wheel-selector';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-food-detail',
	templateUrl: 'food-detail.html',
})
export class FoodDetailPage {

	food: any;
	jsonData = {
		numbers: [
			{ description: "1" },
			{ description: "2" },
			{ description: "3" }
		],
	}

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		private selector: WheelSelector) {
		this.food = this.navParams.get('selectItem');
		console.log('Hey you selected me', this.food);

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FoodDetailPage');
		this.selectANumber();
	}

	selectANumber() {
		this.selector.show({
			title: "How Many?",
			items: [
				this.jsonData.numbers
			],
		}).then(
			result => {
				console.log(result[0].description + ' at index: ' + result[0].index);
			},
			err => console.log('Error: ', err)
		);
	}
}
