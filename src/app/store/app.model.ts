import { ILoginDataUserState } from "./login-user-data/login-user-data.model";
import { IProfileDataState } from "./user-data/user-data.model";

export interface IAppState {
  loginUserData: ILoginDataUserState,
  profileData: IProfileDataState,
}
