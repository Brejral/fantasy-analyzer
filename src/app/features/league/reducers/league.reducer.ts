import { Draft, DraftPick, League, Players } from 'src/app/shared/models';
import { LeagueActionsUnion, LeagueActionTypes } from '../actions/league.actions';

export const leagueFeatureKey: string = 'league';

/** League State */
export interface State
{
	/** League */
	league: League;
	players: Players;
	draft: Draft;
	draftPicks: DraftPick[];
}

export const initialState: State = {
	league: null,
	players: null,
	draft: null,
	draftPicks: null
};

export function reducer(state: State = initialState, action: LeagueActionsUnion): State
{
	switch (action.type)
	{
		case LeagueActionTypes.LoadLeagueSuccess: {
			return {
				...state,
				league: action.league
			};
		}
		case LeagueActionTypes.LoadLeagueFail: {
			return {
				...state,
				league: null
			};
		}
		case LeagueActionTypes.LoadPlayersSuccess: {
			return {
				...state,
				players: action.players
			};
		}
		case LeagueActionTypes.LoadPlayersFail: {
			return {
				...state,
				players: null
			};
		}
		case LeagueActionTypes.LoadDraftSuccess: {
			return {
				...state,
				draft: action.draft
			};
		}
		case LeagueActionTypes.LoadDraftFail: {
			return {
				...state,
				draft: null
			};
		}
	}
}
