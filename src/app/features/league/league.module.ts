import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { leagueFeatureKey, leagueReducer } from './reducers/league.reducer';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature(leagueFeatureKey, leagueReducer),
		EffectsModule.forFeature([])
	]
})
export class LeagueModule { }
