import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LeagueEffects } from './effects/league.effects';
import { leagueFeatureKey, leagueReducer } from './reducers/league.reducer';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature(leagueFeatureKey, leagueReducer),
		EffectsModule.forFeature([LeagueEffects])
	]
})
export class LeagueModule { }
