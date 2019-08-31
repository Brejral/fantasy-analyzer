import { ActionCreator, createAction, props, union } from '@ngrx/store';
import { League } from 'src/app/shared/models';

export const loadLeague: ActionCreator = createAction(
	'[League] Load League',
	props<{ leagueId: string }>()
);

export const loadLeagueSuccess: ActionCreator = createAction(
	'[League] Load League Success',
	props<{ league: League }>()
);

export const loadLeagueFail: ActionCreator = createAction(
	'[League] Load League Fail',
	props<{ error: Error }>()
);

const all: object = union({ loadLeague, loadLeagueSuccess, loadLeagueFail });
export type LeagueActions = typeof all;
