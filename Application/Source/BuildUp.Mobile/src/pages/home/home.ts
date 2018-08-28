import { Component } from '@angular/core';
import { ActionSheetController, ModalController, NavController, Platform } from 'ionic-angular';
import { CalorieDetailsPage } from '../calorie-details/calorie-details';
import { PopupModalPage } from '../popup-modal/popup-modal';
import { ListOfFoodPage } from '../list-of-food/list-of-food';
import { SettingPage } from '../setting/setting';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(
		public navCtrl: NavController,
		public actionSheetCtrl: ActionSheetController,
		public modalCtrl: ModalController,
		public platform: Platform,
	) {

		var plat = this.platform.is('android')
		console.log('platform', plat);

	}

	presentActionSheet() {
		let actionSheet = this.actionSheetCtrl.create({
			title: 'Select you meal to track',
			buttons: [
				{
					text: 'BreakFast',
					role: 'destructive',
					icon: this.platform.is('android') ? 'cc-icon-breakfast' : null,
					handler: () => {
						this.selectFood();
					}
				},
				{
					text: 'Morning Snacks',
					icon: this.platform.is('android') ? 'cc-icon-snacks' : null,
					handler: () => {
						this.selectFood();
					}
				},
				{
					text: 'Lunch',
					icon: this.platform.is('android') ? 'cc-icon-lunch' : null,
					handler: () => {
						this.selectFood();
					}
				},
				{
					text: 'Evening Snacks',
					icon: this.platform.is('android') ? 'cc-icon-snacks' : null,
					handler: () => {
						this.selectFood();
					}
				},
				{
					text: 'Dinner',
					icon: this.platform.is('android') ? 'cc-icon-dinner' : null,
					handler: () => {
						this.selectFood();
					}
				},
				{
					text: 'Other',
					icon: this.platform.is('android') ? 'cc-icon-hungry' : null,
					handler: () => {
						this.selectFood();
					}
				},
				{
					text: 'Cancel',
					icon: this.platform.is('android') ? 'cc-icon-cancel_border' : null,
					role: 'cancel',
					handler: () => {
						console.log('cancel sheet');

					}
				}
			]
		});

		actionSheet.present();
	}

	selectFood() {
		this.navCtrl.push(ListOfFoodPage);
	}

	addWater() {
		const modal = this.modalCtrl.create('PopupModalPage',
			{

			});

		modal.present();
		modal.onDidDismiss(() => {

		})
	}

	calorieBurnt() {

	}

	open() {
		this.navCtrl.push(PopupModalPage);
	}

	openCalorieDetail() {
		this.navCtrl.push(CalorieDetailsPage);
	}

	openSetting() {
		this.navCtrl.push(SettingPage);
	}

}
