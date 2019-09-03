import { Component, OnDestroy } from '@angular/core';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { League, Players } from './shared/models';
import { SleeperService } from './shared/services/http';
import { LeagueViewModel } from './shared/view-models/league.view-model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy
{
	public isLoading: boolean = true;
	public viewModel: LeagueViewModel;
	private league$: Observable<League>;
	private players$: Observable<Players>;
	private get viewModel$(): Observable<LeagueViewModel>
	{
		return combineLatest(
			this.league$,
			this.players$,
			this.sleeperService.getDraft(environment.draftId),
			this.sleeperService.getDraftPicks(environment.draftId),
			this.sleeperService.getStats()
		).pipe(
			map(([league, players, draft, draftPicks, stats]) =>
			{
				if (league && players && draft && draftPicks && stats)
				{
					draft.draft_picks = draftPicks;
					return {
						league,
						players,
						draft,
						draftPicks
					} as LeagueViewModel;
				}
				return null;
			})
		);
	}
	private subscriptions: Subscription[];
	constructor(private sleeperService: SleeperService)
	{
		this.league$ = this.sleeperService.getLeague(environment.leagueId);
		this.players$ = this.sleeperService.getPlayers();
		this.subscriptions = [
			this.viewModel$.subscribe(x => this.viewModel = x)
		];
	}

	public ngOnDestroy(): void
	{
		this.subscriptions.forEach(x => x.unsubscribe());
	}
}
