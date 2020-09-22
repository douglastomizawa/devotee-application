import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatchesComponent } from './matches.component';


const matchesdRoutes = [{path: '', component: MatchesComponent},
];

@NgModule({
  imports:[RouterModule.forChild(matchesdRoutes)],
  exports:[RouterModule]
})
export class MatchesRountingModule{}
