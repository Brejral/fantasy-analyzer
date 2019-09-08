import { Draft, League, LeagueUser, Players } from '../models';

export interface LeagueViewModel
{
	league: League;
	players: Players;
	draft: Draft;
	sortedUsers: LeagueUser[];
}
