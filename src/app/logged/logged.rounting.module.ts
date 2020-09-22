import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoggedComponent } from './logged.component';

const loggedRoutes = [{path: '', component: LoggedComponent, children:[
  {path: 'matches', loadChildren: () => import('src/app/logged/matches/matches.module').then(m => m.MatchesModule)}
]},
];

@NgModule({
  imports:[RouterModule.forChild(loggedRoutes)],
  exports:[RouterModule]
})
export class LoggedRountingModule{}
