/** Draft Pick Model */
// tslint:disable
export interface DraftPick
{
	round: number;
	roster_id: number;
	player_id: string;
	picked_by: string;
	pick_no: number;
	metadata: {
		years_exp: string;
		team: string;
		status: string;
		sport: string;
		position: string;
		pos_pick_order: number;
		player_id: string;
		number: string;
		news_updated: string;
		last_name: string;
		injury_status: string;
		first_name: string;
	},
	is_keeper: null,
	draft_slot: number;
	draft_id: string;
}
