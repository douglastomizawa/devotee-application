import { IProfileDataState, UserData } from './user-data.model';
import { createAction, props } from '@ngrx/store';

export const setUserDataLogged = createAction(
  '[Change value] change Value',
  props<{profileData: IProfileDataState}>()
);
export const awayScore = createAction('[Scoreboard Page] Away Score');
export const resetScore = createAction('[Scoreboard Page] Score Reset');
