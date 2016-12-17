import {Component, Inject} from '@angular/core';
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
    form: FormGroup;

    constructor(@Inject(FormBuilder) fb: FormBuilder,
                public activeModal: NgbActiveModal,
                public store: Store<IAppState>) {
        this.form = fb.group({
            /*   // For testing only
             toField: ['muthu_career@rediffmail.com,muthukumarsp@gmail.com', Validators.required],
             ccField: ['muthukumarsp@outlook.com'],
             bccField: ['spmuthukumar@gmail.com'],
             subject: ['From MailGun'],
             emailBodyText: ['Hi, This is a test message sent using MailGun/SendGrid']*/
            toField: ['', Validators.required],
            ccField: [''],
            bccField: [''],
            subject: [''],
            emailBodyText: ['']
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

    close() {
        this.activeModal.dismiss();
    }

}
