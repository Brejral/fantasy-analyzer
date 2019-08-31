import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import * as fromLeague from '../features/league/reducers/league.reducer';

/** Ngrx Root Store State */
export interface State
{
	/** League Feature State */
	league: fromLeague.State;
}

export const reducers: ActionReducerMap<State> = {
	league: fromLeague.reducer
};
