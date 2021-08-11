import { INITIAL_STATE } from './../initial-state';
import { Action } from "../action.model";
import { ILoginDataUserState, LOGIN_USER_DATA_INITIAL_STATE } from "./login-user-data.model";
import {Reducer} from 'redux'
import * as loginUserActions from './login-user-data.actions';
import { createReducer, on, State } from "@ngrx/store";


export const loginUserDataReducer = createReducer(
  LOGIN_USER_DATA_INITIAL_STATE,
  on(loginUserActions.userDataLogged, (state, {loginUserData}) => (Object.assign({},{},loginUserData))),
);

export function reducer(state: ILoginDataUserState, action: Action) {
  return loginUserDataReducer(state, action);
}
// export const loginUserDataReducer: Reducer<ILoginDataUserState> = (state: ILoginDataUserState = LOGIN_USER_DATA_INITIAL_STATE, action: Action) => {

//   switch ('') {
//     case '':

//       break;

//     default:
//       return {
//         ...state
//       }
//       break;
//   }
// }
