import { Draft, League, Players } from '../models';

export interface LeagueViewModel
{
	league: League;
	players: Players;
	draft: Draft;
}
