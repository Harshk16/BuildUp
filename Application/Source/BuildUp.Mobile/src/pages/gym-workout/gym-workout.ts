import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-gym-workout',
	templateUrl: 'gym-workout.html',
})
export class GymWorkoutPage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad GymWorkoutPage');
	}

}
