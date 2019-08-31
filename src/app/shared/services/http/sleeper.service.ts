import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Players } from '../../models';

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
}
