import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SleeperService } from 'src/app/shared/services/http';
import
{
	LeagueActionsUnion, LeagueActionTypes, LoadDraft, LoadDraftFail,
	LoadDraftSuccess, LoadLeague, LoadLeagueFail, LoadLeagueSuccess,
	LoadPlayers, LoadPlayersFail, LoadPlayersSuccess
} from '../actions/league.actions';

@Injectable()
export class LeagueEffects
{

	/** Load League Effect */
	@Effect()
	public loadLeague$: Observable<Action> = this.actions$.pipe(
		ofType<LoadLeague>(LeagueActionTypes.LoadLeague),
		switchMap(action =>
		{
			return this.sleeperService.getLeague(action.leagueId).pipe(
				map(response => new LoadLeagueSuccess(response)),
				catchError(error => of(new LoadLeagueFail(error)))
			);
		})
	);
	/** Load League Effect */
	@Effect()
	public loadPlayers$: Observable<Action> = this.actions$.pipe(
		ofType<LoadPlayers>(LeagueActionTypes.LoadPlayers),
		switchMap(action =>
		{
			return this.sleeperService.getPlayers().pipe(
				map(response => new LoadPlayersSuccess(response)),
				catchError(error => of(new LoadPlayersFail(error)))
			);
		})
	);
	/** Load League Effect */
	@Effect()
	public loadDraft$: Observable<Action> = this.actions$.pipe(
		ofType<LoadDraft>(LeagueActionTypes.LoadDraft),
		switchMap(action =>
		{
			return this.sleeperService.getDraft(action.draftId).pipe(
				map(response => new LoadDraftSuccess(response)),
				catchError(error => of(new LoadDraftFail(error)))
			);
		})
	);

	constructor(
		private actions$: Actions<LeagueActionsUnion>,
		private sleeperService: SleeperService
	) { }

}
