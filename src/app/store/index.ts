import { StoreModule, combineReducers } from '@ngrx/store';

import { feedReducer, IFeed } from './feed/feed.reducer';
import { profileReducer, IProfile } from './profile/profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './profile/profile.effects';
import { FeedEffects } from './feed/feed.effects';
import {EmailEffects} from './email/email.effects';
import {IEmail, emailReducer} from './email/email.reducer';

export interface IAppState {
  feed: Array<IFeed>;
  profile: IProfile;
  email: IEmail;
}

const combined = combineReducers({
  feed: feedReducer,
  email: emailReducer,
  profile: profileReducer
});

export const store = StoreModule.provideStore(combined);

export const effects = [
  EffectsModule.run(ProfileEffects),
  EffectsModule.run(FeedEffects),
  EffectsModule.run(EmailEffects)
];
