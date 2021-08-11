import { loginUserDataReducer } from './login-user-data/login-user-data.reducer';
import { IAppState } from './app.model';
import {ActionReducerMap} from '@ngrx/store'
import { profileDataReducer } from './user-data/user-data.reducer';

export const rootReducer: ActionReducerMap<IAppState> = {
  loginUserData: loginUserDataReducer,
  profileData: profileDataReducer,
}
