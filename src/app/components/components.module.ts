import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header-logo/header-logo.component';
import { TitleAndSubComponent } from './title-and-sub/title-and-sub.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SugestionMatchesRountingModule } from '../logged/sugestion-matches/sugestion-matches.rounting.module';
import { ProfileComponent } from './profile/profile.component';
import { DeleteAccountComponent } from './dialogs/delete-account/delete-account.component';



@NgModule({
  declarations: [HeaderComponent, TitleAndSubComponent, LoadingSpinnerComponent, ProfileComponent, DeleteAccountComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    CommonModule,
    SugestionMatchesRountingModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
  ],
  exports:[
    HeaderComponent,
    TitleAndSubComponent,
    LoadingSpinnerComponent,
    ProfileComponent
  ]
})
export class ComponentsModule { }
