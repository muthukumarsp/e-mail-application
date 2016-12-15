import {Effect, Actions} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {
    SEND_EMAIL, SEND_EMAIL_FAIL, SEND_EMAIL_SUCCESS
} from './email.actions';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class EmailEffects {

    @Effect()
    sendEmail$ = this.actions$
        .ofType(SEND_EMAIL)
        .switchMap((action: Action) => {

            return this.http.post('/api/email', action.payload)
                .catch(() => Observable.of(({type: SEND_EMAIL_FAIL})))
                .map((response: Response) => response.json())
                .map((response) => ({type: SEND_EMAIL_SUCCESS, payload: response}));

        });

 /*   @Effect()
    addFeedComment$ = this.actions$
        .ofType(FEED_ADD_COMMENT)
        .switchMap((action: Action) => {

            return this.http.post('/api/feed/' + action.payload.id + '/comment', action.payload.comment)
                .catch(() => Observable.of(({type: FEED_ADD_COMMENT_FAIL})))
                .map((response: Response) => response.json())
                .map((response) => ({type: FEED_ADD_COMMENT_SUCCESS, payload: response}));

        });

    @Effect()
    removeFeed$ = this.actions$
        .ofType(FEED_REMOVE)
        .switchMap((action: Action) => {

            return this.http.delete('/api/feed/' + action.payload)
                .catch(() => Observable.of(({type: FEED_REMOVE_FAIL})))
                .map((response: Response) => response.json())
                .map((response) => ({type: FEED_REMOVE_SUCCESS, payload: response}));

        });*/

    constructor(private actions$: Actions, private http: Http) {
    }
}
