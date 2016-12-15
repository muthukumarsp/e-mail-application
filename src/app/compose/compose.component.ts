import {Component, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {IAppState} from '../store/index';
import {SEND_EMAIL} from '../store/email/email.actions';

@Component({
    selector: 'compose',
    styles: [require('./compose.component.scss')],
    templateUrl: './compose.component.html',
    providers: [NgbActiveModal]
})
export class ComposeComponent {
    localState: any;
    form: FormGroup;

    constructor(@Inject(FormBuilder) fb: FormBuilder,
                public route: ActivatedRoute,
                public activeModal: NgbActiveModal,
                public store: Store<IAppState>) {
        this.form = fb.group({
            toField: ['muthu_career@rediffmail.com', Validators.required],
            ccField: [''],
            bccField: [''],
            subject: ['From MailGun'],
            emailBodyText: ['Hi, This is a test message send using MailGun']
        });

    }

    ngOnInit() {
        this.route
            .data
            .subscribe((data: any) => {
                // your resolved data from route
                this.localState = data.yourData;
            });

        console.log('hello `About` component');
        // static data that is bundled
        // var mockData = require('assets/mock-data/mock-data.json');
        // console.log('mockData', mockData);
        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
        this.asyncDataWithWebpack();
    }

    asyncDataWithWebpack() {
        // you can also async load mock data with 'es6-promise-loader'
        // you would do this if you don't want the mock-data bundled
        // remember that 'es6-promise-loader' is a promise
        setTimeout(() => {

            System.import('../../assets/mock-data/mock-data.json')
                .then(json => {
                    console.log('async mockData', json);
                    this.localState = json;
                });

        });
    }

    send() {

        if (this.form.valid) {
            this.store.dispatch({
                type: SEND_EMAIL,
                payload: this.form.value
            });

            this.form.reset();
        }

    }

}
