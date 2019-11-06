import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SettingsComponent } from './settings/settings.component';
import { TeamListComponent } from './team-list/team-list.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatFormFieldModule,
  MatInputModule, MatToolbarModule,
  MatTabsModule, MatListModule, MatChipsModule, MatCardModule, MatAutocompleteModule, MatTableModule, MatGridListModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupGamesComponent } from './group-games/group-games.component';
import { GroupRankingComponent } from './group-ranking/group-ranking.component';
import { GroupStageGamesComponent } from './group-stage-games/group-stage-games.component';
import { SecondGroupStageGamesComponent } from './second-group-stage-games/second-group-stage-games.component';
import { FinalGamesComponent } from './final-games/final-games.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    TeamListComponent,
    TeamDetailComponent,
    GroupListComponent,
    GroupDetailComponent,
    GroupGamesComponent,
    GroupRankingComponent,
    GroupStageGamesComponent,
    SecondGroupStageGamesComponent,
    FinalGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatListModule,
    MatChipsModule,
    MatCardModule,
    MatAutocompleteModule,
    MatTableModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
