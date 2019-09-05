import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { Draft, DraftPick, League, Players, Stats } from 'src/app/shared/models';
import
{
	LoadDraftFail, LoadDraftPicksFail, LoadDraftPicksSuccess, LoadDraftSuccess,
	LoadLeagueFail, LoadLeagueSuccess, LoadPlayersFail, LoadPlayersSuccess,
	LoadStatsFail, LoadStatsSuccess
} from '../actions/league.actions';

export const leagueFeatureKey: string = 'league';

/** League State */
export interface State
{
	/** League */
	league: League;
	players: Players;
	stats: Stats;
	draft: Draft;
	draftPicks: DraftPick[];
}

export const initialState: State = {
	league: null,
	players: null,
	draft: null,
	draftPicks: null,
	stats: null
};

export const leagueReducer: ActionReducer<State, Action> = createReducer(
	initialState,
	on(LoadLeagueSuccess, (state, action): State =>
	{
		return {
			...state,
			league: action.league
		};
	}),
	on(LoadLeagueFail, (state): State => state),
	on(LoadDraftSuccess, (state, action): State =>
	{
		return {
			...state,
			draft: action.draft
		};
	}),
	on(LoadDraftFail, (state): State => state),
	on(LoadPlayersSuccess, (state, action): State =>
	{
		return {
			...state,
			players: action.players
		};
	}),
	on(LoadPlayersFail, (state): State => state),
	on(LoadDraftPicksSuccess, (state, action): State =>
	{
		return {
			...state,
			draft: {
				...state.draft,
				draft_picks: action.draftPicks
			}
		};
	}),
	on(LoadDraftPicksFail, (state): State => state),
	on(LoadStatsSuccess, (state, action): State =>
	{
		return {
			...state,
			stats: action.stats
		};
	}),
	on(LoadStatsFail, (state): State => state)
);
