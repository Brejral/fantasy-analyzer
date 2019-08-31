
import { createReducer, on } from '@ngrx/store';
import { League } from 'src/app/shared/models';
import { LeagueActions, loadLeagueSuccess } from '../actions/league.actions';

export const leagueFeatureKey: string = 'league';

/** League State */
export interface State
{
	/** Is Loading Flag */
	loading: boolean;
	/** League */
	league: League;
}

export const initialState: State = {
	loading: false,
	league: null
};

export const leagueReducer = createReducer(
	initialState,
	on(loadLeague, (state) => ({ ...state, loading: true })),
	on(loadLeagueSuccess, (state, { league }) => ({ ...state, loading: false, league })),
	on(loadLeagueFail, (state) => ({ ...state, loading: false, league: null }))
);

export function reducer(state: State = initialState, action: LeagueActions): State
{
	switch (action.type)
	{
		case LeagueActionTypes.LoadLeague:
			return {
				...state,
				loading: true
			};

		case LeagueActionTypes.LoadLeagueSuccess: {
			return {
				...state,
				loading: false,
				league: action.league
			};
		}

		case LeagueActionTypes.LoadLeagueFail: {
			return {
				...state,
				loading: false,
				league: null
			};
		}

		default:
			return state;
	}
}
