import { Action } from '@ngrx/store';
import { League } from 'src/app/shared/models';

export enum LeagueActionTypes
{
	LoadLeague = '[League] Load League',
	LoadLeagueSuccess = '[League] Load League Success',
	LoadLeagueFail = '[League] Load League Fail'
}

export class LoadLeague implements Action
{
	public readonly type: string = LeagueActionTypes.LoadLeague;

	constructor(public leagueId: string) { }
}

export class LoadLeagueSuccess implements Action
{
	public readonly type: string = LeagueActionTypes.LoadLeagueSuccess;

	constructor(public league: League) { }
}

export class LoadLeagueFail implements Action
{
	public readonly type: string = LeagueActionTypes.LoadLeagueFail;

	constructor(public error: Error) { }
}

export type LeagueActionsUnion =
	| LoadLeague
	| LoadLeagueSuccess
	| LoadLeagueFail;
