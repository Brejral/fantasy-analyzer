import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SleeperService } from 'src/app/shared/services/http';
import { environment } from 'src/environments/environment';
import
{
	LoadDraft, LoadDraftFail, LoadDraftPicks, LoadDraftPicksFail, LoadDraftPicksSuccess, LoadDraftSuccess,
	LoadLeague, LoadLeagueFail, LoadLeagueRosters, LoadLeagueRostersFail, LoadLeagueRostersSuccess,
	LoadLeagueSuccess, LoadLeagueUsers, LoadLeagueUsersFail, LoadLeagueUsersSuccess, LoadPlayers, LoadPlayersFail, LoadPlayersSuccess, LoadStats, LoadStatsFail, LoadStatsSuccess
} from '../actions/league.actions';

@Injectable()
export class LeagueEffects
{
	public loadLeague$: Observable<Action> = createEffect(() => this.actions$.pipe(
		ofType(LoadLeague),
		switchMap(action =>
		{
			return this.sleeperService.getLeague(action.leagueId).pipe(
				map(league => LoadLeagueSuccess({ league })),
				catchError(error => of(LoadLeagueFail({ error })))
			);
		})
	));

	public loadLeagueSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
		ofType(LoadLeagueSuccess),
		switchMap(() =>
		{
			return [
				LoadLeagueUsers({ leagueId: environment.leagueId }),
				LoadLeagueRosters({ leagueId: environment.leagueId })
			];
		})
	));
	public loadLeagueUsers$: Observable<Action> = createEffect(() => this.actions$.pipe(
		ofType(LoadLeagueUsers),
		switchMap(action =>
		{
			return this.sleeperService.getLeagueUsers(action.leagueId).pipe(
				map(leagueUsers => LoadLeagueUsersSuccess({ leagueUsers })),
				catchError(error => of(LoadLeagueUsersFail({ error })))
			);
		})
	));
	public loadLeagueRosters$: Observable<Action> = createEffect(() => this.actions$.pipe(
		ofType(LoadLeagueRosters),
		switchMap(action =>
		{
			return this.sleeperService.getLeagueRosters(action.leagueId).pipe(
				map(leagueRosters => LoadLeagueRostersSuccess({ leagueRosters })),
				catchError(error => of(LoadLeagueRostersFail({ error })))
			);
		})
	));

	public loadPlayers$: Observable<Action> = createEffect(() => this.actions$.pipe(
		ofType(LoadPlayers),
		switchMap(action =>
		{
			return this.sleeperService.getPlayers().pipe(
				map(players => LoadPlayersSuccess({ players })),
				catchError(error => of(LoadPlayersFail({ error })))
			);
		})
	));

	public loadDraft$: Observable<Action> = createEffect(() => this.actions$.pipe(
		ofType(LoadDraft),
		switchMap(action =>
		{
			return this.sleeperService.getDraft(action.draftId).pipe(
				map(draft => LoadDraftSuccess({ draft })),
				catchError(error => of(LoadDraftFail({ error })))
			);
		})
	));

	public loadDraftSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
		ofType(LoadDraftSuccess),
		map(() =>
		{
			return LoadDraftPicks({ draftId: environment.draftId });
		})
	));

	public loadDraftPicks$: Observable<Action> = createEffect(() => this.actions$.pipe(
		ofType(LoadDraftPicks),
		switchMap(action =>
		{
			return this.sleeperService.getDraftPicks(action.draftId).pipe(
				map(draftPicks => LoadDraftPicksSuccess({ draftPicks })),
				catchError(error => of(LoadDraftPicksFail(error)))
			);
		})
	));

	public loadStats$: Observable<Action> = createEffect(() => this.actions$.pipe(
		ofType(LoadStats),
		switchMap(action =>
		{
			return this.sleeperService.getStats(action.week).pipe(
				map(stats => LoadStatsSuccess({ stats })),
				catchError(error => of(LoadStatsFail(error)))
			);
		})
	));

	constructor(
		private actions$: Actions,
		private sleeperService: SleeperService
	) { }

}
