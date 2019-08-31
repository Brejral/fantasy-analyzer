import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './reducer';
import { EntityDataModule } from '@ngrx/data';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		StoreModule.forRoot(reducers),
		EffectsModule.forRoot([]),
		environment.production ? [] : StoreDevtoolsModule.instrument(),
		EntityDataModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
