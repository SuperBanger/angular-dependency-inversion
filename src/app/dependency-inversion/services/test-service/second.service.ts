import { Injectable } from '@angular/core';

@Injectable()
export class SecondService implements ITestService {
    log() {
        console.log('SecondService impl!!!');
    }
}
