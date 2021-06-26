import { Component, OnInit, Input, InjectionToken, Injector } from '@angular/core';

@Component({
	selector: 'app-universal-component',
	templateUrl: './universal-component.component.html',
	styleUrls: ['./universal-component.component.less']
})
export class UniversalComponent implements OnInit {
	@Input() public token!: InjectionToken<ITestService>;
	private testService!: ITestService;

	constructor(private injector: Injector) { }

	ngOnInit() {
		this.testService = this.injector.get(this.token);
		this.testService.log();
	}
}
