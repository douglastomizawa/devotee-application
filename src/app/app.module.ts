import { AuthGuardService } from './core/guards/auth.guard.service';
import { TranslateService } from './shared/translate.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { RedirectCreateContinueService } from './core/services/redirect-create-continue.service';

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
  ],
  exports: [
    MatButtonModule
  ],
  providers: [
    TranslateService,
    RedirectCreateContinueService,
    AuthGuardService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
