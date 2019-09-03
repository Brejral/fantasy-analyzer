
import { League } from 'src/app/shared/models';
import { LeagueActionsUnion, LeagueActionTypes } from '../actions/league.actions';

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

export function reducer(state: State = initialState, action: LeagueActionsUnion): State
{
	switch (action.type)
	{
		case LeagueActionTypes.LoadLeague: {
			return {
				...state,
				loading: true
			};
		}
		case LeagueActionTypes.LoadLeagueSuccess: {
			return {
				...state,
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
	}
}
