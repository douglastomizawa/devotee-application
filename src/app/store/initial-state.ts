import { IAppState } from "./app.model";
import { LOGIN_USER_DATA_INITIAL_STATE } from "./login-user-data/login-user-data.model";

export const INITIAL_STATE: IAppState = {
  loginUserData: LOGIN_USER_DATA_INITIAL_STATE,
}
