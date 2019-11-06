import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupGamesComponent } from './group-games/group-games.component';
import { GroupStageGamesComponent } from './group-stage-games/group-stage-games.component';
import { SecondGroupStageGamesComponent } from './second-group-stage-games/second-group-stage-games.component';
import { FinalGamesComponent } from './final-games/final-games.component';


const routes: Routes = [
  {
    path: 'groupstage', component: GroupStageGamesComponent
  },
  {
    path: 'secondgroupstage', component: SecondGroupStageGamesComponent
  },
  {
    path: 'finalgames', component: FinalGamesComponent
  },
  { path: '', component: GroupStageGamesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
