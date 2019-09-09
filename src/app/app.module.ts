import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueEffects } from './features/league/effects/league.effects';
import { reducers } from './reducer';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NgbModule,
		StoreModule.forRoot(reducers),
		EffectsModule.forRoot([LeagueEffects]),
		environment.production ? [] : StoreDevtoolsModule.instrument()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
