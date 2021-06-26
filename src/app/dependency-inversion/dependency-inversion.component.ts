import { Component } from '@angular/core';

import {
    FIRST_SERVICE_TOKEN,
    SECOND_SERVICE_TOKEN,
    THIRD_SERVICE_TOKEN
} from './services';

@Component({
	selector: 'app-dependency-inversion',
	templateUrl: './dependency-inversion.component.html',
})
export class DependencyInversionComponent {
    constructor() { }

    public FIRST_SERVICE_TOKEN = FIRST_SERVICE_TOKEN;
    public SECOND_SERVICE_TOKEN = SECOND_SERVICE_TOKEN;
    public THIRD_SERVICE_TOKEN = THIRD_SERVICE_TOKEN;
}
