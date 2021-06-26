import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DependencyInversionModule } from './dependency-inversion/dependency-inversion.module';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,

		DependencyInversionModule
	],
	providers: [ ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
