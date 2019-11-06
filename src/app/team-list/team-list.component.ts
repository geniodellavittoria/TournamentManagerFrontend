import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { GroupService } from '../../services/group.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'members', 'isPaid', 'group'];
  teams: Team[] = [];
  groups: Group[] = [];

  constructor(
    private teamService: TeamService,
  ) {
    this.teamService.getTeams().subscribe(teams => {
      console.log(teams);
      this.teams = teams;
    });
  }

  ngOnInit() {

  }

  public showDetail(team: Team) {
    console.log(team);
  }

}
