import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupGamesComponent } from './group-games/group-games.component';


const routes: Routes = [
  {
    path: 'settings', component: SettingsComponent
  },
  {
    path: 'groups', component: GroupListComponent
  },
  {
    path: 'teams', component: TeamListComponent
  },
  {
    path: 'team/:id', component: TeamDetailComponent
  },
  {
    path: 'games', component: GroupGamesComponent
  },
  {
    path: 'group/:id', component: GroupDetailComponent
  },
  { path: '', component: TeamListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
