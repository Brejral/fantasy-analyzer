import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { League, Players } from '../../models';

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

	/** Get League From Sleeper API */
	public getLeague(leagueId: string): Observable<League>
	{
		return this.http.get<League>(environment.sleeperUrl + '/league/' + leagueId);
	}
}
