import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SugestionMatchesComponent } from './sugestion-matches.component';


const sugestionMatchesdRoutes = [{path: '', component: SugestionMatchesComponent},
];

@NgModule({
  imports:[RouterModule.forChild(sugestionMatchesdRoutes)],
  exports:[RouterModule]
})
export class SugestionMatchesRountingModule{}
