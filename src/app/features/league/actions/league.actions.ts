import { Action } from '@ngrx/store';
import { Draft, League, Players } from 'src/app/shared/models';

export enum LeagueActionTypes
{
	LoadLeague = '[League] Load League',
	LoadLeagueSuccess = '[League] Load League Success',
	LoadLeagueFail = '[League] Load League Fail',
	LoadPlayers = '[League] Load Players',
	LoadPlayersSuccess = '[League] Load Players Success',
	LoadPlayersFail = '[League] Load Players Fail',
	LoadDraft = '[League] Load Draft',
	LoadDraftSuccess = '[League] Load Draft Success',
	LoadDraftFail = '[League] Load Draft Fail'
}

export class LoadLeague implements Action
{
	public readonly type: LeagueActionTypes.LoadLeague = LeagueActionTypes.LoadLeague;

	constructor(public leagueId: string) { }
}

export class LoadLeagueSuccess implements Action
{
	public readonly type: LeagueActionTypes.LoadLeagueSuccess = LeagueActionTypes.LoadLeagueSuccess;

	constructor(public league: League) { }
}

export class LoadLeagueFail implements Action
{
	public readonly type: LeagueActionTypes.LoadLeagueFail = LeagueActionTypes.LoadLeagueFail;

	constructor(public error: Error) { }
}

export class LoadPlayers implements Action
{
	public readonly type: LeagueActionTypes.LoadPlayers = LeagueActionTypes.LoadPlayers;

	constructor() { }
}

export class LoadPlayersSuccess implements Action
{
	public readonly type: LeagueActionTypes.LoadPlayersSuccess = LeagueActionTypes.LoadPlayersSuccess;

	constructor(public players: Players) { }
}

export class LoadPlayersFail implements Action
{
	public readonly type: LeagueActionTypes.LoadPlayersFail = LeagueActionTypes.LoadPlayersFail;

	constructor(public error: Error) { }
}

export class LoadDraft implements Action
{
	public readonly type: LeagueActionTypes.LoadDraft = LeagueActionTypes.LoadDraft;

	constructor(public draftId: string) { }
}

export class LoadDraftSuccess implements Action
{
	public readonly type: LeagueActionTypes.LoadDraftSuccess = LeagueActionTypes.LoadDraftSuccess;

	constructor(public draft: Draft) { }
}

export class LoadDraftFail implements Action
{
	public readonly type: LeagueActionTypes.LoadDraftFail = LeagueActionTypes.LoadDraftFail;

	constructor(public error: Error) { }
}

export type LeagueActionsUnion =
	| LoadLeague
	| LoadLeagueSuccess
	| LoadLeagueFail
	| LoadPlayers
	| LoadPlayersSuccess
	| LoadPlayersFail
	| LoadDraft
	| LoadDraftSuccess
	| LoadDraftFail;
