import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SugestionMatchesComponent } from './sugestion-matches.component';


const matchesdRoutes = [{path: '', component: SugestionMatchesComponent},
];

@NgModule({
  imports:[RouterModule.forChild(matchesdRoutes)],
  exports:[RouterModule]
})
export class SugestionMatchesRountingModule{}
