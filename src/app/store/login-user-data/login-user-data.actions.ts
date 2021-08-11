import { ILoginDataUserState } from './login-user-data.model';
import { createAction, props } from '@ngrx/store';

export const userDataLogged = createAction(
  '[Change value] change Value',
  props<{loginUserData: ILoginDataUserState}>()
);
export const awayScore = createAction('[Scoreboard Page] Away Score');
export const resetScore = createAction('[Scoreboard Page] Score Reset');
