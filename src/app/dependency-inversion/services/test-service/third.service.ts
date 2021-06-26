import { Injectable } from '@angular/core';

@Injectable()
export class ThirdService implements ITestService {
    log() {
        console.log('ThirdService impl!!!');
    }
}