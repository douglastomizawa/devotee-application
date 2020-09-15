import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WhoAreYouComponent } from './who-are-you.component';


const whoAreYou = [{path: '', component: WhoAreYouComponent}];

@NgModule({
  imports: [RouterModule.forChild(whoAreYou)],
  exports: [RouterModule]
})
export class WhoAreYouRountingModule{}
