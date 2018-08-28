import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { PopupModalPage } from '../popup-modal/popup-modal';


@IonicPage()
@Component({
	selector: 'page-list-of-food',
	templateUrl: 'list-of-food.html',
})
export class ListOfFoodPage {

	data: any[] = [];

	foodList = [
		{ name: 'Almonds', measure: '1 Cup', Protein: '27g', Calories: '27g', Fats: '7g', Fibers: '2g' },
		{ name: 'Mango', measure: '1 Cup', Protein: '57g', Calories: '27g', Fats: '7g', Fibers: '2g' },
		{ name: 'Paneer', measure: '1 Cup', Protein: '87g', Calories: '27g', Fats: '7g', Fibers: '2g' },
		{ name: 'Chicken', measure: '100g', Protein: '127g', Calories: '7g', Fats: '7g', Fibers: '2g' },
		{ name: 'Chickpeas', measure: '100 Cup', Protein: '227g', Calories: '120', Fats: '7g', Fibers: '2g' },
		{ name: 'Rice', measure: '1 Cup', Protein: '127g', Calories: '120', Fats: '7g', Fibers: '2g' },
		{ name: 'Roti', measure: '1', Protein: '2207g', Calories: '120', Fats: '7g', Fibers: '2g' },
		{ name: 'Paratha', measure: '1 Cup', Protein: '27g', Calories: '120', Fats: '7g', Fibers: '2g' },
		{ name: 'Biscuit', measure: '1 Cup', Protein: '27g', Calories: '120', Fats: '7g', Fibers: '2g' },
		{ name: 'Pear', measure: '1 Cup', Protein: '57g', Calories: '120', Fats: '7g', Fibers: '2g' },
		{ name: 'Sweet', measure: '1 Cup', Protein: '87g', Calories: '120', Fats: '7g', Fibers: '2g' },
		{ name: 'Dal', measure: '100g', Protein: '127g', Calories: '120', Fats: '7g', Fibers: '2g' },
		{ name: 'Dosa', measure: '100 Cup', Protein: '227g', Calories: '120', Fats: '7g', Fibers: '2g' },
		{ name: 'Milk', measure: '1 Cup', Protein: '127g', Calories: '120', Fats: '7g', Fibers: '2g' },
		{ name: 'Idlli', measure: '1', Protein: '2207g', Calories: '120', Fats: '7g', Fibers: '2g' },
		{ name: 'Samosa', measure: '1 Cup', Protein: '27g', Calories: '120', Fats: '7g', Fibers: '2g' },
	];

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public actionSheetCtrl: ActionSheetController, ) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ListOfFoodPage');
	}

	open() {
		this.navCtrl.push(PopupModalPage);
	}

	selectQuantity() {

		let actionSheet = this.actionSheetCtrl.create({
			title: 'Select you meal to track',
			buttons: [
				{
					text: 'One Cup',
					role: 'destructive',
					handler: () => {
					}
				},
				{
					text: 'Morning Snacks',
					handler: () => {
					}
				},
				{
					text: 'Lunch',
					handler: () => {
					}
				},
				{
					text: 'Evening Snacks',
					handler: () => {
					}
				},
				{
					text: 'Dinner',
					handler: () => {
					}
				},
				{
					text: 'Other',
					handler: () => {
					}
				},
				{
					text: 'Cancel',
					role: 'cancel',
					handler: () => {
						console.log('cancel sheet');

					}
				}
			]
		});

		actionSheet.present();
	}

	openFoodDetail(item: any) {
		this.navCtrl.push('FoodDetailPage', {
			'selectItem': item,

		});
		console.log(item);

	}

}

