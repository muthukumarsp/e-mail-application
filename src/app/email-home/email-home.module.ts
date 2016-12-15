import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {EmailHomeComponent} from './email-home.component';
import {routing} from './email-home.routing';
import {ComposeModule} from '../compose/compose.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        ComposeModule,
        SharedModule,
        routing
    ],
    declarations: [
        EmailHomeComponent
    ],
    bootstrap: [
        EmailHomeComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmailHomeModule {
}
