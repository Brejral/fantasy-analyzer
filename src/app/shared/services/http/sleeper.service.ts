import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Draft, DraftPick, League, LeagueRoster, LeagueUser, Players, Stats } from '../../models';

@Injectable({
	providedIn: 'root'
})
export class SleeperService
{
	constructor(private http: HttpClient)
	{

	}

	/** Get Players From Sleeper API */
	public getPlayers(): Observable<Players>
	{
		return this.http.get<Players>(environment.sleeperUrl + '/players/nfl');
	}

	/** Get Players From Sleeper API */
	public getStats(): Observable<Stats>
	{
		return this.http.get<Stats>(environment.sleeperUrl + '/players/nfl');
	}

	/** Get League From Sleeper API */
	public getLeague(leagueId: string): Observable<League>
	{
		return this.http.get<League>(environment.sleeperUrl + '/league/' + leagueId);
	}

	/** Get League From Sleeper API */
	public getLeagueDrafts(leagueId: string): Observable<League>
	{
		return this.http.get<League>(environment.sleeperUrl + '/league/' + leagueId);
	}

	public getLeagueUsers(leagueId: string): Observable<LeagueUser[]>
	{
		return this.http.get<LeagueUser[]>(environment.sleeperUrl + '/league/' + leagueId + '/users');
	}

	public getLeagueRosters(leagueId: string): Observable<LeagueRoster[]>
	{
		return this.http.get<LeagueRoster[]>(environment.sleeperUrl + '/league/' + leagueId + '/rosters');
	}

	/** Get League From Sleeper API */
	public getDraft(draftId: string): Observable<Draft>
	{
		return this.http.get<Draft>(environment.sleeperUrl + '/draft/' + draftId);
	}

	/** Get League From Sleeper API */
	public getDraftPicks(draftId: string): Observable<DraftPick[]>
	{
		return this.http.get<DraftPick[]>(environment.sleeperUrl + '/draft/' + draftId + '/picks');
	}
}
