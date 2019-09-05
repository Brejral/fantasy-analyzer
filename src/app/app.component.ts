import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoadDraft, LoadLeague, LoadPlayers, LoadStats } from './features/league/actions/league.actions';
import * as fromRoot from './reducer';
import { Draft, League, Players } from './shared/models';
import { SleeperService } from './shared/services/http';
import { LeagueViewModel } from './shared/view-models/league.view-model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit
{
	public isLoading: boolean = true;
	public viewModel: LeagueViewModel;
	private league$: Observable<League>;
	private players$: Observable<Players>;
	private draft$: Observable<Draft>;
	private get viewModel$(): Observable<LeagueViewModel>
	{
		return combineLatest(
			this.league$,
			this.players$,
			this.draft$
		).pipe(
			map(([league, players, draft]) =>
			{
				if (league && players && draft)
				{
					return {
						league,
						players,
						draft,
					} as LeagueViewModel;
				}
				return null;
			})
		);
	}
	private subscriptions: Subscription[];
	constructor(private store: Store<fromRoot.State>)
	{
		this.league$ = store.select(x => x.league.league);
		this.players$ = store.select(x => x.league.players);
		this.draft$ = store.select(x => x.league.draft);
	}

	public ngOnInit(): void
	{
		this.store.dispatch(LoadLeague({ leagueId: environment.leagueId }));
		this.store.dispatch(LoadPlayers({}));
		this.store.dispatch(LoadStats({}));
		this.store.dispatch(LoadDraft({ draftId: environment.draftId }));
	}

	public ngOnDestroy(): void
	{
		this.subscriptions.forEach(x => x.unsubscribe());
	}
}
