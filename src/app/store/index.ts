import { StoreModule, combineReducers } from '@ngrx/store';

import { feedReducer, IFeed } from './feed/feed.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FeedEffects } from './feed/feed.effects';
import {EmailEffects} from './email/email.effects';
import {IEmail, emailReducer} from './email/email.reducer';

export interface IAppState {
  feed: Array<IFeed>;
  email: IEmail;
}

const combined = combineReducers({
  feed: feedReducer,
  email: emailReducer,
});

export const store = StoreModule.provideStore(combined);

export const effects = [
  EffectsModule.run(FeedEffects),
  EffectsModule.run(EmailEffects)
];
