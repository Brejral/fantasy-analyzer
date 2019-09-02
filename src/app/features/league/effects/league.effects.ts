import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SleeperService } from 'src/app/shared/services/http';
import { LeagueActionsUnion, LeagueActionTypes, LoadLeague, LoadLeagueFail, LoadLeagueSuccess } from '../actions/league.actions';

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

	constructor(
		private actions$: Actions<LeagueActionsUnion>,
		private sleeperService: SleeperService
	) { }

}
