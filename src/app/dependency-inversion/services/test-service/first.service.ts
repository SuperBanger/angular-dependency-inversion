import { Injectable } from '@angular/core';

@Injectable()
export class FirstService implements ITestService {
    log() {
        console.log('FirstService impl!!!');
    }
}
