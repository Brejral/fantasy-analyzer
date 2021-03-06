/** League Roster Model */
// tslint:disable
export interface LeagueRoster
{
	taxi: string;
	starters: string[],
	settings: {
		wins: number;
		waiver_position: number;
		waiver_budget_used: number;
		total_moves: number;
		ties: number;
		losses: number;
		fpts: number;
		division: number;
	},
	roster_id: number;
	reserve: string;
	players: string;
	player_map: string;
	owner_id: string;
	metadata: string;
	league_id: string;
	co_owners: null
}
