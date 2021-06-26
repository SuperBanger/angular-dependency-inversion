import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversalComponent } from './components';
import { DependencyInversionComponent } from './dependency-inversion.component';

import { testServiceProviders } from './services';

@NgModule({
	declarations: [
		DependencyInversionComponent,

		UniversalComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		DependencyInversionComponent
	],
	providers: [
		...testServiceProviders
	]
})
export class DependencyInversionModule { }
