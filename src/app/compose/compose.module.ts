import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComposeComponent} from './compose.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ComposeComponent
    ],
    bootstrap: [
        ComposeComponent
    ],
    exports: [ComposeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComposeModule {
}
