import {Component, ViewEncapsulation} from '@angular/core';
import {Http} from '@angular/http';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Store} from '@ngrx/store';
import {IAppState} from './store/index';

@Component({

    selector: 'app-root',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    styleUrls: [
        'app.component.scss',
        '../../src/assets/css/reset.css'
    ],
})
export class AppComponent {

    constructor() {
    }
}
