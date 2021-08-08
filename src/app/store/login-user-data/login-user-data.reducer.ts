import { Action } from "../action.model";
import { ILoginDataUserState, LOGIN_USER_DATA_INITIAL_STATE } from "./login-user-data.model";
import {Reducer} from 'redux'

export const loginUserDataReducer: Reducer<ILoginDataUserState> = (state: ILoginDataUserState = LOGIN_USER_DATA_INITIAL_STATE, action: Action) => {

  switch ('') {
    case '':

      break;

    default:
      return {
        ...state
      }
      break;
  }
}
