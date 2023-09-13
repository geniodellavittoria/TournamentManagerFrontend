import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupGamesComponent } from './group-games/group-games.component';
import { GroupStageGamesComponent } from './xlsx-viewer/group-stage-games/group-stage-games.component';
import { SecondGroupStageGamesComponent } from './xlsx-viewer/second-group-stage-games/second-group-stage-games.component';
import { FinalGamesComponent } from './xlsx-viewer/final-games/final-games.component';


const routes: Routes = [
  {
    path: 'groups', component: GroupListComponent
  },
  {
    path: 'group/:id', component: GroupDetailComponent
  },
  {
    path: 'teams', component: TeamListComponent
  },
  {
    path: 'team/:id', component: TeamDetailComponent
  },
  { path: '', component: GroupListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
