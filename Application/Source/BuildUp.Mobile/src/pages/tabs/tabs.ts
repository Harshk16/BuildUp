import { Component } from '@angular/core';

import { GymWorkoutPage } from '../gym-workout/gym-workout';
import { HomePage } from '../home/home';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {

	tab1Root = HomePage;
	tab2Root = GymWorkoutPage;
	// tab3Root = ContactPage;

	constructor() {

	}
}
