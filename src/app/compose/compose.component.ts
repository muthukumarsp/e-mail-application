import {Component, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'compose',
    styles: [require('./compose.component.scss')],
    templateUrl: 'compose.component.html',
    providers: [NgbActiveModal]
})
export class ComposeComponent {
    localState: any;
    form: FormGroup;

    constructor(@Inject(FormBuilder) fb: FormBuilder,
                public route: ActivatedRoute,
                public activeModal: NgbActiveModal) {
        this.form = fb.group({
            toField: ['', Validators.required],
            ccField: [''],
            bccField: [''],
            subject: [''],
            emailBodyText:['']
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

    send(event) {
        // Show the value of the form
        let formData = this.form.value;
        // { email: 'blah@blah.net', password: 'imnottelling1' }

        // Or, grab the value of one control:
        let email = this.form.value.toField;

    }

}

/*
 import {Component, Inject} from '@angular/core';
 import {FormBuilder, FormGroup, Validators} from '@angular/forms';
 @Component({
 selector: 'example-app',
 template: `
 <form [formGroup]="form">
 <div formGroupName="name">
 <input formControlName="first" placeholder="First">
 <input formControlName="last" placeholder="Last">
 </div>
 <input formControlName="email" placeholder="Email">
 <button>Submit</button>
 </form>
 <p>Value: {{ form.value | json }}</p>
 <p>Validation status: {{ form.status }}</p>
 `
 })
 export class FormBuilderComp {
 form: FormGroup;
 constructor(@Inject(FormBuilder) fb: FormBuilder) {
 this.form = fb.group({
 name: fb.group({
 first: ['Nancy', Validators.minLength(2)],
 last: 'Drew',
 }),
 email: '',
 });
 }
 }
 */
