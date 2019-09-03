import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LeagueEffects } from './effects/league.effects';
import { leagueFeatureKey, reducer } from './reducers/league.reducer';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature(leagueFeatureKey, reducer),
		EffectsModule.forFeature([LeagueEffects])
	]
})
export class LeagueModule { }
