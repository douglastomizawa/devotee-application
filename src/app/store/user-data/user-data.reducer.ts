import { Action } from "../action.model";
import { IProfileDataState, PROFILE_DATA_INITIAL_STATE, UserData, USER_DATA_INITIAL_STATE } from "./user-data.model";
import * as userDataActions from './user-data.actions';
import { createReducer, on } from "@ngrx/store";


export const profileDataReducer = createReducer(
  PROFILE_DATA_INITIAL_STATE,
  on(userDataActions.userDataLogged, (state, {profileData}) => (Object.assign({},profileData))),
);

export function reducer(state: IProfileDataState, action: Action) {
  return profileDataReducer(state, action);
}
