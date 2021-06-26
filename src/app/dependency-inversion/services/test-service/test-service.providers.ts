import { InjectionToken } from '@angular/core';

import { TEST_SERVICE_TOKEN_DESC } from '../../constants';

import { FirstService } from './first.service';
import { SecondService } from './second.service';
import { ThirdService } from './third.service';

export const FIRST_SERVICE_TOKEN: InjectionToken<ITestService> = new InjectionToken<ITestService>(TEST_SERVICE_TOKEN_DESC);
export const SECOND_SERVICE_TOKEN: InjectionToken<ITestService> = new InjectionToken<ITestService>(TEST_SERVICE_TOKEN_DESC);
export const THIRD_SERVICE_TOKEN: InjectionToken<ITestService> = new InjectionToken<ITestService>(TEST_SERVICE_TOKEN_DESC);

export const testServiceProviders = [
    {
        provide: FIRST_SERVICE_TOKEN,
        useClass: FirstService
    },
    {
        provide: SECOND_SERVICE_TOKEN,
        useClass: SecondService
    },
    {
        provide: THIRD_SERVICE_TOKEN,
        useClass: ThirdService
    }
];
