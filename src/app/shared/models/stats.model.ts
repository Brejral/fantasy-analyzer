import { PlayerStats } from './player-stats.model';

/** Stats Model */
// tslint:disable
export interface Stats
{
	[player_id: string]: PlayerStats;
}
