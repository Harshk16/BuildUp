import { CalorieDetailsPage } from './../pages/calorie-details/calorie-details';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GymWorkoutPage } from '../pages/gym-workout/gym-workout';
import { ListOfFoodPage } from '../pages/list-of-food/list-of-food';
import { WheelSelector } from '@ionic-native/wheel-selector';
import { SettingPage } from '../pages/setting/setting';
import { UserDetailsPage } from '../pages/setting/user-details/user-details';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		TabsPage,
		GymWorkoutPage,
		CalorieDetailsPage,
		ListOfFoodPage,
		SettingPage,
		UserDetailsPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		TabsPage,
		GymWorkoutPage,
		CalorieDetailsPage,
		ListOfFoodPage,
		SettingPage,
		UserDetailsPage

	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		WheelSelector
	]
})
export class AppModule { }
