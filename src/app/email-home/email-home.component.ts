import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbModal, NgbActiveModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ComposeComponent} from '../compose/compose.component';
import {Store} from '@ngrx/store';
import {IAppState} from '../store/index';
import {Observable, Subscription} from 'rxjs';

@Component({
    selector: 'email-home-page',
    styles: [require('./email-home.component.scss'),
        require('bootstrap/dist/css/bootstrap.css')],
    templateUrl: './email-home.component.html',
    providers: [NgbActiveModal]
})
export class EmailHomeComponent {
    successMessage: string;
    modalRef: NgbModalRef;

    email$: Observable<{}>;
    emailSub: Subscription;
    emailSubDebounce: Subscription;

    constructor(public route: ActivatedRoute,
                private modalService: NgbModal,
                public store: Store<IAppState>) {
        this.email$ = store.select('email');

    }

    ngOnInit() {
        this.emailSub = this.email$.subscribe((emailState: any) => {
            if (emailState.length) {
                this.successMessage = 'E-mail sent status :' + emailState[0].sendStatus;
                this.modalRef.dismiss();
            }
        });
        this.emailSubDebounce = this.email$.debounceTime(5000).subscribe(() => {
            this.successMessage = null;
        });

    }

    ngOnDestroy() {
        this.emailSub.unsubscribe();
        this.emailSubDebounce.unsubscribe();
    }

    open() {
        this.modalRef = this.modalService.open(ComposeComponent);
        this.modalRef.componentInstance.name = 'World';
    }

}
