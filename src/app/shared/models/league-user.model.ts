/** League User Model */
// tslint:disable
export interface LeagueUser
{
	user_id: string;
	settings: string;
	metadata: {
		mention_pn: string;
		allow_pn: string;
	},
	league_id: string;
	is_owner: boolean;
	is_bot: boolean;
	display_name: string;
	avatar: string;
}
