import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
	title: string;
	pageName: string;
	tabComponent?: any;
	index?: number;
	icon: string;
}

@IonicPage()
@Component({
	selector: 'page-side-menu',
	templateUrl: 'side-menu.html',
})
export class SideMenuPage {

	rootPage = 'HomePage';
	@ViewChild(Nav) nav: Nav;

	pages: PageInterface[] = [
		{ title: 'Home', pageName: 'HomePage', tabComponent: 'Tab1Page', index: 0, icon: 'home' },
		{ title: 'Contact us', pageName: 'ContactUsPage', tabComponent: 'Tab2Page', index: 2, icon: 'contact' },
		{ title: 'Special', pageName: 'Special', icon: 'home' },

	]

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SideMenuPage');
	}

	openPages(page: PageInterface) {

	}

	isActive(page: PageInterface) {

	}

}
