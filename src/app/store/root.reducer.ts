import { loginUserDataReducer } from './login-user-data/login-user-data.reducer';
import { IAppState } from './app.model';
import {ActionReducerMap} from '@ngrx/store'

export const rootReducer: ActionReducerMap<IAppState> = {
  loginUserData: loginUserDataReducer
}
