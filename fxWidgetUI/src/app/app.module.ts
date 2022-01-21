import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app-service';
import { AppComponent } from './app.component';
import { FxWidgetEffect } from './store/fxwidget.effect';
import { reducer } from './store/fxwidget.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,      
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({app: reducer}),
    EffectsModule.forRoot([FxWidgetEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
