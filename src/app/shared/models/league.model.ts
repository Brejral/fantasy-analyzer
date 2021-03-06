import { LeagueRoster } from './league-roster.model';
import { LeagueUser } from './league-user.model';

/** League Model */
// tslint:disable
export interface League
{
	total_rosters: number;
	status: string;
	sport: string;
	shard: number;
	settings: {
		waiver_type: number;
		waiver_day_of_week: number;
		waiver_clear_days: number;
		waiver_budget: number;
		type: number;
		trade_review_days: number;
		trade_deadline: number;
		taxi_years: number;
		taxi_slots: number;
		taxi_deadline: number;
		taxi_allow_vets: number;
		reserve_slots: number;
		reserve_allow_sus: number;
		reserve_allow_out: number;
		reserve_allow_doubtful: number;
		playoff_week_start: number;
		playoff_type: number;
		playoff_teams: number;
		pick_trading: number;
		offseason_adds: number;
		num_teams: number;
		max_keepers: number;
		leg: number;
		league_average_match: number;
		draft_rounds: number;
		divisions: number;
		disable_adds: number;
		daily_waivers_hour: number;
		daily_waivers: number;
		capacity_override: number;
		bench_lock: number;
	},
	season_type: string;
	season: string;
	scoring_settings: {
		pass_2pt: number;
		pass_int: number;
		fgmiss: number;
		rec_yd: number;
		xpmiss: number;
		fgm_30_39: number;
		blk_kick: number;
		pts_allow_7_13: number;
		ff: number;
		fgm_20_29: number;
		fgm_40_49: number;
		pts_allow_1_6: number;
		st_fum_rec: number;
		def_st_ff: number;
		st_ff: number;
		bonus_rec_te: number;
		bonus_rec_rb: number;
		pts_allow_28_34: number;
		fgm_50p: number;
		fum_rec: number;
		def_td: number;
		fgm_0_19: number;
		int: number;
		pts_allow_0: number;
		pts_allow_21_27: number;
		rec_2pt: number;
		rec: number;
		xpm: number;
		st_td: number;
		def_st_fum_rec: number;
		def_st_td: number;
		sack: number;
		rush_2pt: number;
		rec_td: number;
		pts_allow_35p: number;
		pts_allow_14_20: number;
		rush_yd: number;
		pass_yd: number;
		pass_td: number;
		rush_td: number;
		bonus_rec_wr: number;
		fum_lost: number;
		fum: number;
		safe: number;
	},
	roster_positions: string[],
	previous_league_id: string;
	name: string;
	metadata: string;
	loser_bracket_id: string;
	league_id: string;
	last_read_id: string;
	last_pinned_message_id: string;
	last_message_time: number;
	last_message_text_map: {},
	last_author_is_bot: true,
	last_author_id: string;
	last_author_display_name: string;
	last_author_avatar: string;
	group_id: string;
	draft_id: string;
	company_id: string;
	bracket_id: string;
	avatar: string,
	rosters: LeagueRoster[],
	users: LeagueUser[]
}
