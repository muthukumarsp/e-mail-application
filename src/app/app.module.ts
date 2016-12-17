import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreLogMonitorModule, useLogMonitor} from '@ngrx/store-log-monitor';

import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {store, effects} from './store';
import {SharedModule} from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EmailHomeModule} from './email-home/email-home.module';
import {ComposeModule} from './compose/compose.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        routing,
        SharedModule,
        EmailHomeModule,
        ComposeModule,
        store,
        ...effects,
        FormsModule,
        ReactiveFormsModule,
        StoreDevtoolsModule.instrumentStore({
            monitor: useLogMonitor({
                visible: false,
                position: 'right'
            })
        }),
        StoreLogMonitorModule,
        HttpModule,
        NgbModule.forRoot()
    ],
    providers: [],
    entryComponents: [],
    bootstrap: [
        AppComponent
    ], schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
