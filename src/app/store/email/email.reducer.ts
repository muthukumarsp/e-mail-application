import {Action, ActionReducer} from '@ngrx/store';
import {SEND_EMAIL_SUCCESS} from './email.actions';

export interface IEmail {
    id: string;
    text: string;
    date: string;
    comments?: Array<{}>;
}

export const emailReducer: ActionReducer<IEmail[]> = (state: Array<IEmail> = [], action: Action): IEmail[] => {

    switch (action.type) {

        case SEND_EMAIL_SUCCESS:

            return [...state, action.payload];

        /* case FEED_REMOVE_SUCCESS:

         return state.filter((feed: IEmail) => action.payload.id !== feed.id);

         case FEED_ADD_COMMENT_SUCCESS:

         const [ feed ] = state.filter((feed: IEmail) => action.payload.id === feed.id);
         const index = state.indexOf(feed);

         feed.comments = feed.comments || [];
         feed.comments = [...feed.comments, action.payload.comment];

         return [...state.slice(0, index), feed, ...state.slice(index + 1)];
         */
        default:
            return state;
    }
};
