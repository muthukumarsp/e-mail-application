import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ComposeComponent} from '../compose/compose.component';

@Component({
    selector: 'email-home-page',
    styles: [require('./email-home.component.scss'),
        require('bootstrap/dist/css/bootstrap.css')],
    templateUrl: './email-home.component.html',
    providers: [NgbActiveModal]
})
export class EmailHomeComponent {
    localState: any;

    constructor(public route: ActivatedRoute,
                private modalService: NgbModal) {

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

    open() {
        const modalRef = this.modalService.open(ComposeComponent);
        modalRef.componentInstance.name = 'World';
    }

}
