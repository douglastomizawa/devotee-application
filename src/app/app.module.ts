import { rootReducer } from './store/root.reducer';
import { QRCodeModule } from 'angularx-qrcode';
import { AuthGuardService } from './core/guards/auth.guard.service';
import { TranslateService } from './shared/translate.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { RedirectCreateContinueService } from './core/services-redirect/redirect-create-continue.service';
import { HttpClientModule } from '@angular/common/http';
import { RedirectLoggedService } from './core/services-redirect/redirect-logged.service';
import { LoggedGuardService } from './core/guards/logged.guard.service';
import { BlockInitialPageService } from './core/guards/block-initial-page.guard.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<any, any> [] = [debug];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    HttpClientModule,
    MatIconModule,
    CommonModule,
    QRCodeModule,
    SharedModule,
    StoreModule.forRoot(rootReducer, {metaReducers}),
  ],
  exports: [
    MatButtonModule,
  ],
  providers: [
    TranslateService,
    RedirectCreateContinueService,
    AuthGuardService,
    LoggedGuardService,
    RedirectLoggedService,
    BlockInitialPageService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
