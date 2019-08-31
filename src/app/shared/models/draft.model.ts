/** Draft Model */
// tslint:disable
export interface Draft
{
	type: string;
	status: string;
	start_time: number,
	sport: string;
	slot_to_roster_id: {
		[slot: string]: number;
	},
	settings: {
		teams: number;
		slots_wr: number;
		slots_te: number;
		slots_rb: number;
		slots_qb: number;
		slots_k: number;
		slots_flex: number;
		slots_bn: number;
		rounds: number;
		player_type: number;
		pick_timer: number;
		cpu_autopick: number;
		alpha_sort: number;
	},
	season_type: string;
	season: string;
	metadata: {
		scoring_type: string;
		name: string;
		description: string;
	},
	league_id: string;
	last_picked: number;
	last_message_time: number;
	last_message_id: string;
	draft_order: {
		[user_id: string]: number;
	},
	draft_id: string;
	creators: string[],
	created: number;
}
