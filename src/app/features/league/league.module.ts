import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { leagueFeatureKey, reducer } from './reducers/league.reducer';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature(leagueFeatureKey, reducer),
		EffectsModule.forFeature([])
	]
})
export class LeagueModule { }
