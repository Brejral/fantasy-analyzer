import { createAction, props } from '@ngrx/store';
import { Draft, DraftPick, League, LeagueRoster, LeagueUser, Players, Stats } from 'src/app/shared/models';
// tslint:disable: variable-name
// tslint:disable: typedef
// tslint:disable: completed-docs

export const LoadStats = createAction('[League] Load Stats', props<{}>());
export const LoadStatsSuccess = createAction('[League] Load Stats Success', props<{ stats: Stats }>());
export const LoadStatsFail = createAction('[League] Load Stats Fail', props<{ error: Error }>());
export const LoadLeague = createAction('[League] Load League', props<{ leagueId: string }>());
export const LoadLeagueSuccess = createAction('[League] Load League Success', props<{ league: League }>());
export const LoadLeagueFail = createAction('[League] Load League Fail', props<{ error: Error }>());
export const LoadDraft = createAction('[League] Load Draft', props<{ draftId: string }>());
export const LoadDraftSuccess = createAction('[League] Load Draft Success', props<{ draft: Draft }>());
export const LoadDraftFail = createAction('[League] Load Draft Fail', props<{ error: Error }>());
export const LoadDraftPicks = createAction('[League] Load Draft Picks', props<{ draftId: string }>());
export const LoadDraftPicksSuccess = createAction('[League] Load Draft Picks Success', props<{ draftPicks: DraftPick[] }>());
export const LoadDraftPicksFail = createAction('[League] Load Draft Picks Fail', props<{ error: Error }>());
export const LoadPlayers = createAction('[League] Load Players', props<{}>());
export const LoadPlayersSuccess = createAction('[League] Load Players Success', props<{ players: Players }>());
export const LoadPlayersFail = createAction('[League] Load Players Fail', props<{ error: Error }>());
export const LoadLeagueUsers = createAction('[League] Load League Users', props<{ leagueId: string }>());
export const LoadLeagueUsersSuccess = createAction('[League] Load League Users Success', props<{ leagueUsers: LeagueUser[] }>());
export const LoadLeagueUsersFail = createAction('[League] Load League Users Fail', props<{ error: Error }>());
export const LoadLeagueRosters = createAction('[League] Load League Rosters', props<{ leagueId: string }>());
export const LoadLeagueRostersSuccess = createAction('[League] Load League Rosters Success', props<{ leagueRosters: LeagueRoster[] }>());
export const LoadLeagueRostersFail = createAction('[League] Load League Rosters Fail', props<{ error: Error }>());
