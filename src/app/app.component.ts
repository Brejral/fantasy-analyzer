import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoadDraft, LoadLeague, LoadPlayers, LoadStats } from './features/league/actions/league.actions';
import * as fromRoot from './reducer';
import { Draft, DraftPick, League, LeagueUser, Players } from './shared/models';
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
	private viewModel$: Observable<LeagueViewModel>;
	private subscriptions: Subscription[];
	constructor(private store: Store<fromRoot.State>)
	{
		this.league$ = store.select(x => x.league.league);
		this.players$ = store.select(x => x.league.players);
		this.draft$ = store.select(x => x.league.draft);
		this.viewModel$ = combineLatest(
			this.league$,
			this.players$,
			this.draft$
		).pipe(
			map(([league, players, draft]) =>
			{
				if (league && players && draft && draft.draft_picks && league.users && league.rosters)
				{
					const sortedUsers: LeagueUser[] = [...league.users];
					sortedUsers.sort((a, b) =>
					{
						return draft.draft_order[a.user_id] - draft.draft_order[b.user_id];
					});
					if (draft.type === 'snake')
					{
						const sortedDraftPicks: DraftPick[] = [];
						let j: number;
						let change: number;
						// tslint:disable: prefer-for-of
						for (let i: number = 0; i < draft.settings.rounds; i++)
						{
							j = i % 2 === 0 ? 0 : league.users.length - 1;
							change = i % 2 === 0 ? 1 : -1;
							while (j >= 0 && j < league.users.length)
							{
								sortedDraftPicks.push(draft.draft_picks[(i * league.users.length) + j]);
								j += change;
							}
						}
						draft.draft_picks = sortedDraftPicks;
					}
					return {
						league,
						players,
						draft,
						sortedUsers
					} as LeagueViewModel;
				}
				return null;
			})
		);

		this.subscriptions = [
			this.viewModel$.subscribe(x => this.viewModel = x)
		];
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
