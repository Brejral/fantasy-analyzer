import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { Draft, League, LeagueUser, Players, Stats } from 'src/app/shared/models';
import { LoadDraftPicksSuccess, LoadDraftSuccess, LoadLeagueRostersSuccess, LoadLeagueSuccess, LoadLeagueUsersSuccess, LoadPlayersSuccess, LoadStats, LoadStatsSuccess } from '../actions/league.actions';

export const leagueFeatureKey: string = 'league';

export interface State
{
	league: League;
	players: Players;
	stats: Stats;
	draft: Draft;
}

export const initialState: State = {
	league: null,
	players: null,
	draft: null,
	stats: null
};

const leagueReducer: ActionReducer<State, Action> = createReducer(
	initialState,
	on(LoadLeagueSuccess, (state, action): State =>
	{
		return {
			...state,
			league: action.league
		};
	}),
	on(LoadLeagueUsersSuccess, (state, action): State =>
	{
		return {
			...state,
			league: {
				...state.league,
				users: action.leagueUsers
			}
		};
	}),
	on(LoadLeagueRostersSuccess, (state, action): State =>
	{
		return {
			...state,
			league: {
				...state.league,
				rosters: action.leagueRosters
			}
		};
	}),
	on(LoadLeagueUsersSuccess, (state, action): State =>
	{
		return {
			...state,
			league: {
				...state.league,
				users: action.leagueUsers
			}
		};
	}),
	on(LoadDraftSuccess, (state, action): State =>
	{
		return {
			...state,
			draft: action.draft,

		};
	}),
	on(LoadPlayersSuccess, (state, action): State =>
	{
		return {
			...state,
			players: action.players
		};
	}),
	on(LoadDraftPicksSuccess, (state, action): State =>
	{
		const counts: { [key: string]: number } = {};
		action.draftPicks.forEach(draftPick =>
		{
			const count: number = (counts[draftPick.metadata.position] || 0) + 1;
			draftPick.metadata.pos_pick_order = count;
			counts[draftPick.metadata.position] = count;
		});
		return {
			...state,
			draft: {
				...state.draft,
				draft_picks: action.draftPicks
			}
		};
	}),
	on(LoadStats, (state, action): State =>
	{
		return {
			...state,
			stats: null
		};
	}),
	on(LoadStatsSuccess, (state, action): State =>
	{
		return {
			...state,
			stats: action.stats
		};
	})
);

export function reducer(state: State | undefined, action: Action): State
{
	return leagueReducer(state, action);
}
