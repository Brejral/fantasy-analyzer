import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SleeperService } from 'src/app/shared/services/http';
import { LeagueActionsUnion, loadLeague, loadLeagueFail, loadLeagueSuccess } from '../actions/league.actions';

@Injectable()
export class LeagueEffects
{

	/** Load League Effect */
	@Effect()
	public loadLeague$: Observable<Action> = this.actions$.pipe(
		ofType(loadLeague),
		map(action =>
		{
			return this.sleeperService.getLeague(action.leagueId).pipe(
				map(response => loadLeagueSuccess({ league: response })),
				catchError(error => of(loadLeagueFail({ error })))
			);
		})
	);

	constructor(
		private actions$: Actions<LeagueActionsUnion>,
		private sleeperService: SleeperService
	) { }

}
